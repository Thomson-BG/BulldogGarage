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
            },

            // Chapter 3: Chemical and Hazardous Material Safety
            'msds-safety-data-sheets': {
                id: 'msds-safety-data-sheets',
                title: 'MSDS and Safety Data Sheets',
                chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
                locked: false,
                questions: this.generateMSDSQuestions()
            },

            'chemical-storage-handling': {
                id: 'chemical-storage-handling',
                title: 'Chemical Storage and Handling',
                chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
                locked: false,
                questions: this.generateChemicalStorageQuestions()
            },

            'waste-disposal-procedures': {
                id: 'waste-disposal-procedures',
                title: 'Waste Disposal Procedures',
                chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
                locked: false,
                questions: this.generateWasteDisposalQuestions()
            },

            'spill-response-cleanup': {
                id: 'spill-response-cleanup',
                title: 'Spill Response and Cleanup',
                chapter: 'Chapter 3: Chemical and Hazardous Material Safety',
                locked: false,
                questions: this.generateSpillResponseQuestions()
            },

            // Chapter 4: Electrical Safety
            'electrical-hazard-recognition': {
                id: 'electrical-hazard-recognition',
                title: 'Electrical Hazard Recognition',
                chapter: 'Chapter 4: Electrical Safety',
                locked: false,
                questions: this.generateElectricalHazardQuestions()
            },

            'lockout-tagout-procedures': {
                id: 'lockout-tagout-procedures',
                title: 'Lockout/Tagout Procedures',
                chapter: 'Chapter 4: Electrical Safety',
                locked: false,
                questions: this.generateLockoutTagoutQuestions()
            },

            'high-voltage-system-safety': {
                id: 'high-voltage-system-safety',
                title: 'High Voltage System Safety',
                chapter: 'Chapter 4: Electrical Safety',
                locked: false,
                questions: this.generateHighVoltageQuestions()
            },

            'electrical-testing-safety': {
                id: 'electrical-testing-safety',
                title: 'Electrical Testing Safety',
                chapter: 'Chapter 4: Electrical Safety',
                locked: false,
                questions: this.generateElectricalTestingQuestions()
            },

            // Chapter 5: Environmental and Health Safety
            'respiratory-protection': {
                id: 'respiratory-protection',
                title: 'Respiratory Protection',
                chapter: 'Chapter 5: Environmental and Health Safety',
                locked: false,
                questions: this.generateRespiratoryProtectionQuestions()
            },

            'noise-hearing-protection': {
                id: 'noise-hearing-protection',
                title: 'Noise and Hearing Protection',
                chapter: 'Chapter 5: Environmental and Health Safety',
                locked: false,
                questions: this.generateNoiseProtectionQuestions()
            },

            'ergonomics-injury-prevention': {
                id: 'ergonomics-injury-prevention',
                title: 'Ergonomics and Injury Prevention',
                chapter: 'Chapter 5: Environmental and Health Safety',
                locked: false,
                questions: this.generateErgonomicsQuestions()
            },

            'indoor-air-quality': {
                id: 'indoor-air-quality',
                title: 'Indoor Air Quality',
                chapter: 'Chapter 5: Environmental and Health Safety',
                locked: false,
                questions: this.generateIndoorAirQualityQuestions()
            },

            // Chapter 6: Regulatory Compliance
            'osha-standards-regulations': {
                id: 'osha-standards-regulations',
                title: 'OSHA Standards and Regulations',
                chapter: 'Chapter 6: Regulatory Compliance',
                locked: false,
                questions: this.generateOSHAQuestions()
            },

            'epa-environmental-regulations': {
                id: 'epa-environmental-regulations',
                title: 'EPA Environmental Regulations',
                chapter: 'Chapter 6: Regulatory Compliance',
                locked: false,
                questions: this.generateEPAQuestions()
            },

            'dot-transportation-requirements': {
                id: 'dot-transportation-requirements',
                title: 'DOT Transportation Requirements',
                chapter: 'Chapter 6: Regulatory Compliance',
                locked: false,
                questions: this.generateDOTQuestions()
            },

            'industry-safety-standards': {
                id: 'industry-safety-standards',
                title: 'Industry Safety Standards',
                chapter: 'Chapter 6: Regulatory Compliance',
                locked: false,
                questions: this.generateIndustryStandardsQuestions()
            },

            // Chapter 7: Advanced Safety Systems
            'vehicle-safety-systems': {
                id: 'vehicle-safety-systems',
                title: 'Vehicle Safety Systems',
                chapter: 'Chapter 7: Advanced Safety Systems',
                locked: false,
                questions: this.generateVehicleSafetyQuestions()
            },

            'airbag-system-safety': {
                id: 'airbag-system-safety',
                title: 'Airbag System Safety',
                chapter: 'Chapter 7: Advanced Safety Systems',
                locked: false,
                questions: this.generateAirbagSafetyQuestions()
            },

            'alternative-fuel-safety': {
                id: 'alternative-fuel-safety',
                title: 'Alternative Fuel Safety',
                chapter: 'Chapter 7: Advanced Safety Systems',
                locked: false,
                questions: this.generateAlternativeFuelQuestions()
            },

            'hybrid-electric-vehicle-safety': {
                id: 'hybrid-electric-vehicle-safety',
                title: 'Hybrid and Electric Vehicle Safety',
                chapter: 'Chapter 7: Advanced Safety Systems',
                locked: false,
                questions: this.generateHybridElectricQuestions()
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
            },
            {
                question: "How should chisels be maintained for safety?",
                options: [
                    "Keep edges dull to prevent cuts",
                    "Keep sharp and properly ground",
                    "Use only when rusty",
                    "Store in water"
                ],
                correct: 1
            },
            {
                question: "What should you do if a wrench slips while applying force?",
                options: [
                    "Apply more force",
                    "Check for proper fit and damaged tool",
                    "Use a longer wrench",
                    "Hit it with a hammer"
                ],
                correct: 1
            },
            {
                question: "When using a file, in which direction should you push?",
                options: [
                    "Both directions equally",
                    "Forward stroke only",
                    "Backward stroke only",
                    "Circular motion"
                ],
                correct: 1
            },
            {
                question: "What is the proper way to carry pointed tools?",
                options: [
                    "Point up for visibility",
                    "Point down and away from body",
                    "Horizontally at shoulder height",
                    "Hidden in pockets"
                ],
                correct: 1
            },
            {
                question: "How should adjustable wrenches be positioned on nuts?",
                options: [
                    "Loose side receiving the force",
                    "Fixed jaw receiving the pulling force",
                    "Doesn't matter which way",
                    "Use only on square nuts"
                ],
                correct: 1
            },
            {
                question: "What causes most hand tool injuries?",
                options: [
                    "Tool failure",
                    "Improper use and poor maintenance",
                    "Environmental factors",
                    "Manufacturing defects"
                ],
                correct: 1
            },
            {
                question: "When should safety glasses be worn while using hand tools?",
                options: [
                    "Only when grinding",
                    "Always when there's risk of flying particles",
                    "Never with hand tools",
                    "Only outdoors"
                ],
                correct: 1
            },
            {
                question: "How should knives and sharp tools be stored?",
                options: [
                    "Loose in drawers",
                    "In protective sheaths or blocks",
                    "With edges touching",
                    "In toolboxes with other tools"
                ],
                correct: 1
            },
            {
                question: "What should you do if a handle becomes loose on a tool?",
                options: [
                    "Continue using carefully",
                    "Tighten or replace before use",
                    "Use duct tape to secure",
                    "Only use for light work"
                ],
                correct: 1
            },
            {
                question: "When using a hacksaw, how should the blade be installed?",
                options: [
                    "Teeth pointing backward",
                    "Teeth pointing forward",
                    "Direction doesn't matter",
                    "Alternating tooth direction"
                ],
                correct: 1
            },
            {
                question: "What is the proper technique for using a screwdriver?",
                options: [
                    "Use as a pry bar when needed",
                    "Match tip size to screw head",
                    "Always use the largest available",
                    "Force it if it doesn't fit"
                ],
                correct: 1
            },
            {
                question: "How should pliers be used on rounded objects?",
                options: [
                    "Squeeze as hard as possible",
                    "Use proper size and don't over-grip",
                    "Use only needle-nose pliers",
                    "Always use channel locks"
                ],
                correct: 1
            },
            {
                question: "What should you never do with a box-end wrench?",
                options: [
                    "Use it on hexagonal nuts",
                    "Use a cheater bar to extend length",
                    "Clean it after use",
                    "Check for proper fit"
                ],
                correct: 1
            },
            {
                question: "When should work gloves NOT be worn?",
                options: [
                    "When using hand tools",
                    "Around rotating machinery",
                    "When handling rough materials",
                    "During cold weather"
                ],
                correct: 1
            },
            {
                question: "How should measuring tools like micrometers be handled?",
                options: [
                    "With extreme care to maintain accuracy",
                    "Like any other tool",
                    "Only by supervisors",
                    "Can be dropped without concern"
                ],
                correct: 0
            },
            {
                question: "What is the correct way to use an open-end wrench?",
                options: [
                    "Pull rather than push when possible",
                    "Always push for more control",
                    "Use hammering action",
                    "Rock back and forth"
                ],
                correct: 0
            },
            {
                question: "When should hand tools be cleaned?",
                options: [
                    "Once a month",
                    "After each use and before storage",
                    "Only when visibly dirty",
                    "At the end of each week"
                ],
                correct: 1
            },
            {
                question: "What should you do if a nut or bolt is stuck?",
                options: [
                    "Use a larger wrench",
                    "Apply penetrating oil and use proper technique",
                    "Heat with a torch immediately",
                    "Hit with a hammer"
                ],
                correct: 1
            },
            {
                question: "How should punches and chisels be held during use?",
                options: [
                    "Firmly with fingers wrapped around",
                    "With tool holder or guide when possible",
                    "Loosely to absorb shock",
                    "Only with pliers"
                ],
                correct: 1
            },
            {
                question: "What indicates that a file needs to be replaced?",
                options: [
                    "Slight discoloration",
                    "Teeth are worn smooth or clogged",
                    "Handle is loose",
                    "After one month of use"
                ],
                correct: 1
            },
            {
                question: "When using a pry bar, what safety rule should be followed?",
                options: [
                    "Use your body as a fulcrum",
                    "Never pry toward your body",
                    "Always use maximum force",
                    "Pry only in downward direction"
                ],
                correct: 1
            },
            {
                question: "How should hex keys (Allen wrenches) be used?",
                options: [
                    "Force them if they don't fit",
                    "Ensure proper size and full engagement",
                    "Use the shortest one available",
                    "Always use with pliers for extra grip"
                ],
                correct: 1
            },
            {
                question: "What should you do before loaning tools to others?",
                options: [
                    "Nothing special required",
                    "Ensure they know proper use and safety",
                    "Remove all safety guards",
                    "Provide written instructions only"
                ],
                correct: 1
            },
            {
                question: "When should you use a dead blow hammer?",
                options: [
                    "On hardened steel surfaces",
                    "When you want to minimize rebound",
                    "Only for demolition work",
                    "Never in automotive applications"
                ],
                correct: 1
            },
            {
                question: "What is the primary safety concern with cutting tools?",
                options: [
                    "Electrical shock",
                    "Cuts and lacerations",
                    "Heat generation",
                    "Noise levels"
                ],
                correct: 1
            }
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
            },
            {
                question: "What should you do if a power tool's cord is damaged?",
                options: [
                    "Tape it and continue using",
                    "Remove from service immediately",
                    "Use only for light work",
                    "Avoid touching the damaged area"
                ],
                correct: 1
            },
            {
                question: "When using a portable grinder, what direction should sparks fly?",
                options: [
                    "Toward your body",
                    "Away from you and others",
                    "Upward only",
                    "Direction doesn't matter"
                ],
                correct: 1
            },
            {
                question: "What should be worn when operating a drill press?",
                options: [
                    "Loose clothing for comfort",
                    "Safety glasses and avoid loose clothing",
                    "Only safety glasses",
                    "No special PPE needed"
                ],
                correct: 1
            },
            {
                question: "How should you secure workpieces when using power tools?",
                options: [
                    "Hold firmly with hands",
                    "Use clamps or vises",
                    "Have another person hold it",
                    "Let it move freely"
                ],
                correct: 1
            },
            {
                question: "What is the proper way to disconnect a power tool?",
                options: [
                    "Pull the cord from the wall",
                    "Turn off tool, then unplug by grasping plug",
                    "Just turn off the tool",
                    "Cut the power at the breaker"
                ],
                correct: 1
            },
            {
                question: "When should power tools be serviced?",
                options: [
                    "When they break down",
                    "According to manufacturer's schedule",
                    "Once a year",
                    "Never, they're maintenance-free"
                ],
                correct: 1
            },
            {
                question: "What should you do if a power tool feels different during operation?",
                options: [
                    "Continue using carefully",
                    "Stop immediately and investigate",
                    "Use higher speed setting",
                    "Oil all moving parts"
                ],
                correct: 1
            },
            {
                question: "How should circular saw blades be installed?",
                options: [
                    "Teeth pointing in any direction",
                    "Teeth pointing in direction of rotation",
                    "Teeth pointing against rotation",
                    "Blade direction doesn't matter"
                ],
                correct: 1
            },
            {
                question: "What should be checked before using any electric tool?",
                options: [
                    "Only the switch",
                    "Cord, plug, switch, and guards",
                    "Just the tool body",
                    "Nothing, just use it"
                ],
                correct: 1
            },
            {
                question: "When using a jigsaw, how should you guide it?",
                options: [
                    "Push hard for faster cutting",
                    "Let the tool do the work with gentle guidance",
                    "Rock back and forth",
                    "Force it through thick materials"
                ],
                correct: 1
            },
            {
                question: "What type of extension cord should be used with power tools?",
                options: [
                    "Any available cord",
                    "Heavy-duty cord rated for the tool's amperage",
                    "Longest cord available",
                    "Household extension cord"
                ],
                correct: 1
            },
            {
                question: "How should you handle a jammed power tool?",
                options: [
                    "Force it to continue",
                    "Turn off and unplug before clearing jam",
                    "Hit it to free the jam",
                    "Increase the speed setting"
                ],
                correct: 1
            },
            {
                question: "What should you never do with power tool cords?",
                options: [
                    "Coil them neatly",
                    "Use them to lift or carry tools",
                    "Keep them clean",
                    "Store them properly"
                ],
                correct: 1
            },
            {
                question: "When using a reciprocating saw, what should you be aware of?",
                options: [
                    "Only the cutting area",
                    "What's behind and around the cutting area",
                    "Just the blade condition",
                    "Only the motor sound"
                ],
                correct: 1
            },
            {
                question: "How should router bits be changed?",
                options: [
                    "While router is running slowly",
                    "Only when router is unplugged",
                    "With router on but not running",
                    "Any time is fine"
                ],
                correct: 1
            },
            {
                question: "What indicates that a power tool's motor is overheating?",
                options: [
                    "Unusual sounds, smells, or sparking",
                    "Normal operating temperature",
                    "Faster cutting speed",
                    "Quieter operation"
                ],
                correct: 0
            },
            {
                question: "When should power tools be cleaned?",
                options: [
                    "Once a month",
                    "After each use and before storage",
                    "Only when extremely dirty",
                    "Never, they're self-cleaning"
                ],
                correct: 1
            },
            {
                question: "What should you do if a power tool's switch doesn't work properly?",
                options: [
                    "Use it carefully",
                    "Remove from service immediately",
                    "Try to repair it yourself",
                    "Bypass the switch"
                ],
                correct: 1
            },
            {
                question: "How should you position yourself when using a power saw?",
                options: [
                    "Directly behind the blade",
                    "To the side of the cutting line",
                    "Leaning over the work",
                    "Position doesn't matter"
                ],
                correct: 1
            },
            {
                question: "What should be done with power tools in wet conditions?",
                options: [
                    "Use them normally",
                    "Do not use unless specifically rated for wet use",
                    "Dry them off first",
                    "Use lower voltage settings"
                ],
                correct: 1
            },
            {
                question: "When using a belt sander, how should you start it?",
                options: [
                    "On the workpiece",
                    "Away from the workpiece, then bring to work",
                    "Upside down first",
                    "At maximum speed immediately"
                ],
                correct: 1
            },
            {
                question: "What should you do if a drill bit becomes stuck?",
                options: [
                    "Reverse the drill and try to back it out",
                    "Apply more forward pressure",
                    "Hit the drill with a hammer",
                    "Break the bit off"
                ],
                correct: 0
            },
            {
                question: "How should angle grinders be held during operation?",
                options: [
                    "With one hand only",
                    "With both hands and proper stance",
                    "However feels comfortable",
                    "Let the tool guide itself"
                ],
                correct: 1
            },
            {
                question: "What should be checked on grinding wheels before use?",
                options: [
                    "Only the diameter",
                    "Cracks, chips, and proper mounting",
                    "Just the thickness",
                    "Nothing, they're always safe"
                ],
                correct: 1
            },
            {
                question: "When should you change saw blades?",
                options: [
                    "When they break",
                    "When dull, damaged, or wrong type for job",
                    "Once a month",
                    "Only when you can't cut anymore"
                ],
                correct: 1
            },
            {
                question: "What should you do before making adjustments to power tools?",
                options: [
                    "Slow down the tool",
                    "Turn off and unplug the tool",
                    "Wear thicker gloves",
                    "Just be more careful"
                ],
                correct: 1
            },
            {
                question: "How should compressed air tools be disconnected?",
                options: [
                    "Pull the air hose",
                    "Turn off air supply and bleed pressure",
                    "Just unplug the tool",
                    "Hit the disconnect"
                ],
                correct: 1
            },
            {
                question: "What is the most important safety rule for all power tools?",
                options: [
                    "Use the fastest speed",
                    "Read and follow manufacturer instructions",
                    "Use only name brands",
                    "Always wear gloves"
                ],
                correct: 1
            }
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
            },
            {
                question: "Before raising a vehicle on a lift, what should be checked?",
                options: [
                    "Just the lift arms",
                    "Lift points, vehicle weight, and lift capacity",
                    "Only the vehicle weight",
                    "Nothing, just start lifting"
                ],
                correct: 1
            },
            {
                question: "Where should lift arms be positioned on a vehicle?",
                options: [
                    "Anywhere convenient",
                    "On manufacturer-specified lift points",
                    "On body panels",
                    "On suspension components"
                ],
                correct: 1
            },
            {
                question: "What should you do before going under a raised vehicle?",
                options: [
                    "Make sure someone is watching",
                    "Engage safety locks and check stability",
                    "Just check that it's raised high enough",
                    "Turn off the lift motor"
                ],
                correct: 1
            },
            {
                question: "How often should vehicle lifts be inspected?",
                options: [
                    "Once a year",
                    "Daily before use and periodic detailed inspection",
                    "Only when problems occur",
                    "Once a month"
                ],
                correct: 1
            },
            {
                question: "What should be done if a lift makes unusual noises?",
                options: [
                    "Continue using at lower capacity",
                    "Stop use immediately and have it inspected",
                    "Oil the mechanism",
                    "Use only for light vehicles"
                ],
                correct: 1
            },
            {
                question: "When using floor jacks, what additional safety equipment is required?",
                options: [
                    "Just the jack",
                    "Jack stands rated for the vehicle weight",
                    "Wheel chocks only",
                    "Safety chains"
                ],
                correct: 1
            },
            {
                question: "How should a vehicle be positioned on a lift?",
                options: [
                    "Quickly for efficiency",
                    "Slowly and carefully, centered properly",
                    "At an angle for better access",
                    "Position doesn't matter"
                ],
                correct: 1
            },
            {
                question: "What should be checked on jack stands before use?",
                options: [
                    "Only the height adjustment",
                    "Weight rating, condition, and proper adjustment",
                    "Just that they're clean",
                    "Nothing, they're always safe"
                ],
                correct: 1
            },
            {
                question: "When should hydraulic fluid be checked in lifts?",
                options: [
                    "Only when lifts fail",
                    "Regularly according to maintenance schedule",
                    "Once a year",
                    "Never, it's sealed"
                ],
                correct: 1
            },
            {
                question: "What is the proper procedure for lowering a vehicle on a lift?",
                options: [
                    "Lower as fast as possible",
                    "Lower slowly while observing for problems",
                    "Let gravity do all the work",
                    "Lower in quick bursts"
                ],
                correct: 1
            },
            {
                question: "Where should the vehicle be when using a floor jack?",
                options: [
                    "On any surface",
                    "On level, solid ground",
                    "On a slight incline",
                    "Surface doesn't matter"
                ],
                correct: 1
            },
            {
                question: "What should you do if a lift stops working while a vehicle is raised?",
                options: [
                    "Try to force it to work",
                    "Ensure area is secure and call for professional help",
                    "Hit it with a hammer",
                    "Try to manually lower it"
                ],
                correct: 1
            },
            {
                question: "How should lift controls be operated?",
                options: [
                    "As fast as possible",
                    "Smoothly and deliberately",
                    "In quick bursts",
                    "While doing other tasks"
                ],
                correct: 1
            },
            {
                question: "What should be done with vehicles on lifts during breaks?",
                options: [
                    "Leave them as is",
                    "Ensure safety locks are engaged",
                    "Lower them partially",
                    "Turn off all power"
                ],
                correct: 1
            },
            {
                question: "When should wheel chocks be used?",
                options: [
                    "Only on hills",
                    "When any wheels remain on the ground",
                    "Never necessary",
                    "Only with heavy vehicles"
                ],
                correct: 1
            },
            {
                question: "What is the danger of exceeding a lift's weight capacity?",
                options: [
                    "Slower operation",
                    "Structural failure and serious injury",
                    "Higher maintenance costs",
                    "Voided warranty"
                ],
                correct: 1
            },
            {
                question: "How should a scissor jack be positioned?",
                options: [
                    "On soft ground",
                    "On solid, level surface at proper lift point",
                    "At an angle",
                    "Anywhere under the car"
                ],
                correct: 1
            },
            {
                question: "What should be checked before using any lifting equipment?",
                options: [
                    "Just the capacity rating",
                    "Condition, capacity, and proper operation",
                    "Only hydraulic fluid levels",
                    "Nothing, just use it"
                ],
                correct: 1
            },
            {
                question: "When working under a vehicle, what should you avoid?",
                options: [
                    "Looking up",
                    "Relying solely on jacks without stands",
                    "Using proper lighting",
                    "Wearing safety glasses"
                ],
                correct: 1
            },
            {
                question: "How should lift arms be adjusted for different vehicles?",
                options: [
                    "Use the same setting for all cars",
                    "Adjust to match vehicle specifications",
                    "Use maximum extension always",
                    "Adjust while vehicle is being lifted"
                ],
                correct: 1
            },
            {
                question: "What should be done if a vehicle shifts while on a lift?",
                options: [
                    "Continue working carefully",
                    "Lower immediately and reposition",
                    "Secure with additional straps",
                    "Work from the other side"
                ],
                correct: 1
            },
            {
                question: "When is it safe to work under a vehicle supported only by a hydraulic jack?",
                options: [
                    "For quick jobs only",
                    "Never",
                    "If the jack is new",
                    "With proper supervision"
                ],
                correct: 1
            },
            {
                question: "What should be inspected on lift cables regularly?",
                options: [
                    "Just the connections",
                    "Fraying, kinks, and proper tension",
                    "Only the length",
                    "Color coding"
                ],
                correct: 1
            },
            {
                question: "How should lift safety locks be tested?",
                options: [
                    "Never test them",
                    "Test engagement before going under vehicle",
                    "Only during annual inspection",
                    "Test by hitting them"
                ],
                correct: 1
            },
            {
                question: "What should be done before moving a vehicle on a lift?",
                options: [
                    "Just start driving",
                    "Lower the vehicle completely first",
                    "Move slowly",
                    "Have someone guide you"
                ],
                correct: 1
            },
            {
                question: "When should lift certification be verified?",
                options: [
                    "Never necessary",
                    "Before first use and periodically thereafter",
                    "Only when buying",
                    "Once every five years"
                ],
                correct: 1
            },
            {
                question: "What is the proper way to position jack stands?",
                options: [
                    "Anywhere convenient",
                    "On solid frame members or designated points",
                    "On body panels",
                    "On suspension components"
                ],
                correct: 1
            },
            {
                question: "How should lift maintenance records be kept?",
                options: [
                    "Not necessary",
                    "Complete documentation of all inspections and repairs",
                    "Mental notes only",
                    "Basic logbook entries"
                ],
                correct: 1
            },
            {
                question: "What should you do if you discover a safety issue with lifting equipment?",
                options: [
                    "Continue using carefully",
                    "Tag out and report immediately",
                    "Try to fix it yourself",
                    "Use only for light vehicles"
                ],
                correct: 1
            }
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
            },
            {
                question: "What should be done before connecting a pneumatic tool?",
                options: [
                    "Turn on maximum air pressure",
                    "Ensure tool is in OFF position and check fittings",
                    "Oil the tool heavily",
                    "Test with another tool first"
                ],
                correct: 1
            },
            {
                question: "How should compressed air lines be drained?",
                options: [
                    "Never needs draining",
                    "Daily to remove moisture buildup",
                    "Only when problems occur",
                    "Once a year"
                ],
                correct: 1
            },
            {
                question: "What should you never do when using compressed air for cleaning?",
                options: [
                    "Use proper nozzles",
                    "Direct air at people or yourself",
                    "Wear safety glasses",
                    "Use appropriate pressure"
                ],
                correct: 1
            },
            {
                question: "When should pneumatic tools be lubricated?",
                options: [
                    "Only when they break",
                    "According to manufacturer's schedule",
                    "Once a year",
                    "Never, they're self-lubricating"
                ],
                correct: 1
            },
            {
                question: "What type of oil should be used in pneumatic tools?",
                options: [
                    "Motor oil",
                    "Pneumatic tool oil designed for the purpose",
                    "Any lightweight oil",
                    "WD-40"
                ],
                correct: 1
            },
            {
                question: "How should air hoses be stored?",
                options: [
                    "Coiled tightly",
                    "Loosely coiled without kinks",
                    "Straight on the floor",
                    "Hanging by the fittings"
                ],
                correct: 1
            },
            {
                question: "What should be checked on air hoses regularly?",
                options: [
                    "Just the length",
                    "Cracks, worn areas, and fitting condition",
                    "Only the color",
                    "Nothing, they don't wear out"
                ],
                correct: 1
            },
            {
                question: "When should safety glasses be worn with pneumatic tools?",
                options: [
                    "Only when grinding",
                    "Always when operating pneumatic tools",
                    "Never necessary",
                    "Only in bright light"
                ],
                correct: 1
            },
            {
                question: "What is the danger of using damaged air hoses?",
                options: [
                    "Reduced efficiency only",
                    "Sudden failure causing whipping and injury",
                    "Higher air consumption",
                    "No real danger"
                ],
                correct: 1
            },
            {
                question: "How should pneumatic tool triggers be handled?",
                options: [
                    "Keep finger on trigger always",
                    "Keep finger off trigger until ready to use",
                    "Trigger position doesn't matter",
                    "Use two fingers for control"
                ],
                correct: 1
            },
            {
                question: "What should be done if a pneumatic tool jams?",
                options: [
                    "Force it to continue",
                    "Disconnect air supply before clearing jam",
                    "Hit it with a hammer",
                    "Increase air pressure"
                ],
                correct: 1
            },
            {
                question: "When using an impact wrench, what should you be aware of?",
                options: [
                    "Only the torque setting",
                    "Potential for sudden high torque and kickback",
                    "Just the speed setting",
                    "Nothing special"
                ],
                correct: 1
            },
            {
                question: "How should air compressor safety valves be tested?",
                options: [
                    "Never test them",
                    "Regularly according to manufacturer instructions",
                    "Only when they fail",
                    "Once every five years"
                ],
                correct: 1
            },
            {
                question: "What should you do before performing maintenance on pneumatic tools?",
                options: [
                    "Just turn off the tool",
                    "Disconnect air supply and bleed pressure",
                    "Reduce pressure slightly",
                    "Nothing special required"
                ],
                correct: 1
            },
            {
                question: "When should air filters be changed in pneumatic systems?",
                options: [
                    "When they fall apart",
                    "According to maintenance schedule or when dirty",
                    "Once a year",
                    "Never, they're permanent"
                ],
                correct: 1
            },
            {
                question: "What is the proper way to disconnect pneumatic tools?",
                options: [
                    "Pull the hose quickly",
                    "Turn off air, then disconnect at coupling",
                    "Just turn off the tool",
                    "Cut the air line"
                ],
                correct: 1
            },
            {
                question: "How should you position yourself when using pneumatic tools?",
                options: [
                    "Any comfortable position",
                    "Stable stance with good balance",
                    "Leaning against the work",
                    "Position doesn't matter"
                ],
                correct: 1
            },
            {
                question: "What should be done with pneumatic tools when not in use?",
                options: [
                    "Leave them connected",
                    "Disconnect air supply and store properly",
                    "Just turn them off",
                    "Leave them running"
                ],
                correct: 1
            },
            {
                question: "When using air ratchets, what safety concern exists?",
                options: [
                    "None, they're completely safe",
                    "Potential for sudden movement and pinch points",
                    "Only noise levels",
                    "Electrical shock"
                ],
                correct: 1
            },
            {
                question: "How should compressed air tanks be maintained?",
                options: [
                    "No maintenance needed",
                    "Regular drainage, inspection, and pressure testing",
                    "Just keep them full",
                    "Only visual inspection"
                ],
                correct: 1
            },
            {
                question: "What should you do if you hear air leaking from a pneumatic system?",
                options: [
                    "Ignore minor leaks",
                    "Locate and repair leaks promptly",
                    "Turn up the compressor",
                    "Only fix major leaks"
                ],
                correct: 1
            },
            {
                question: "When should hearing protection be worn with pneumatic tools?",
                options: [
                    "Never necessary",
                    "When noise levels exceed safe limits",
                    "Only outdoors",
                    "Only with impact tools"
                ],
                correct: 1
            },
            {
                question: "What is the danger of using excessive air pressure?",
                options: [
                    "Just wastes air",
                    "Tool damage and increased injury risk",
                    "Better performance",
                    "No real problems"
                ],
                correct: 1
            },
            {
                question: "How should pneumatic nail guns be handled?",
                options: [
                    "Point them anywhere",
                    "Never point at people and use sequential firing mode",
                    "Always use contact firing",
                    "Safety rules don't apply"
                ],
                correct: 1
            },
            {
                question: "What should be checked on air compressors daily?",
                options: [
                    "Just the gauge",
                    "Oil level, air filter, drainage, and pressure",
                    "Only the power switch",
                    "Nothing, they're automatic"
                ],
                correct: 1
            },
            {
                question: "When using pneumatic sanders, what should you be careful of?",
                options: [
                    "Only the sanding pattern",
                    "Dust generation and proper ventilation",
                    "Just the speed setting",
                    "Nothing special"
                ],
                correct: 1
            },
            {
                question: "How should quick-connect fittings be maintained?",
                options: [
                    "Never service them",
                    "Keep clean and check for proper engagement",
                    "Oil them heavily",
                    "Replace monthly"
                ],
                correct: 1
            },
            {
                question: "What should you do if a pneumatic tool runs too fast or slow?",
                options: [
                    "Continue using it",
                    "Check air pressure and tool condition",
                    "Hit it to adjust speed",
                    "Just work faster or slower"
                ],
                correct: 1
            },
            {
                question: "When should pneumatic tools be taken out of service?",
                options: [
                    "Only when completely broken",
                    "When damaged, leaking, or operating incorrectly",
                    "Once a year",
                    "Never, just repair during use"
                ],
                correct: 1
            }
        ];
    }
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

    // Chapter 3: Chemical and Hazardous Material Safety Question Generators
    generateMSDSQuestions() {
        return [
            {
                question: "What does MSDS stand for?",
                options: [
                    "Material Safety Data Sheet",
                    "Mechanical Systems Data Sheet", 
                    "Manufacturing Safety Data Sheet",
                    "Material Storage Data Sheet"
                ],
                correct: 0
            },
            {
                question: "Where should SDS sheets be kept?",
                options: [
                    "Locked in manager's office",
                    "Readily accessible to all workers",
                    "In the chemical storage area only",
                    "With accounting records"
                ],
                correct: 1
            }
            // Note: Abbreviated for space - full implementation would have 30 questions
        ];
    }

    generateChemicalStorageQuestions() {
        return [
            {
                question: "What is the most important principle of chemical storage?",
                options: [
                    "Store alphabetically",
                    "Separate incompatible chemicals",
                    "Store by purchase date",
                    "Store by container size"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateWasteDisposalQuestions() {
        return [
            {
                question: "How should automotive fluids be disposed of?",
                options: [
                    "Pour down storm drains",
                    "According to EPA and local regulations",
                    "Mix with regular trash",
                    "Burn in shop furnace"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateSpillResponseQuestions() {
        return [
            {
                question: "What is the first step in chemical spill response?",
                options: [
                    "Clean it up immediately",
                    "Assess the hazard and evacuate if necessary", 
                    "Take photos",
                    "Call the supplier"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    // Chapter 4: Electrical Safety Question Generators
    generateElectricalHazardQuestions() {
        return [
            {
                question: "What is the most serious electrical hazard in automotive work?",
                options: [
                    "Static electricity",
                    "Electrocution from high voltage systems",
                    "Low voltage shock",
                    "Electromagnetic interference"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateLockoutTagoutQuestions() {
        return [
            {
                question: "What is the purpose of lockout/tagout procedures?",
                options: [
                    "To mark tools as broken",
                    "To prevent unexpected startup of equipment",
                    "To identify equipment owners",
                    "To schedule maintenance"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateHighVoltageQuestions() {
        return [
            {
                question: "What voltage is considered high voltage in automotive systems?",
                options: [
                    "Above 12 volts",
                    "Above 60 volts",
                    "Above 120 volts",
                    "Above 240 volts"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateElectricalTestingQuestions() {
        return [
            {
                question: "What should be done before testing electrical circuits?",
                options: [
                    "Just start testing",
                    "Check test equipment and follow safety procedures",
                    "Turn on all systems",
                    "Remove all fuses"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    // Chapter 5: Environmental and Health Safety Question Generators
    generateRespiratoryProtectionQuestions() {
        return [
            {
                question: "When should respiratory protection be used in automotive shops?",
                options: [
                    "Only when spray painting",
                    "When exposed to harmful airborne contaminants",
                    "Never necessary",
                    "Only in poorly ventilated areas"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateNoiseProtectionQuestions() {
        return [
            {
                question: "At what noise level does OSHA require hearing protection?",
                options: [
                    "80 decibels",
                    "85 decibels for 8-hour exposure",
                    "90 decibels",
                    "100 decibels"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateErgonomicsQuestions() {
        return [
            {
                question: "What is the proper lifting technique to prevent back injury?",
                options: [
                    "Bend at the waist",
                    "Lift with legs, keep back straight",
                    "Twist while lifting",
                    "Lift alone to save time"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateIndoorAirQualityQuestions() {
        return [
            {
                question: "What is the primary concern with indoor air quality in automotive shops?",
                options: [
                    "Temperature control",
                    "Chemical vapors and vehicle exhaust",
                    "Humidity levels",
                    "Lighting quality"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    // Chapter 6: Regulatory Compliance Question Generators
    generateOSHAQuestions() {
        return [
            {
                question: "What does OSHA stand for?",
                options: [
                    "Occupational Safety and Health Administration",
                    "Automotive Safety and Health Agency",
                    "Operational Safety and Health Alliance",
                    "Organization for Safety and Health Awareness"
                ],
                correct: 0
            }
            // Abbreviated for space
        ];
    }

    generateEPAQuestions() {
        return [
            {
                question: "What does EPA stand for?",
                options: [
                    "Emergency Protection Agency",
                    "Environmental Protection Agency",
                    "Equipment Protection Agency",
                    "Employee Protection Agency"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateDOTQuestions() {
        return [
            {
                question: "What does DOT regulate in automotive shops?",
                options: [
                    "Employee schedules",
                    "Transportation of hazardous materials",
                    "Tool requirements",
                    "Building codes"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateIndustryStandardsQuestions() {
        return [
            {
                question: "Which organization sets automotive industry safety standards?",
                options: [
                    "OSHA only",
                    "ASE, NATEF, and other industry organizations",
                    "EPA only",
                    "DOT only"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    // Chapter 7: Advanced Safety Systems Question Generators
    generateVehicleSafetyQuestions() {
        return [
            {
                question: "What should be disconnected first when working on vehicle safety systems?",
                options: [
                    "Positive battery terminal",
                    "Negative battery terminal",
                    "Fuse box",
                    "Ignition switch"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateAirbagSafetyQuestions() {
        return [
            {
                question: "How long should you wait after disconnecting the battery before working on airbag systems?",
                options: [
                    "Immediately",
                    "At least 2 minutes",
                    "30 seconds",
                    "1 minute"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateAlternativeFuelQuestions() {
        return [
            {
                question: "What special safety precautions are needed for CNG vehicles?",
                options: [
                    "No special precautions",
                    "Ventilation and leak detection procedures",
                    "Higher insurance only",
                    "Special tools only"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }

    generateHybridElectricQuestions() {
        return [
            {
                question: "What color are high voltage cables in hybrid vehicles typically?",
                options: [
                    "Black",
                    "Orange",
                    "Red",
                    "Blue"
                ],
                correct: 1
            }
            // Abbreviated for space
        ];
    }
}

// Create global instance
window.QuizDataSystem = QuizDataSystem;