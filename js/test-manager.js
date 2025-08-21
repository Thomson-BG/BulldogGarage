// Test Management System for Bulldog Garage
// Handles CRUD operations for tests, questions, and answers

class TestManager {
    constructor() {
        this.storageKey = 'bulldogGarageTests';
        this.init();
    }

    init() {
        // Initialize with sample data if no tests exist
        if (!this.getTests().length) {
            this.initializeSampleTests();
        }
    }

    // Get all tests
    getTests() {
        const tests = localStorage.getItem(this.storageKey);
        return tests ? JSON.parse(tests) : [];
    }

    // Save tests to localStorage
    saveTests(tests) {
        localStorage.setItem(this.storageKey, JSON.stringify(tests));
    }

    // Create a new test
    createTest(testData) {
        const tests = this.getTests();
        const newTest = {
            id: this.generateId(),
            name: testData.name,
            description: testData.description,
            module: testData.module,
            year: testData.year,
            timeLimit: testData.timeLimit || 30, // minutes
            passingScore: testData.passingScore || 70, // percentage
            questions: testData.questions || [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        
        tests.push(newTest);
        this.saveTests(tests);
        return newTest;
    }

    // Get test by ID
    getTest(id) {
        const tests = this.getTests();
        return tests.find(test => test.id === id);
    }

    // Update test
    updateTest(id, testData) {
        const tests = this.getTests();
        const index = tests.findIndex(test => test.id === id);
        
        if (index !== -1) {
            tests[index] = {
                ...tests[index],
                ...testData,
                updatedAt: new Date().toISOString()
            };
            this.saveTests(tests);
            return tests[index];
        }
        return null;
    }

    // Delete test
    deleteTest(id) {
        const tests = this.getTests();
        const filteredTests = tests.filter(test => test.id !== id);
        this.saveTests(filteredTests);
        return filteredTests.length < tests.length;
    }

    // Add question to test
    addQuestion(testId, questionData) {
        const test = this.getTest(testId);
        if (!test) return null;

        const newQuestion = {
            id: this.generateId(),
            question: questionData.question,
            type: questionData.type || 'multiple-choice', // multiple-choice, true-false, short-answer
            options: questionData.options || [],
            correctAnswer: questionData.correctAnswer,
            explanation: questionData.explanation || '',
            points: questionData.points || 1
        };

        test.questions.push(newQuestion);
        return this.updateTest(testId, test);
    }

    // Update question
    updateQuestion(testId, questionId, questionData) {
        const test = this.getTest(testId);
        if (!test) return null;

        const questionIndex = test.questions.findIndex(q => q.id === questionId);
        if (questionIndex !== -1) {
            test.questions[questionIndex] = {
                ...test.questions[questionIndex],
                ...questionData
            };
            return this.updateTest(testId, test);
        }
        return null;
    }

    // Delete question
    deleteQuestion(testId, questionId) {
        const test = this.getTest(testId);
        if (!test) return null;

        test.questions = test.questions.filter(q => q.id !== questionId);
        return this.updateTest(testId, test);
    }

    // Import test from XLSX format
    importTestFromXLSX(file, testInfo) {
        return new Promise((resolve, reject) => {
            // This would normally use a library like SheetJS
            // For now, we'll provide the format and handle manual input
            reject(new Error('XLSX import requires SheetJS library. Please add questions manually or see format instructions.'));
        });
    }

    // Get test format instructions for XLSX
    getXLSXFormatInstructions() {
        return {
            format: "The XLSX file should have the following columns:",
            columns: [
                "A: Question Text (required)",
                "B: Question Type (multiple-choice, true-false, short-answer)",
                "C: Option A (for multiple choice)",
                "D: Option B (for multiple choice)",
                "E: Option C (for multiple choice)",
                "F: Option D (for multiple choice)",
                "G: Correct Answer (A, B, C, D for multiple choice; true/false for true-false; text for short-answer)",
                "H: Explanation (optional)",
                "I: Points (optional, defaults to 1)"
            ],
            example: "Row 1: Headers\nRow 2: 'What is the primary function of engine oil?', 'multiple-choice', 'Cooling the engine', 'Lubricating moving parts', 'Cleaning the fuel system', 'Increasing horsepower', 'B', 'Engine oil primarily lubricates moving parts to reduce friction', '1'",
            notes: [
                "First row should contain headers",
                "Each subsequent row represents one question",
                "For true-false questions, only use columns A, B, G, H, I",
                "For short-answer questions, only use columns A, B, G, H, I",
                "Correct Answer column should match exactly: A, B, C, or D for multiple choice"
            ]
        };
    }

    // Generate unique ID
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // Initialize with sample tests
    initializeSampleTests() {
        const sampleTests = [
            {
                id: this.generateId(),
                name: "Safety Procedures Quiz",
                description: "Basic safety procedures and shop orientation",
                module: "Module 0",
                year: 1,
                timeLimit: 15,
                passingScore: 80,
                questions: [
                    {
                        id: this.generateId(),
                        question: "What should you always wear when working in the shop?",
                        type: "multiple-choice",
                        options: ["Casual clothes", "Safety glasses and closed-toe shoes", "Shorts and sandals", "Just safety glasses"],
                        correctAnswer: "B",
                        explanation: "Safety glasses and closed-toe shoes are essential PPE in any automotive shop.",
                        points: 1
                    },
                    {
                        id: this.generateId(),
                        question: "Is it safe to work under a vehicle supported only by a jack?",
                        type: "true-false",
                        options: ["True", "False"],
                        correctAnswer: "False",
                        explanation: "Never work under a vehicle supported only by a jack. Always use jack stands.",
                        points: 1
                    }
                ],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            }
        ];

        this.saveTests(sampleTests);
    }
}

// Global instance
window.TestManager = TestManager;