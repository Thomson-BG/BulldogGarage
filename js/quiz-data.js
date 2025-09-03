// Quiz Data System for Chapter Quizzes
// Contains all quiz data, questions, and management functions

class QuizDataSystem {
    constructor() {
        this.storageKey = 'bulldogGarageQuizData';
        this.quizzes = this.initializeQuizData();
        this.loadQuizStates();
    }

    initializeQuizData() {
        return {
            // Chapter 1: Automotive Safety Fundamentals
            'personal-protective-equipment': {
                id: 'personal-protective-equipment',
                title: 'Personal Protective Equipment (PPE)',
                chapter: 'Chapter 1: Automotive Safety Fundamentals',
                locked: false,
                questions: [
                    {
                        question: "What is the primary purpose of safety glasses in an automotive shop?",
                        options: [
                            "To look professional",
                            "To protect eyes from debris and chemicals",
                            "To reduce glare from lighting",
                            "To improve vision while working"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which type of gloves should NOT be worn when working with rotating machinery?",
                        options: [
                            "Nitrile gloves",
                            "Cut-resistant gloves",
                            "Loose-fitting gloves",
                            "Chemical-resistant gloves"
                        ],
                        correct: 2
                    },
                    {
                        question: "When should hearing protection be used in an automotive shop?",
                        options: [
                            "Only when using power tools",
                            "When noise levels exceed 85 decibels",
                            "Only during engine testing",
                            "When working alone"
                        ],
                        correct: 1
                    },
                    {
                        question: "What type of footwear is most appropriate for automotive shop work?",
                        options: [
                            "Sandals with good grip",
                            "Steel-toed boots",
                            "Running shoes",
                            "High-heel shoes"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which of the following is NOT a required component of proper shop attire?",
                        options: [
                            "Close-fitting clothing",
                            "Tie or loose jewelry",
                            "Safety glasses",
                            "Non-slip footwear"
                        ],
                        correct: 1
                    },
                    {
                        question: "When working under a vehicle, what additional PPE should be worn?",
                        options: [
                            "Knee pads only",
                            "Hard hat or bump cap",
                            "Extra thick gloves",
                            "Reflective vest"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the maximum recommended duration for wearing disposable nitrile gloves?",
                        options: [
                            "30 minutes",
                            "2 hours",
                            "4 hours",
                            "8 hours"
                        ],
                        correct: 2
                    },
                    {
                        question: "Which type of respirator is appropriate for spray painting operations?",
                        options: [
                            "Dust mask",
                            "Half-face respirator with organic vapor cartridges",
                            "Simple cloth mask",
                            "Full-face diving mask"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should safety glasses be replaced?",
                        options: [
                            "Every month",
                            "When scratched or damaged",
                            "Every year",
                            "Only when broken"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper way to remove contaminated gloves?",
                        options: [
                            "Pull from the fingertips",
                            "Peel from the wrist, turning inside out",
                            "Cut them off with scissors",
                            "Wash them first, then remove"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which PPE is required when working with battery acid?",
                        options: [
                            "Safety glasses only",
                            "Safety glasses and acid-resistant gloves",
                            "Just gloves",
                            "No special PPE needed"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the minimum eye protection standard for automotive shop work?",
                        options: [
                            "ANSI Z87.1",
                            "DOT approved",
                            "ISO 9001",
                            "OSHA 1910"
                        ],
                        correct: 0
                    },
                    {
                        question: "When working with compressed air, what additional precaution should be taken?",
                        options: [
                            "Use higher pressure settings",
                            "Never exceed 30 PSI for cleaning",
                            "Always wear headphones",
                            "Work in enclosed spaces"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which type of cut-resistant gloves should be used when handling sharp metal?",
                        options: [
                            "Level 1 cut resistance",
                            "Level 3 or higher cut resistance",
                            "Regular work gloves",
                            "Disposable latex gloves"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if your safety glasses fog up during work?",
                        options: [
                            "Remove them temporarily",
                            "Use anti-fog coating or switch to clear alternatives",
                            "Work without them until they clear",
                            "Wipe them with a dirty cloth"
                        ],
                        correct: 1
                    },
                    {
                        question: "When is face shield protection required in addition to safety glasses?",
                        options: [
                            "When grinding or working with flying particles",
                            "Only when welding",
                            "Never required in automotive work",
                            "Only when working outdoors"
                        ],
                        correct: 0
                    },
                    {
                        question: "What type of clothing should be avoided in an automotive shop?",
                        options: [
                            "Cotton work shirts",
                            "Loose sleeves and baggy clothing",
                            "Denim jeans",
                            "Work boots"
                        ],
                        correct: 1
                    },
                    {
                        question: "How often should safety equipment be inspected?",
                        options: [
                            "Once a year",
                            "Before each use",
                            "Once a month",
                            "Only when damaged"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper storage method for safety glasses?",
                        options: [
                            "In a toolbox with other tools",
                            "In a clean, protected case",
                            "Hanging on a hook",
                            "In a pants pocket"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which of the following requires the highest level of eye protection?",
                        options: [
                            "Changing oil",
                            "Welding operations",
                            "Tire rotation",
                            "Brake inspection"
                        ],
                        correct: 1
                    },
                    {
                        question: "When working with hydraulic systems, what PPE is essential?",
                        options: [
                            "Just safety glasses",
                            "Safety glasses and chemical-resistant gloves",
                            "Hard hat only",
                            "Steel-toed boots only"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if PPE becomes damaged during work?",
                        options: [
                            "Continue working and replace later",
                            "Stop work immediately and replace PPE",
                            "Tape it temporarily",
                            "Only replace if severely damaged"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which factor determines the type of respiratory protection needed?",
                        options: [
                            "Time of day",
                            "Type and concentration of contaminants",
                            "Size of the workspace",
                            "Number of people working"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the primary reason for wearing long pants in an automotive shop?",
                        options: [
                            "Professional appearance",
                            "Protection from burns, cuts, and chemical splashes",
                            "Warmth",
                            "Company dress code"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should prescription safety glasses be considered?",
                        options: [
                            "Never necessary",
                            "When workers need vision correction",
                            "Only for supervisors",
                            "Only when regular glasses are broken"
                        ],
                        correct: 1
                    },
                    {
                        question: "What type of protection is needed when working with coolant systems?",
                        options: [
                            "No special protection",
                            "Chemical-resistant gloves and eye protection",
                            "Just eye protection",
                            "Only when system is hot"
                        ],
                        correct: 1
                    },
                    {
                        question: "Which of the following is a sign that hearing protection is needed?",
                        options: [
                            "You can hear clearly",
                            "You must raise your voice to be heard 3 feet away",
                            "The work area is quiet",
                            "You're working alone"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done with PPE after exposure to chemicals?",
                        options: [
                            "Store it normally",
                            "Clean or dispose of according to safety procedures",
                            "Let it air dry",
                            "Use it until visibly dirty"
                        ],
                        correct: 1
                    },
                    {
                        question: "When working with air tools, what additional PPE consideration is important?",
                        options: [
                            "Extra thick gloves",
                            "Hearing protection due to noise levels",
                            "Special clothing",
                            "Reflective vest"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the most important factor in PPE effectiveness?",
                        options: [
                            "Cost of the equipment",
                            "Proper fit and consistent use",
                            "Brand name",
                            "Color of the equipment"
                        ],
                        correct: 1
                    }
                ]
            },

            'workshop-safety-procedures': {
                id: 'workshop-safety-procedures',
                title: 'Workshop Safety Procedures',
                chapter: 'Chapter 1: Automotive Safety Fundamentals',
                locked: false,
                questions: [
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
                    },
                    {
                        question: "Where should flammable materials be stored in a workshop?",
                        options: [
                            "Near heat sources for easy access",
                            "In approved fire-resistant containers away from ignition sources",
                            "On high shelves",
                            "In the main work area"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper procedure for lifting heavy objects?",
                        options: [
                            "Bend at the waist",
                            "Lift with your legs, keep back straight",
                            "Lift alone to save time",
                            "Use only one hand"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should shop floors be cleaned of oil and fluid spills?",
                        options: [
                            "At the end of each day",
                            "Immediately when they occur",
                            "Once a week",
                            "Only when someone slips"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the maximum safe working height without fall protection?",
                        options: [
                            "10 feet",
                            "6 feet",
                            "8 feet",
                            "4 feet"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should compressed air be used safely?",
                        options: [
                            "At maximum pressure for efficiency",
                            "Never exceed 30 PSI for cleaning, never direct at people",
                            "Only for inflating tires",
                            "With the safety removed for better access"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done before working under a raised vehicle?",
                        options: [
                            "Just use the lift",
                            "Use proper jack stands and safety blocks",
                            "Have someone watch",
                            "Work quickly"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should electrical equipment be handled in wet conditions?",
                        options: [
                            "Use as normal",
                            "Should not be used in wet conditions",
                            "Dry it off first",
                            "Use higher voltage"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper way to handle battery connections?",
                        options: [
                            "Remove positive terminal first",
                            "Remove negative terminal first",
                            "Remove both simultaneously",
                            "Order doesn't matter"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should machine guards be removed?",
                        options: [
                            "When they're in the way",
                            "Only when machine is stopped and locked out",
                            "Never",
                            "During routine maintenance"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the recommended minimum aisle width in a workshop?",
                        options: [
                            "2 feet",
                            "3 feet",
                            "1 foot",
                            "5 feet"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should tools be stored when not in use?",
                        options: [
                            "Left where last used",
                            "In designated storage areas, properly secured",
                            "On the floor",
                            "In vehicles"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done before operating any power tool?",
                        options: [
                            "Just turn it on",
                            "Inspect for damage and ensure proper guards are in place",
                            "Oil all moving parts",
                            "Check the warranty"
                        ],
                        correct: 1
                    },
                    {
                        question: "How often should emergency exits be checked?",
                        options: [
                            "Once a year",
                            "Monthly",
                            "Never",
                            "Only during inspections"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper procedure for handling hot engine components?",
                        options: [
                            "Touch test for temperature",
                            "Allow to cool or use proper heat-resistant tools",
                            "Pour cold water on them",
                            "Work quickly to avoid burns"
                        ],
                        correct: 1
                    },
                    {
                        question: "Where should fire extinguishers be located?",
                        options: [
                            "In the office only",
                            "Accessible locations every 75 feet",
                            "Only near the entrance",
                            "In storage rooms"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done with damaged tools?",
                        options: [
                            "Use carefully",
                            "Remove from service immediately",
                            "Repair during use",
                            "Give to apprentices"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should hazardous waste be disposed of?",
                        options: [
                            "In regular trash",
                            "According to local environmental regulations",
                            "Down the drain",
                            "Burn in shop furnace"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper ventilation requirement for enclosed work areas?",
                        options: [
                            "Windows only",
                            "Adequate air exchange to remove contaminants",
                            "No ventilation needed",
                            "Air conditioning only"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should lockout/tagout procedures be used?",
                        options: [
                            "Only for major repairs",
                            "Whenever servicing equipment with stored energy",
                            "Never in automotive shops",
                            "Only by supervisors"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done if you smell gas fumes in the shop?",
                        options: [
                            "Continue working",
                            "Immediately evacuate and eliminate ignition sources",
                            "Open a window",
                            "Light a match to find the source"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should chemical containers be labeled?",
                        options: [
                            "With just the brand name",
                            "With contents, hazards, and safety precautions",
                            "Labels are not necessary",
                            "Only with purchase date"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the safe procedure for jump-starting a vehicle?",
                        options: [
                            "Connect positive to positive, negative to negative",
                            "Connect positive to positive, negative to ground",
                            "Connect any way",
                            "Use only negative cables"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should safety meetings be conducted?",
                        options: [
                            "Only after accidents",
                            "Regularly as part of ongoing safety training",
                            "Never",
                            "Only when OSHA visits"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done before pressure testing any system?",
                        options: [
                            "Use maximum pressure",
                            "Ensure system is properly sealed and use appropriate pressure",
                            "Test at low pressure only",
                            "Have everyone watch"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should visitors be handled in the workshop?",
                        options: [
                            "Allow free access",
                            "Provide safety briefing and required PPE",
                            "Keep them in office only",
                            "No special procedures needed"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the proper way to handle an oil change?",
                        options: [
                            "Drain oil while engine is running",
                            "Allow engine to cool, drain safely into proper container",
                            "Drain onto shop floor",
                            "Change oil only when cold"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should incident reports be completed?",
                        options: [
                            "Only for major injuries",
                            "For all incidents, near misses, and injuries",
                            "Never",
                            "Only if insurance requires it"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done with material safety data sheets (MSDS)?",
                        options: [
                            "File them away",
                            "Keep accessible to all workers using chemicals",
                            "Only give to supervisors",
                            "Post on bulletin board"
                        ],
                        correct: 1
                    }
                ]
            },

            'emergency-response-protocols': {
                id: 'emergency-response-protocols',
                title: 'Emergency Response Protocols',
                chapter: 'Chapter 1: Automotive Safety Fundamentals',
                locked: false,
                questions: [
                    {
                        question: "What is the first priority in any emergency situation?",
                        options: [
                            "Saving equipment",
                            "Ensuring personal safety",
                            "Calling management",
                            "Taking photos"
                        ],
                        correct: 1
                    },
                    {
                        question: "Who should be notified first in case of a serious injury?",
                        options: [
                            "Insurance company",
                            "Emergency medical services (911)",
                            "Company lawyer",
                            "Next of kin"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if someone is experiencing severe bleeding?",
                        options: [
                            "Apply pressure and elevate if possible",
                            "Give them water",
                            "Move them immediately",
                            "Apply heat to the wound"
                        ],
                        correct: 0
                    },
                    {
                        question: "In case of a chemical spill, what is the first step?",
                        options: [
                            "Clean it up immediately",
                            "Evacuate the area and alert others",
                            "Dilute with water",
                            "Cover with absorbent material"
                        ],
                        correct: 1
                    },
                    {
                        question: "What type of fire extinguisher should be used on electrical fires?",
                        options: [
                            "Water",
                            "Class C (CO2 or dry chemical)",
                            "Foam",
                            "Class A"
                        ],
                        correct: 1
                    },
                    {
                        question: "If someone is trapped under a vehicle, what should you do first?",
                        options: [
                            "Try to lift the vehicle alone",
                            "Call for help and assess the situation safely",
                            "Pour water on the person",
                            "Move the person immediately"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if you witness someone receiving an electric shock?",
                        options: [
                            "Touch them to help",
                            "Turn off power source first, then provide aid",
                            "Pour water on them",
                            "Use metal tools to separate them"
                        ],
                        correct: 1
                    },
                    {
                        question: "Where should emergency contact numbers be posted?",
                        options: [
                            "In the office only",
                            "In visible locations throughout the workplace",
                            "Only on bulletin boards",
                            "In the employee handbook only"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the universal emergency number in the United States?",
                        options: [
                            "411",
                            "911",
                            "311",
                            "511"
                        ],
                        correct: 1
                    },
                    {
                        question: "How often should emergency drills be conducted?",
                        options: [
                            "Never",
                            "At least annually",
                            "Only when required by law",
                            "Only after an actual emergency"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if you smell natural gas in the shop?",
                        options: [
                            "Light a match to check",
                            "Evacuate immediately and call gas company",
                            "Open windows only",
                            "Continue working"
                        ],
                        correct: 1
                    },
                    {
                        question: "In case of a fire, what is the correct evacuation procedure?",
                        options: [
                            "Use elevators",
                            "Use stairs and designated exit routes",
                            "Exit through windows",
                            "Wait for firefighters"
                        ],
                        correct: 1
                    },
                    {
                        question: "What information should be given when calling 911?",
                        options: [
                            "Just your name",
                            "Location, nature of emergency, your name, callback number",
                            "Only the address",
                            "Description of the building"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should an unconscious person be positioned while waiting for help?",
                        options: [
                            "Sitting upright",
                            "On their side (recovery position) if no spinal injury suspected",
                            "Face down",
                            "With head elevated"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done if someone has chemicals in their eyes?",
                        options: [
                            "Rub the eyes",
                            "Flush with clean water for at least 15 minutes",
                            "Apply eye drops",
                            "Cover the eyes with cloth"
                        ],
                        correct: 1
                    },
                    {
                        question: "Where should the first aid kit be located?",
                        options: [
                            "In the supervisor's office",
                            "In an easily accessible, well-marked location",
                            "In the storage room",
                            "In vehicles only"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if someone is having a seizure?",
                        options: [
                            "Hold them down",
                            "Clear the area of hazards and time the seizure",
                            "Put something in their mouth",
                            "Pour water on them"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should a burn be treated initially?",
                        options: [
                            "Apply ice",
                            "Cool with clean, cool water",
                            "Apply butter",
                            "Blow on it"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be included in an emergency action plan?",
                        options: [
                            "Just evacuation routes",
                            "Evacuation procedures, emergency contacts, and roles",
                            "Only fire procedures",
                            "Insurance information"
                        ],
                        correct: 1
                    },
                    {
                        question: "Who should be trained in CPR in an automotive shop?",
                        options: [
                            "Only supervisors",
                            "As many employees as practical",
                            "Only the owner",
                            "No one"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if someone faints?",
                        options: [
                            "Give them water immediately",
                            "Lay them flat and elevate legs if no injury suspected",
                            "Sit them upright",
                            "Shake them awake"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should a hazardous material spill be contained?",
                        options: [
                            "Wash down the drain",
                            "Use appropriate absorbent materials and containment",
                            "Cover with plastic",
                            "Let it evaporate"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done if the fire alarm sounds?",
                        options: [
                            "Finish your current task",
                            "Evacuate immediately via designated routes",
                            "Look for the fire first",
                            "Turn off the alarm"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should you move an injured person?",
                        options: [
                            "Always move them to comfort",
                            "Only if they are in immediate danger",
                            "Never move injured people",
                            "Only to a hospital"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done after any emergency incident?",
                        options: [
                            "Forget about it",
                            "Document and review to prevent recurrence",
                            "Blame someone",
                            "Only report if required"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should you respond to a severe cut with bleeding?",
                        options: [
                            "Apply a tourniquet immediately",
                            "Apply direct pressure with clean cloth",
                            "Pour alcohol on the wound",
                            "Let it bleed to clean itself"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done if someone ingests a chemical?",
                        options: [
                            "Induce vomiting immediately",
                            "Check MSDS and call Poison Control",
                            "Give them milk",
                            "Make them exercise"
                        ],
                        correct: 1
                    },
                    {
                        question: "Where should emergency shutoff switches be located?",
                        options: [
                            "Only near equipment",
                            "Near exits and in easily accessible locations",
                            "In the office",
                            "Hidden from view"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if you discover a gas leak?",
                        options: [
                            "Investigate the source",
                            "Evacuate, eliminate ignition sources, call authorities",
                            "Try to fix it yourself",
                            "Open all windows"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should emergency equipment be maintained?",
                        options: [
                            "Check only when used",
                            "Regular inspection and maintenance schedule",
                            "Replace only when broken",
                            "No maintenance needed"
                        ],
                        correct: 1
                    }
                ]
            },

            'fire-safety-and-prevention': {
                id: 'fire-safety-and-prevention',
                title: 'Fire Safety and Prevention',
                chapter: 'Chapter 1: Automotive Safety Fundamentals',
                locked: false,
                questions: [
                    {
                        question: "What are the three elements required for fire to occur?",
                        options: [
                            "Heat, water, and oxygen",
                            "Heat, fuel, and oxygen",
                            "Fuel, water, and air",
                            "Spark, gas, and heat"
                        ],
                        correct: 1
                    },
                    {
                        question: "What class of fire involves ordinary combustible materials like wood and paper?",
                        options: [
                            "Class A",
                            "Class B",
                            "Class C",
                            "Class D"
                        ],
                        correct: 0
                    },
                    {
                        question: "Which class of fire involves flammable liquids like gasoline and oil?",
                        options: [
                            "Class A",
                            "Class B",
                            "Class C",
                            "Class D"
                        ],
                        correct: 1
                    },
                    {
                        question: "What type of extinguisher should NEVER be used on electrical fires?",
                        options: [
                            "CO2",
                            "Water",
                            "Dry chemical",
                            "Halon"
                        ],
                        correct: 1
                    },
                    {
                        question: "How often should fire extinguishers be inspected?",
                        options: [
                            "Annually",
                            "Monthly",
                            "Weekly",
                            "Only when used"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the maximum distance between fire extinguishers in a shop?",
                        options: [
                            "100 feet",
                            "75 feet",
                            "50 feet",
                            "25 feet"
                        ],
                        correct: 1
                    },
                    {
                        question: "What does the PASS method stand for in fire extinguisher use?",
                        options: [
                            "Point, Aim, Squeeze, Sweep",
                            "Pull, Aim, Squeeze, Sweep",
                            "Pull, Aim, Spray, Stop",
                            "Point, Activate, Spray, Sweep"
                        ],
                        correct: 1
                    },
                    {
                        question: "At what distance should you stand from a fire when using an extinguisher?",
                        options: [
                            "2-3 feet",
                            "6-8 feet",
                            "10-12 feet",
                            "15-20 feet"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do before attempting to fight a fire?",
                        options: [
                            "Get a bigger extinguisher",
                            "Ensure you have an escape route",
                            "Open all doors",
                            "Turn off lights"
                        ],
                        correct: 1
                    },
                    {
                        question: "Where should oily rags be stored?",
                        options: [
                            "In plastic bags",
                            "In metal containers with tight-fitting lids",
                            "On workbenches",
                            "In paper bags"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is spontaneous combustion?",
                        options: [
                            "Fire started by electricity",
                            "Fire that starts by itself due to heat buildup",
                            "Fire from smoking",
                            "Fire from welding"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should flammable liquids be dispensed?",
                        options: [
                            "In any container",
                            "Using proper funnels and approved containers",
                            "Directly onto the floor",
                            "In drinking glasses"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the purpose of a fire blanket?",
                        options: [
                            "To keep warm",
                            "To smother small fires or wrap around burning person",
                            "To protect equipment",
                            "To signal for help"
                        ],
                        correct: 1
                    },
                    {
                        question: "How far should heat sources be kept from flammable materials?",
                        options: [
                            "1 foot",
                            "At least 3 feet",
                            "6 inches",
                            "Distance doesn't matter"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done with electrical cords to prevent fires?",
                        options: [
                            "Tape damaged areas",
                            "Inspect regularly and replace damaged cords",
                            "Run under rugs",
                            "Overload outlets"
                        ],
                        correct: 1
                    },
                    {
                        question: "Where should 'No Smoking' signs be posted?",
                        options: [
                            "Only in the office",
                            "Near flammable materials and fuel storage areas",
                            "Outside only",
                            "Not necessary"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if your clothing catches fire?",
                        options: [
                            "Run to get help",
                            "Stop, drop, and roll",
                            "Jump in water",
                            "Continue working"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should waste materials be disposed of to prevent fires?",
                        options: [
                            "Burn in trash cans",
                            "In proper containers, separate combustible from non-combustible",
                            "Leave in piles",
                            "Mix all types together"
                        ],
                        correct: 1
                    },
                    {
                        question: "What type of fire detection system is best for automotive shops?",
                        options: [
                            "Smoke detectors only",
                            "Heat and smoke detectors with suppression system",
                            "None needed",
                            "Water sprinklers only"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should hot work (welding, cutting) areas be prepared?",
                        options: [
                            "No preparation needed",
                            "Remove combustibles, have fire watch, permits if required",
                            "Just have water nearby",
                            "Work only in the dark"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be done after using a fire extinguisher?",
                        options: [
                            "Put it back immediately",
                            "Have it inspected and recharged",
                            "Clean it with water",
                            "Nothing special"
                        ],
                        correct: 1
                    },
                    {
                        question: "What is the most important factor in fire prevention?",
                        options: [
                            "Having lots of extinguishers",
                            "Good housekeeping and eliminating ignition sources",
                            "Expensive equipment",
                            "Large water supplies"
                        ],
                        correct: 1
                    },
                    {
                        question: "When should you evacuate instead of fighting a fire?",
                        options: [
                            "Never evacuate",
                            "If fire is larger than you can safely handle",
                            "Only if told to",
                            "After trying all extinguishers"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should propane tanks be stored?",
                        options: [
                            "Inside the shop",
                            "Outside in well-ventilated area, upright and secured",
                            "On their side",
                            "In hot areas"
                        ],
                        correct: 1
                    },
                    {
                        question: "What causes most shop fires?",
                        options: [
                            "Lightning",
                            "Electrical problems and improper handling of flammables",
                            "Spontaneous combustion",
                            "Arson"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should fire exits be maintained?",
                        options: [
                            "Can be blocked temporarily",
                            "Must be kept clear and unlocked during working hours",
                            "Only one exit needed",
                            "Can be locked for security"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should be included in a fire emergency plan?",
                        options: [
                            "Just evacuation routes",
                            "Evacuation procedures, meeting points, and emergency contacts",
                            "Only extinguisher locations",
                            "Insurance information"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should heating equipment be maintained?",
                        options: [
                            "No maintenance needed",
                            "Regular inspection and proper clearances maintained",
                            "Only clean when dirty",
                            "Use only when necessary"
                        ],
                        correct: 1
                    },
                    {
                        question: "What should you do if you discover a fire?",
                        options: [
                            "Try to fight it alone",
                            "Sound alarm, call fire department, then fight if safe",
                            "Investigate first",
                            "Wait to see if it goes out"
                        ],
                        correct: 1
                    },
                    {
                        question: "How should fire extinguisher training be conducted?",
                        options: [
                            "Just read the instructions",
                            "Hands-on training with actual extinguishers",
                            "Watch videos only",
                            "Training not necessary"
                        ],
                        correct: 1
                    }
                ]
            },

            // Continue with remaining Chapter 2 quizzes with 30+ questions each
            'hand-tool-safety': {
                id: 'hand-tool-safety',
                title: 'Hand Tool Safety',
                chapter: 'Chapter 2: Tool and Equipment Safety',
                locked: false,
                questions: this.generateHandToolSafetyQuestions()
            },

            'power-tool-operation': {
                id: 'power-tool-operation',
                title: 'Power Tool Operation',
                chapter: 'Chapter 2: Tool and Equipment Safety',
                locked: false,
                questions: this.generatePowerToolQuestions()
            },

            'lift-and-jack-safety': {
                id: 'lift-and-jack-safety',
                title: 'Lift and Jack Safety',
                chapter: 'Chapter 2: Tool and Equipment Safety',
                locked: false,
                questions: this.generateLiftJackQuestions()
            },

            'pneumatic-tool-safety': {
                id: 'pneumatic-tool-safety',
                title: 'Pneumatic Tool Safety',
                chapter: 'Chapter 2: Tool and Equipment Safety',
                locked: false,
                questions: this.generatePneumaticToolQuestions()
            }

            // Additional chapters would continue here...
        };
    }

    generateHandToolSafetyQuestions() {
        return [
            {
                question: "What is the most important factor when selecting a hand tool?",
                options: [
                    "Cost of the tool",
                    "Right tool for the job",
                    "Brand name",
                    "Newest model available"
                ],
                correct: 1
            },
            {
                question: "How should damaged hand tools be handled?",
                options: [
                    "Use them carefully",
                    "Remove from service immediately",
                    "Repair during use",
                    "Mark with tape and continue using"
                ],
                correct: 1
            },
            {
                question: "What should you do before using any hand tool?",
                options: [
                    "Oil all moving parts",
                    "Inspect for damage and proper condition",
                    "Clean with solvent",
                    "Check the warranty"
                ],
                correct: 1
            },
            {
                question: "Which way should a wrench be pulled for maximum safety?",
                options: [
                    "Away from your body",
                    "Toward your body",
                    "Direction doesn't matter",
                    "Sideways only"
                ],
                correct: 0
            },
            {
                question: "What type of hammer should be used on hardened surfaces?",
                options: [
                    "Steel hammer",
                    "Soft-face hammer (brass, lead, or plastic)",
                    "Claw hammer",
                    "Sledgehammer"
                ],
                correct: 1
            }
            // Add 25 more questions to reach 30 minimum...
        ];
    }

    generatePowerToolQuestions() {
        return [
            {
                question: "What should be done before plugging in any power tool?",
                options: [
                    "Turn on the power switch",
                    "Ensure the switch is in the OFF position",
                    "Check the amperage",
                    "Test the outlet"
                ],
                correct: 1
            },
            {
                question: "When should guards be removed from power tools?",
                options: [
                    "When they interfere with work",
                    "Never, unless tool is unplugged and locked out",
                    "Only for experienced users",
                    "When working alone"
                ],
                correct: 1
            }
            // Add 28 more questions...
        ];
    }

    generateLiftJackQuestions() {
        return [
            {
                question: "What is the maximum weight capacity that should be used for vehicle lifts?",
                options: [
                    "Maximum rated capacity",
                    "75% of rated capacity",
                    "50% of rated capacity",
                    "90% of rated capacity"
                ],
                correct: 1
            }
            // Add 29 more questions...
        ];
    }

    generatePneumaticToolQuestions() {
        return [
            {
                question: "What is the recommended maximum air pressure for cleaning with compressed air?",
                options: [
                    "50 PSI",
                    "30 PSI",
                    "100 PSI",
                    "15 PSI"
                ],
                correct: 1
            }
            // Add 29 more questions...
        ];
        };
    }

    loadQuizStates() {
        // Load quiz lock states from localStorage
        const savedStates = localStorage.getItem(this.storageKey);
        if (savedStates) {
            const states = JSON.parse(savedStates);
            Object.keys(states).forEach(quizId => {
                if (this.quizzes[quizId]) {
                    this.quizzes[quizId].locked = states[quizId].locked;
                }
            });
        }
    }

    saveQuizStates() {
        // Save quiz lock states to localStorage
        const states = {};
        Object.keys(this.quizzes).forEach(quizId => {
            states[quizId] = {
                locked: this.quizzes[quizId].locked
            };
        });
        localStorage.setItem(this.storageKey, JSON.stringify(states));
    }

    getQuiz(quizId) {
        return this.quizzes[quizId];
    }

    getAllQuizzes() {
        return this.quizzes;
    }

    isQuizLocked(quizId) {
        return this.quizzes[quizId] ? this.quizzes[quizId].locked : true;
    }

    lockQuiz(quizId) {
        if (this.quizzes[quizId]) {
            this.quizzes[quizId].locked = true;
            this.saveQuizStates();
        }
    }

    unlockQuiz(quizId) {
        if (this.quizzes[quizId]) {
            this.quizzes[quizId].locked = false;
            this.saveQuizStates();
        }
    }

    lockAllQuizzes() {
        Object.keys(this.quizzes).forEach(quizId => {
            this.quizzes[quizId].locked = true;
        });
        this.saveQuizStates();
    }

    unlockAllQuizzes() {
        Object.keys(this.quizzes).forEach(quizId => {
            this.quizzes[quizId].locked = false;
        });
        this.saveQuizStates();
    }

    getQuizzesByChapter() {
        const chapters = {};
        Object.keys(this.quizzes).forEach(quizId => {
            const quiz = this.quizzes[quizId];
            if (!chapters[quiz.chapter]) {
                chapters[quiz.chapter] = [];
            }
            chapters[quiz.chapter].push(quiz);
        });
        return chapters;
    }
}

// Create global instance
window.QuizDataSystem = QuizDataSystem;