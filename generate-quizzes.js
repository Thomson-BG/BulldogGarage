#!/usr/bin/env node

// Script to generate all 28 quiz pages from the template
const fs = require('fs');
const path = require('path');

// Quiz definitions with their file names and details
const quizzes = [
    {
        id: 'personal-protective-equipment',
        title: 'Personal Protective Equipment (PPE)',
        chapter: 'Chapter 1: Automotive Safety Fundamentals',
        sessionKey: 'ppeQuizAccess'
    },
    {
        id: 'workshop-safety-procedures',
        title: 'Workshop Safety Procedures',
        chapter: 'Chapter 1: Automotive Safety Fundamentals', 
        sessionKey: 'workshopSafetyAccess'
    },
    {
        id: 'emergency-response-protocols',
        title: 'Emergency Response Protocols',
        chapter: 'Chapter 1: Automotive Safety Fundamentals',
        sessionKey: 'emergencyResponseAccess'
    },
    {
        id: 'fire-safety-and-prevention',
        title: 'Fire Safety and Prevention',
        chapter: 'Chapter 1: Automotive Safety Fundamentals',
        sessionKey: 'fireSafetyAccess'
    },
    {
        id: 'hand-tool-safety',
        title: 'Hand Tool Safety',
        chapter: 'Chapter 2: Tool and Equipment Safety',
        sessionKey: 'handToolAccess'
    },
    {
        id: 'power-tool-operation',
        title: 'Power Tool Operation', 
        chapter: 'Chapter 2: Tool and Equipment Safety',
        sessionKey: 'powerToolAccess'
    },
    {
        id: 'lift-and-jack-safety',
        title: 'Lift and Jack Safety',
        chapter: 'Chapter 2: Tool and Equipment Safety',
        sessionKey: 'liftJackAccess'
    },
    {
        id: 'pneumatic-tool-safety',
        title: 'Pneumatic Tool Safety',
        chapter: 'Chapter 2: Tool and Equipment Safety',
        sessionKey: 'pneumaticToolAccess'
    },
    {
        id: 'msds-and-safety-data-sheets',
        title: 'MSDS and Safety Data Sheets',
        chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
        sessionKey: 'msdsAccess'
    },
    {
        id: 'chemical-storage-and-handling',
        title: 'Chemical Storage and Handling',
        chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
        sessionKey: 'chemicalStorageAccess'
    },
    {
        id: 'waste-disposal-procedures',
        title: 'Waste Disposal Procedures',
        chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
        sessionKey: 'wasteDisposalAccess'
    },
    {
        id: 'spill-response-and-cleanup',
        title: 'Spill Response and Cleanup',
        chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
        sessionKey: 'spillResponseAccess'
    },
    {
        id: 'electrical-hazard-recognition',
        title: 'Electrical Hazard Recognition',
        chapter: 'Chapter 4: Electrical Safety',
        sessionKey: 'electricalHazardAccess'
    },
    {
        id: 'lockout-tagout-procedures',
        title: 'Lockout/Tagout Procedures',
        chapter: 'Chapter 4: Electrical Safety',
        sessionKey: 'lockoutTagoutAccess'
    },
    {
        id: 'high-voltage-system-safety',
        title: 'High Voltage System Safety',
        chapter: 'Chapter 4: Electrical Safety',
        sessionKey: 'highVoltageAccess'
    },
    {
        id: 'electrical-testing-safety',
        title: 'Electrical Testing Safety',
        chapter: 'Chapter 4: Electrical Safety',
        sessionKey: 'electricalTestingAccess'
    },
    {
        id: 'respiratory-protection',
        title: 'Respiratory Protection',
        chapter: 'Chapter 5: Environmental and Health Safety',
        sessionKey: 'respiratoryAccess'
    },
    {
        id: 'noise-and-hearing-protection',
        title: 'Noise and Hearing Protection',
        chapter: 'Chapter 5: Environmental and Health Safety',
        sessionKey: 'hearingProtectionAccess'
    },
    {
        id: 'ergonomics-and-injury-prevention',
        title: 'Ergonomics and Injury Prevention',
        chapter: 'Chapter 5: Environmental and Health Safety',
        sessionKey: 'ergonomicsAccess'
    },
    {
        id: 'indoor-air-quality',
        title: 'Indoor Air Quality',
        chapter: 'Chapter 5: Environmental and Health Safety',
        sessionKey: 'airQualityAccess'
    },
    {
        id: 'osha-standards-and-regulations',
        title: 'OSHA Standards and Regulations',
        chapter: 'Chapter 6: Regulatory Compliance',
        sessionKey: 'oshaAccess'
    },
    {
        id: 'epa-environmental-regulations',
        title: 'EPA Environmental Regulations',
        chapter: 'Chapter 6: Regulatory Compliance',
        sessionKey: 'epaAccess'
    },
    {
        id: 'dot-transportation-requirements',
        title: 'DOT Transportation Requirements',
        chapter: 'Chapter 6: Regulatory Compliance',
        sessionKey: 'dotAccess'
    },
    {
        id: 'industry-safety-standards',
        title: 'Industry Safety Standards',
        chapter: 'Chapter 6: Regulatory Compliance',
        sessionKey: 'industryStandardsAccess'
    },
    {
        id: 'vehicle-safety-systems',
        title: 'Vehicle Safety Systems',
        chapter: 'Chapter 7: Advanced Safety Systems',
        sessionKey: 'vehicleSafetyAccess'
    },
    {
        id: 'airbag-system-safety',
        title: 'Airbag System Safety',
        chapter: 'Chapter 7: Advanced Safety Systems',
        sessionKey: 'airbagSafetyAccess'
    },
    {
        id: 'alternative-fuel-safety',
        title: 'Alternative Fuel Safety',
        chapter: 'Chapter 7: Advanced Safety Systems',
        sessionKey: 'altFuelAccess'
    },
    {
        id: 'hybrid-and-electric-vehicle-safety',
        title: 'Hybrid and Electric Vehicle Safety',
        chapter: 'Chapter 7: Advanced Safety Systems',
        sessionKey: 'hybridElectricAccess'
    }
];

// Sample questions for each quiz type (in a real implementation, these would be much more comprehensive)
const questionSets = {
    'workshop-safety-procedures': [
        {
            question: "What is the first step when entering an automotive workshop?",
            options: [
                "Start working immediately",
                "Conduct a visual safety inspection of the area",
                "Turn on all equipment",
                "Check the weather"
            ],
            correct: 1
        },
        {
            question: "What should be done before starting any vehicle in the shop?",
            options: [
                "Check the radio",
                "Ensure proper ventilation and check for leaks",
                "Warm up the engine",
                "Fill the gas tank"
            ],
            correct: 1
        }
        // Add 28 more questions here...
    ],
    // Add question sets for all other quizzes...
};

// Generate a basic question set for quizzes that don't have specific questions
function generateBasicQuestions(quizTitle, chapter) {
    const questions = [];
    
    // Generate 30 basic questions
    for (let i = 1; i <= 30; i++) {
        questions.push({
            question: `Question ${i} for ${quizTitle}: Which of the following is the most important safety consideration?`,
            options: [
                "Following established procedures",
                "Working quickly to save time",
                "Using any available tools",
                "Ignoring safety protocols"
            ],
            correct: 0
        });
    }
    
    return questions;
}

// Read the template file
const templatePath = './quiz-template.html';
let template;

try {
    template = fs.readFileSync(templatePath, 'utf8');
} catch (error) {
    console.error('Error reading template file:', error.message);
    process.exit(1);
}

// Generate quiz files
quizzes.forEach(quiz => {
    console.log(`Generating quiz: ${quiz.title}`);
    
    // Get questions for this quiz
    let questions = questionSets[quiz.id];
    if (!questions) {
        questions = generateBasicQuestions(quiz.title, quiz.chapter);
    }
    
    // Create quiz content by replacing template placeholders
    let quizContent = template
        .replace(/{{QUIZ_TITLE}}/g, quiz.title)
        .replace(/{{QUIZ_CHAPTER}}/g, quiz.chapter)
        .replace(/{{QUIZ_ID}}/g, quiz.id)
        .replace(/{{SESSION_KEY}}/g, quiz.sessionKey);
    
    // Replace the questions array in the template
    const questionsJson = JSON.stringify(questions, null, 20);
    quizContent = quizContent.replace(
        /this\.questions = \[[\s\S]*?\];/,
        `this.questions = ${questionsJson};`
    );
    
    // Write the quiz file
    const filename = `quiz-${quiz.id}.html`;
    try {
        fs.writeFileSync(filename, quizContent, 'utf8');
        console.log(`✓ Generated ${filename}`);
    } catch (error) {
        console.error(`✗ Error generating ${filename}:`, error.message);
    }
});

console.log('\nQuiz generation complete!');
console.log(`Generated ${quizzes.length} quiz files.`);