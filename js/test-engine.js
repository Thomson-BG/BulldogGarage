// Test Engine for Taking Tests
// Handles test session, timing, scoring, and certificate generation

class TestEngine {
    constructor() {
        this.currentTest = null;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.startTime = null;
        this.timerInterval = null;
        this.testManager = new TestManager();
    }

    // Start a test session
    startTest(testId, studentInfo) {
        const test = this.testManager.getTest(testId);
        if (!test) {
            throw new Error('Test not found');
        }

        this.currentTest = test;
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.startTime = Date.now();
        this.studentInfo = studentInfo;

        // Shuffle questions for each attempt
        this.currentTest.questions = this.shuffleArray([...test.questions]);

        this.createTestInterface();
        this.startTimer();
        this.showQuestion(0);
    }

    // Create the test taking interface
    createTestInterface() {
        const testHTML = `
            <div id="testInterface" class="test-interface">
                <div class="test-header">
                    <div class="test-info">
                        <h2 id="testTitle">${this.currentTest.name}</h2>
                        <p id="testDescription">${this.currentTest.description}</p>
                    </div>
                    <div class="test-timer">
                        <div id="timeRemaining">${this.currentTest.timeLimit}:00</div>
                    </div>
                </div>
                
                <div class="test-progress">
                    <div class="progress-bar">
                        <div id="progressFill" class="progress-fill" style="width: 0%"></div>
                    </div>
                    <div class="progress-text">
                        Question <span id="currentQuestionNum">1</span> of <span id="totalQuestions">${this.currentTest.questions.length}</span>
                    </div>
                </div>

                <div id="questionContainer" class="question-container">
                    <!-- Question content will be loaded here -->
                </div>

                <div class="test-navigation">
                    <button id="prevButton" class="button button-secondary" onclick="testEngine.previousQuestion()" disabled>Previous</button>
                    <button id="nextButton" class="button button-primary" onclick="testEngine.nextQuestion()">Next</button>
                    <button id="submitButton" class="button button-primary" onclick="testEngine.submitTest()" style="display: none;">Submit Test</button>
                </div>
            </div>
        `;

        // Hide the current page content and show test interface
        document.body.innerHTML = testHTML;
        this.addTestStyles();
    }

    // Add styles for test interface
    addTestStyles() {
        if (document.getElementById('testStyles')) return;

        const styles = `
            <style id="testStyles">
                .test-interface {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                
                .test-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 30px;
                    padding: 20px;
                    background: #f8f9fa;
                    border-radius: 8px;
                }
                
                .test-timer {
                    font-size: 24px;
                    font-weight: bold;
                    color: #0071e3;
                }
                
                .test-progress {
                    margin-bottom: 30px;
                }
                
                .progress-bar {
                    width: 100%;
                    height: 8px;
                    background: #e5e5e7;
                    border-radius: 4px;
                    overflow: hidden;
                    margin-bottom: 10px;
                }
                
                .progress-fill {
                    height: 100%;
                    background: #0071e3;
                    transition: width 0.3s ease;
                }
                
                .progress-text {
                    text-align: center;
                    color: #666;
                }
                
                .question-container {
                    background: #fff;
                    border: 1px solid #d2d2d7;
                    border-radius: 8px;
                    padding: 30px;
                    margin-bottom: 30px;
                    min-height: 300px;
                }
                
                .question-text {
                    font-size: 18px;
                    font-weight: 600;
                    margin-bottom: 20px;
                    line-height: 1.5;
                }
                
                .question-options {
                    list-style: none;
                    padding: 0;
                }
                
                .option-item {
                    margin-bottom: 15px;
                }
                
                .option-item label {
                    display: flex;
                    align-items: center;
                    padding: 15px;
                    border: 2px solid #e5e5e7;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .option-item label:hover {
                    border-color: #0071e3;
                    background: #f0f8ff;
                }
                
                .option-item input[type="radio"]:checked + span {
                    color: #0071e3;
                    font-weight: 600;
                }
                
                .option-item input[type="radio"]:checked ~ label {
                    border-color: #0071e3;
                    background: #f0f8ff;
                }
                
                .test-navigation {
                    display: flex;
                    justify-content: space-between;
                    gap: 15px;
                }
                
                .button {
                    padding: 12px 24px;
                    border: none;
                    border-radius: 6px;
                    font-size: 16px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }
                
                .button-primary {
                    background: #0071e3;
                    color: white;
                }
                
                .button-primary:hover {
                    background: #0056b3;
                }
                
                .button-secondary {
                    background: #e5e5e7;
                    color: #1a1a1a;
                }
                
                .button-secondary:hover {
                    background: #d2d2d7;
                }
                
                .button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                
                .short-answer-input {
                    width: 100%;
                    padding: 15px;
                    border: 2px solid #e5e5e7;
                    border-radius: 8px;
                    font-size: 16px;
                    resize: vertical;
                    min-height: 100px;
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // Show a specific question
    showQuestion(index) {
        if (index < 0 || index >= this.currentTest.questions.length) return;

        this.currentQuestionIndex = index;
        const question = this.currentTest.questions[index];
        
        let questionHTML = `
            <div class="question-text">${question.question}</div>
        `;

        if (question.type === 'multiple-choice') {
            questionHTML += '<ul class="question-options">';
            question.options.forEach((option, i) => {
                const optionLetter = String.fromCharCode(65 + i); // A, B, C, D
                const isChecked = this.answers[question.id] === optionLetter ? 'checked' : '';
                questionHTML += `
                    <li class="option-item">
                        <label>
                            <input type="radio" name="question_${question.id}" value="${optionLetter}" ${isChecked} onchange="testEngine.saveAnswer('${question.id}', '${optionLetter}')">
                            <span style="margin-left: 10px;"><strong>${optionLetter}.</strong> ${option}</span>
                        </label>
                    </li>
                `;
            });
            questionHTML += '</ul>';
        } else if (question.type === 'true-false') {
            const trueChecked = this.answers[question.id] === 'True' ? 'checked' : '';
            const falseChecked = this.answers[question.id] === 'False' ? 'checked' : '';
            questionHTML += `
                <ul class="question-options">
                    <li class="option-item">
                        <label>
                            <input type="radio" name="question_${question.id}" value="True" ${trueChecked} onchange="testEngine.saveAnswer('${question.id}', 'True')">
                            <span style="margin-left: 10px;"><strong>True</strong></span>
                        </label>
                    </li>
                    <li class="option-item">
                        <label>
                            <input type="radio" name="question_${question.id}" value="False" ${falseChecked} onchange="testEngine.saveAnswer('${question.id}', 'False')">
                            <span style="margin-left: 10px;"><strong>False</strong></span>
                        </label>
                    </li>
                </ul>
            `;
        } else if (question.type === 'short-answer') {
            const currentAnswer = this.answers[question.id] || '';
            questionHTML += `
                <textarea class="short-answer-input" 
                    placeholder="Enter your answer here..." 
                    onchange="testEngine.saveAnswer('${question.id}', this.value)"
                >${currentAnswer}</textarea>
            `;
        }

        document.getElementById('questionContainer').innerHTML = questionHTML;
        
        // Update progress
        const progress = ((index + 1) / this.currentTest.questions.length) * 100;
        document.getElementById('progressFill').style.width = progress + '%';
        document.getElementById('currentQuestionNum').textContent = index + 1;
        
        // Update navigation buttons
        document.getElementById('prevButton').disabled = index === 0;
        document.getElementById('nextButton').style.display = index === this.currentTest.questions.length - 1 ? 'none' : 'block';
        document.getElementById('submitButton').style.display = index === this.currentTest.questions.length - 1 ? 'block' : 'none';
    }

    // Save answer for current question
    saveAnswer(questionId, answer) {
        this.answers[questionId] = answer;
    }

    // Navigate to next question
    nextQuestion() {
        if (this.currentQuestionIndex < this.currentTest.questions.length - 1) {
            this.showQuestion(this.currentQuestionIndex + 1);
        }
    }

    // Navigate to previous question
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.showQuestion(this.currentQuestionIndex - 1);
        }
    }

    // Start the timer
    startTimer() {
        const timeLimit = this.currentTest.timeLimit * 60; // Convert to seconds
        let timeLeft = timeLimit;

        this.timerInterval = setInterval(() => {
            timeLeft--;
            
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            document.getElementById('timeRemaining').textContent = 
                `${minutes}:${seconds.toString().padStart(2, '0')}`;
            
            // Change color when time is running out
            if (timeLeft <= 300) { // 5 minutes
                document.getElementById('timeRemaining').style.color = '#ff3b30';
            }
            
            if (timeLeft <= 0) {
                this.submitTest();
            }
        }, 1000);
    }

    // Submit the test
    submitTest() {
        clearInterval(this.timerInterval);
        
        const endTime = Date.now();
        const timeTaken = Math.round((endTime - this.startTime) / 1000 / 60); // minutes
        
        const results = this.calculateResults();
        this.showResults(results, timeTaken);
        this.generateCertificate(results, timeTaken);
    }

    // Calculate test results
    calculateResults() {
        let totalQuestions = this.currentTest.questions.length;
        let correctAnswers = 0;
        let totalPoints = 0;
        let earnedPoints = 0;

        this.currentTest.questions.forEach(question => {
            totalPoints += question.points;
            
            const userAnswer = this.answers[question.id];
            const correctAnswer = question.correctAnswer;
            
            if (question.type === 'multiple-choice' || question.type === 'true-false') {
                if (userAnswer === correctAnswer) {
                    correctAnswers++;
                    earnedPoints += question.points;
                }
            } else if (question.type === 'short-answer') {
                // Simple comparison for short answer (could be enhanced)
                if (userAnswer && userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
                    correctAnswers++;
                    earnedPoints += question.points;
                }
            }
        });

        const percentage = Math.round((correctAnswers / totalQuestions) * 100);
        const passed = percentage >= this.currentTest.passingScore;

        return {
            totalQuestions,
            correctAnswers,
            percentage,
            totalPoints,
            earnedPoints,
            passed,
            passingScore: this.currentTest.passingScore
        };
    }

    // Show test results
    showResults(results, timeTaken) {
        const resultsHTML = `
            <div class="test-results">
                <div class="results-header">
                    <h2>Test Complete!</h2>
                    <div class="score-display ${results.passed ? 'passed' : 'failed'}">
                        ${results.correctAnswers}/${results.totalQuestions} - ${results.percentage}%
                    </div>
                </div>
                
                <div class="results-details">
                    <div class="result-item">
                        <span class="label">Test:</span>
                        <span class="value">${this.currentTest.name}</span>
                    </div>
                    <div class="result-item">
                        <span class="label">Time Taken:</span>
                        <span class="value">${timeTaken} minutes</span>
                    </div>
                    <div class="result-item">
                        <span class="label">Score:</span>
                        <span class="value">${results.correctAnswers}/${results.totalQuestions} (${results.percentage}%)</span>
                    </div>
                    <div class="result-item">
                        <span class="label">Passing Score:</span>
                        <span class="value">${results.passingScore}%</span>
                    </div>
                    <div class="result-item">
                        <span class="label">Result:</span>
                        <span class="value ${results.passed ? 'passed' : 'failed'}">
                            ${results.passed ? 'PASSED' : 'FAILED'}
                        </span>
                    </div>
                </div>
                
                <div class="results-actions">
                    <button class="button button-primary" onclick="testEngine.downloadCertificate()">
                        Download Certificate
                    </button>
                    <button class="button button-secondary" onclick="window.location.reload()">
                        Back to Tests
                    </button>
                </div>
            </div>
        `;

        document.getElementById('testInterface').innerHTML = resultsHTML;
        this.addResultsStyles();
    }

    // Add styles for results page
    addResultsStyles() {
        const styles = `
            <style>
                .test-results {
                    max-width: 600px;
                    margin: 50px auto;
                    padding: 40px;
                    text-align: center;
                }
                
                .results-header h2 {
                    font-size: 32px;
                    margin-bottom: 20px;
                    color: #1a1a1a;
                }
                
                .score-display {
                    font-size: 48px;
                    font-weight: bold;
                    margin-bottom: 30px;
                    padding: 20px;
                    border-radius: 12px;
                }
                
                .score-display.passed {
                    background: #d4edda;
                    color: #155724;
                    border: 2px solid #c3e6cb;
                }
                
                .score-display.failed {
                    background: #f8d7da;
                    color: #721c24;
                    border: 2px solid #f5c6cb;
                }
                
                .results-details {
                    text-align: left;
                    margin-bottom: 30px;
                }
                
                .result-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    border-bottom: 1px solid #e5e5e7;
                }
                
                .result-item .label {
                    font-weight: 600;
                    color: #666;
                }
                
                .result-item .value {
                    font-weight: 600;
                }
                
                .result-item .value.passed {
                    color: #28a745;
                }
                
                .result-item .value.failed {
                    color: #dc3545;
                }
                
                .results-actions {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                }
            </style>
        `;
        
        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // Generate and download certificate
    generateCertificate(results, timeTaken) {
        // Store certificate data for download
        this.certificateData = {
            studentName: this.studentInfo.name,
            studentId: this.studentInfo.studentId,
            email: this.studentInfo.email,
            testName: this.currentTest.name,
            score: `${results.correctAnswers}/${results.totalQuestions}`,
            percentage: results.percentage,
            dateTaken: new Date().toLocaleDateString(),
            timeTaken: timeTaken,
            passed: results.passed
        };
    }

    // Download certificate as PDF (simplified version)
    downloadCertificate() {
        const cert = this.certificateData;
        
        // Create a simple HTML certificate that can be printed/saved as PDF
        const certificateWindow = window.open('', '_blank');
        certificateWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Certificate - ${cert.testName}</title>
                <style>
                    body {
                        font-family: 'Times New Roman', serif;
                        margin: 0;
                        padding: 40px;
                        background: #fff;
                    }
                    
                    .certificate {
                        max-width: 800px;
                        margin: 0 auto;
                        border: 8px solid #0071e3;
                        padding: 60px;
                        text-align: center;
                        background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    }
                    
                    .header {
                        margin-bottom: 40px;
                    }
                    
                    .title {
                        font-size: 48px;
                        font-weight: bold;
                        color: #0071e3;
                        margin-bottom: 10px;
                        text-transform: uppercase;
                        letter-spacing: 3px;
                    }
                    
                    .subtitle {
                        font-size: 24px;
                        color: #666;
                        font-style: italic;
                    }
                    
                    .content {
                        margin: 40px 0;
                        line-height: 2;
                    }
                    
                    .student-name {
                        font-size: 36px;
                        font-weight: bold;
                        color: #1a1a1a;
                        text-decoration: underline;
                        margin: 20px 0;
                    }
                    
                    .test-info {
                        font-size: 20px;
                        margin: 20px 0;
                    }
                    
                    .score {
                        font-size: 72px;
                        font-weight: bold;
                        color: ${cert.passed ? '#28a745' : '#dc3545'};
                        margin: 30px 0;
                        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
                    }
                    
                    .details {
                        font-size: 16px;
                        margin-top: 40px;
                        text-align: left;
                        max-width: 400px;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    
                    .detail-row {
                        display: flex;
                        justify-content: space-between;
                        margin: 10px 0;
                        padding: 5px 0;
                        border-bottom: 1px dotted #ccc;
                    }
                    
                    .footer {
                        margin-top: 40px;
                        font-size: 14px;
                        color: #666;
                    }
                    
                    @media print {
                        body { margin: 0; padding: 20px; }
                        .certificate { border-width: 4px; padding: 40px; }
                    }
                </style>
            </head>
            <body>
                <div class="certificate">
                    <div class="header">
                        <div class="title">Certificate of Completion</div>
                        <div class="subtitle">Bulldog Garage Automotive Program</div>
                    </div>
                    
                    <div class="content">
                        <p style="font-size: 18px;">This certifies that</p>
                        <div class="student-name">${cert.studentName}</div>
                        <p style="font-size: 18px;">has successfully completed</p>
                        <div class="test-info"><strong>${cert.testName}</strong></div>
                        
                        <div class="score">${cert.score} - ${cert.percentage}%</div>
                        
                        <div class="details">
                            <div class="detail-row">
                                <span>Student ID:</span>
                                <span>${cert.studentId}</span>
                            </div>
                            <div class="detail-row">
                                <span>Email:</span>
                                <span>${cert.email}</span>
                            </div>
                            <div class="detail-row">
                                <span>Date Completed:</span>
                                <span>${cert.dateTaken}</span>
                            </div>
                            <div class="detail-row">
                                <span>Time Taken:</span>
                                <span>${cert.timeTaken} minutes</span>
                            </div>
                            <div class="detail-row">
                                <span>Status:</span>
                                <span style="color: ${cert.passed ? '#28a745' : '#dc3545'}; font-weight: bold;">
                                    ${cert.passed ? 'PASSED' : 'FAILED'}
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>Generated on ${new Date().toLocaleString()}</p>
                        <p>Bulldog Garage - Automotive Technology Program</p>
                    </div>
                </div>
                
                <script>
                    window.onload = function() {
                        window.print();
                    }
                </script>
            </body>
            </html>
        `);
        
        certificateWindow.document.close();
    }

    // Utility function to shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
}

// Create global instance
window.TestEngine = TestEngine;
let testEngine = new TestEngine();