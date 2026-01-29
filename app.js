// Data structure for all methodologies
const methodologies = {
  Waterfall: {
    description: "A sequential, linear approach where each phase must be completed before the next begins. Progress flows steadily downwards like a waterfall.",
    structure: "Sequential/Linear",
    flexibility: "Low",
    best_for: "Small projects with clear requirements",
    team_size: "Any",
    documentation: "Heavy",
    icon: "📊",
    phases: ["Requirements", "Design", "Implementation", "Testing", "Deployment", "Maintenance"],
    advantages: [
      "Clear structure and milestones",
      "Easy to understand and manage",
      "Well-documented process",
      "Good for projects with fixed requirements"
    ],
    disadvantages: [
      "Inflexible to changes",
      "Late discovery of issues",
      "No working software until late in cycle",
      "High risk for complex projects"
    ],
    use_when: [
      "Requirements are clear and fixed",
      "Technology is well understood",
      "Project is short and simple",
      "Resources are limited"
    ]
  },
  Agile: {
    description: "An iterative approach that emphasizes flexibility, collaboration, and customer feedback. Development happens in short cycles called sprints.",
    structure: "Iterative/Incremental",
    flexibility: "High",
    best_for: "Projects with evolving requirements",
    team_size: "Small to Large",
    documentation: "Lightweight",
    icon: "🔄",
    phases: ["Planning", "Development", "Testing", "Review", "Adapt (repeat)"],
    advantages: [
      "Highly flexible and adaptive",
      "Continuous customer involvement",
      "Early and frequent delivery",
      "Better risk management"
    ],
    disadvantages: [
      "Requires experienced team",
      "Less predictable timeline",
      "Can lead to scope creep",
      "Minimal documentation"
    ],
    use_when: [
      "Requirements are expected to change",
      "Customer needs ongoing involvement",
      "Quick market delivery is important",
      "Team is experienced and self-organizing"
    ]
  },
  Scrum: {
    description: "A framework within Agile that uses fixed-length sprints (1-4 weeks) with specific roles: Product Owner, Scrum Master, and Development Team.",
    structure: "Iterative/Sprint-based",
    flexibility: "High",
    best_for: "Small to medium teams, sprints",
    team_size: "Small to Medium (5-9)",
    documentation: "Lightweight",
    icon: "⚡",
    phases: ["Sprint Planning", "Daily Standups", "Development", "Sprint Review", "Sprint Retrospective"],
    advantages: [
      "Clear roles and responsibilities",
      "Regular deliverables",
      "High transparency",
      "Improved team collaboration"
    ],
    disadvantages: [
      "Requires dedicated team",
      "Can be difficult to scale",
      "Scope creep risk",
      "Requires cultural change"
    ],
    use_when: [
      "Team size is small to medium (5-9 people)",
      "Need structured Agile approach",
      "Want regular product increments",
      "Team can commit to daily meetings"
    ]
  },
  Kanban: {
    description: "A visual workflow management method that emphasizes continuous delivery without fixed iterations. Work items move through stages on a board.",
    structure: "Continuous Flow",
    flexibility: "Very High",
    best_for: "Continuous delivery projects",
    team_size: "Small to Medium",
    documentation: "Minimal",
    icon: "📋",
    phases: ["Backlog", "In Progress", "Testing", "Done (continuous flow)"],
    advantages: [
      "Highly flexible",
      "Visual workflow",
      "Continuous delivery",
      "Easy to implement"
    ],
    disadvantages: [
      "Less structured than Scrum",
      "Can be chaotic without discipline",
      "Difficult for complex projects",
      "Requires constant monitoring"
    ],
    use_when: [
      "Work arrives continuously",
      "Priorities change frequently",
      "Want to improve existing process",
      "Team prefers flexibility over structure"
    ]
  },
  "V-Model": {
    description: "An extension of Waterfall where each development phase has a corresponding testing phase. Forms a V-shape when visualized.",
    structure: "Sequential/Testing-focused",
    flexibility: "Low",
    best_for: "High-reliability systems",
    team_size: "Medium to Large",
    documentation: "Heavy",
    icon: "✓",
    phases: ["Requirements → Unit Testing", "Design → Integration Testing", "Architecture → System Testing", "Implementation → Acceptance Testing"],
    advantages: [
      "Emphasis on testing and quality",
      "Clear verification process",
      "Good for safety-critical systems",
      "Well-documented"
    ],
    disadvantages: [
      "Rigid like Waterfall",
      "No early prototypes",
      "Expensive to fix issues late",
      "Not suitable for complex projects"
    ],
    use_when: [
      "High reliability required",
      "Requirements are clear and stable",
      "Testing is critical",
      "Compliance is mandatory"
    ]
  },
  Spiral: {
    description: "A risk-driven model that combines iterative development with systematic risk analysis. Each spiral cycle includes planning, risk analysis, engineering, and evaluation.",
    structure: "Iterative/Risk-driven",
    flexibility: "Medium",
    best_for: "Large, complex, high-risk projects",
    team_size: "Large",
    documentation: "Comprehensive",
    icon: "🌀",
    phases: ["Planning", "Risk Analysis", "Engineering", "Evaluation (repeat in spirals)"],
    advantages: [
      "Strong risk management",
      "Flexible and iterative",
      "Good for large projects",
      "Early identification of issues"
    ],
    disadvantages: [
      "Complex to manage",
      "Expensive",
      "Requires risk assessment expertise",
      "Time-consuming"
    ],
    use_when: [
      "Project is large and complex",
      "High risk involved",
      "Budget is substantial",
      "Requirements may evolve"
    ]
  },
  RAD: {
    description: "Rapid Application Development focuses on quick prototyping and iterative delivery over long planning. Emphasizes user feedback and reusable components.",
    structure: "Iterative/Prototype-based",
    flexibility: "High",
    best_for: "Quick prototypes, MVPs",
    team_size: "Small",
    documentation: "Moderate",
    icon: "⚡",
    phases: ["Requirements Planning", "User Design", "Construction", "Cutover"],
    advantages: [
      "Fast development",
      "Active user involvement",
      "Flexible to changes",
      "Reduced development time"
    ],
    disadvantages: [
      "Requires skilled developers",
      "Not suitable for large teams",
      "Needs strong user commitment",
      "May compromise on scalability"
    ],
    use_when: [
      "Need quick delivery (2-3 months)",
      "Project scope is well-defined",
      "User availability is high",
      "Budget allows for rapid development"
    ]
  },
  DevOps: {
    description: "A culture and practice that combines development and operations with emphasis on automation, continuous integration, and continuous delivery.",
    structure: "Continuous/Automated",
    flexibility: "High",
    best_for: "Continuous deployment needs",
    team_size: "Medium to Large",
    documentation: "Automated",
    icon: "🔧",
    phases: ["Plan", "Code", "Build", "Test", "Release", "Deploy", "Operate", "Monitor (continuous cycle)"],
    advantages: [
      "Fast and frequent releases",
      "Improved collaboration",
      "Automated processes",
      "Better quality through CI/CD"
    ],
    disadvantages: [
      "Requires cultural shift",
      "High initial setup cost",
      "Needs automation expertise",
      "Security considerations"
    ],
    use_when: [
      "Need continuous deployment",
      "Want to automate workflows",
      "Cloud-based infrastructure",
      "Fast feedback loops required"
    ]
  },
  Lean: {
    description: "Focuses on maximizing value while minimizing waste. Emphasizes efficiency, continuous improvement, and delivering only what customers need.",
    structure: "Continuous/Value-driven",
    flexibility: "High",
    best_for: "Resource optimization",
    team_size: "Any",
    documentation: "Minimal",
    icon: "💡",
    phases: ["Identify Value", "Map Value Stream", "Create Flow", "Establish Pull", "Pursue Perfection"],
    advantages: [
      "Eliminates waste",
      "Faster delivery",
      "Cost-effective",
      "Focus on customer value"
    ],
    disadvantages: [
      "Requires discipline",
      "May oversimplify complex projects",
      "Needs experienced team",
      "Less documentation"
    ],
    use_when: [
      "Want to optimize resources",
      "Focus on efficiency",
      "Large codebase to maintain",
      "Continuous improvement culture"
    ]
  },
  XP: {
    description: "Extreme Programming emphasizes technical excellence, frequent releases, and practices like pair programming and test-driven development.",
    structure: "Iterative/Quality-focused",
    flexibility: "High",
    best_for: "High-quality code focus",
    team_size: "Small",
    documentation: "Minimal",
    icon: "💻",
    phases: ["Planning", "Designing", "Coding", "Testing", "Listening (continuous feedback)"],
    advantages: [
      "High code quality",
      "Rapid feedback",
      "Reduced bugs through pair programming",
      "Customer satisfaction"
    ],
    disadvantages: [
      "Requires high customer involvement",
      "Cultural shift needed",
      "Intensive for developers",
      "May not work for distributed teams"
    ],
    use_when: [
      "Code quality is critical",
      "Customer available for feedback",
      "Small, collocated team",
      "Rapidly changing requirements"
    ]
  },
  "Staged Delivery": {
    description: "An incremental approach that delivers software in carefully planned stages, with each stage providing a complete, functional subset of the system.",
    structure: "Sequential stages/Incremental",
    flexibility: "High",
    best_for: "Phased rollouts, long projects",
    team_size: "Medium to Large",
    documentation: "Comprehensive",
    icon: "📦",
    phases: ["Planning and requirements", "System design", "Stage 1 (dev/test/deploy)", "Stage 2 (dev/test/deploy)", "Subsequent stages"],
    advantages: [
      "Early value delivery",
      "Spreads development costs",
      "Reduces phased deployment risk",
      "Users see benefits early"
    ],
    disadvantages: [
      "Requires thorough upfront planning",
      "Integration complexity increases",
      "May require maintaining multiple versions",
      "Later stages depend on earlier success"
    ],
    use_when: [
      "Requirements are well-defined upfront",
      "Need early return on investment",
      "Long development timeline (6+ months)",
      "Want to spread funding over time"
    ]
  },
  "Parallel Development": {
    description: "Multiple teams work simultaneously on different parts, versions, or features of software, coordinating through integration processes.",
    structure: "Concurrent/Simultaneous",
    flexibility: "High",
    best_for: "Independent modules, rapid delivery",
    team_size: "Large (multiple teams)",
    documentation: "Comprehensive with version control",
    icon: "⚡",
    phases: ["Planning and decomposition", "Parallel team development", "Continuous integration", "System testing", "Integration and deployment"],
    advantages: [
      "Dramatically reduces time-to-market",
      "Enables multiple teams to work independently",
      "Accelerates development velocity",
      "Better resource utilization"
    ],
    disadvantages: [
      "High coordination overhead",
      "Complex integration challenges",
      "Requires sophisticated version control",
      "Risk of conflicting changes"
    ],
    use_when: [
      "Large project with independent modules",
      "Need to compress timeline",
      "Multiple teams available",
      "Maintaining multiple versions"
    ]
  },
    "W-Model": {
    description: "An extension of the V-Model where testing activities are explicitly paired with every development activity from the very beginning, emphasizing continuous verification and validation.",
    structure: "Sequential/Testing-focused",
    flexibility: "Low",
    best_for: "Safety-critical and compliance-heavy projects",
    team_size: "Medium to Large",
    documentation: "Heavy",
    icon: "✅",
    phases: [
      "Requirements & Requirements Testing",
      "Design & Design Testing",
      "Implementation & Unit Testing",
      "Integration & Integration Testing",
      "System & System Testing",
      "Acceptance & Acceptance Testing"
    ],
    advantages: [
      "Testing integrated into every phase",
      "Very high focus on quality",
      "Good traceability between tests and requirements",
      "Suited for regulated environments"
    ],
    disadvantages: [
      "Rigid and documentation-heavy",
      "Slower initial progress",
      "Less suitable for rapidly changing requirements",
      "Higher upfront testing effort"
    ],
    use_when: [
      "Quality and safety are critical",
      "Regulatory compliance is required",
      "Requirements are stable",
      "You want explicit testing in all phases"
    ]
  },
  "Throwaway Prototyping": {
    description: "A prototyping approach where quick, disposable prototypes are built only to clarify requirements, then discarded before building the actual system.",
    structure: "Iterative/Exploratory",
    flexibility: "Very High",
    best_for: "Unclear or volatile requirements",
    team_size: "Small to Medium",
    documentation: "Lightweight",
    icon: "🗑️",
    phases: [
      "Initial requirements discussion",
      "Build quick prototype",
      "User evaluation and feedback",
      "Discard prototype",
      "Design and develop final system"
    ],
    advantages: [
      "Clarifies vague requirements quickly",
      "Prevents committing to poor design decisions",
      "Low cost experiments",
      "Reduces risk of building the wrong system"
    ],
    disadvantages: [
      "Users may expect prototype features in final system",
      "Can encourage cutting corners on analysis",
      "Time spent on code that is thrown away",
      "Risk of prototype accidentally evolving into production code"
    ],
    use_when: [
      "Requirements are ambiguous",
      "Stakeholders need to see something quickly",
      "You want to explore multiple ideas rapidly",
      "UI/UX is a major concern"
    ]
  },

  "Evolutionary Prototyping": {
    description: "A prototyping model where the initial prototype is continuously refined and evolved into the final system rather than being thrown away.",
    structure: "Iterative/Incremental",
    flexibility: "High",
    best_for: "Products that must evolve with user feedback",
    team_size: "Small to Medium",
    documentation: "Moderate",
    icon: "🔁",
    phases: [
      "Initial prototype",
      "User evaluation",
      "Refine and extend prototype",
      "Repeat evolution cycles",
      "Stabilize and finalize system"
    ],
    advantages: [
      "Users see real progress early",
      "System evolves in line with real needs",
      "Reduces risk of mismatch with expectations",
      "Good for innovation and discovery"
    ],
    disadvantages: [
      "Architecture can degrade without discipline",
      "Scope can creep over time",
      "Harder to predict schedule and cost",
      "Requires strong refactoring practices"
    ],
    use_when: [
      "Requirements change frequently",
      "You want continuous user involvement",
      "Innovation and experimentation are needed",
      "Technical team is comfortable with refactoring"
    ]
  },

  RUP: {
    description: "Rational Unified Process is a configurable, use-case driven framework with four phases and iterative development inside each phase.",
    structure: "Iterative/Phase-based",
    flexibility: "Medium",
    best_for: "Large, complex, enterprise-level systems",
    team_size: "Medium to Large",
    documentation: "Comprehensive but configurable",
    icon: "📐",
    phases: [
      "Inception",
      "Elaboration",
      "Construction",
      "Transition"
    ],
    advantages: [
      "Well-defined roles and artifacts",
      "Risk handled early in the lifecycle",
      "Supports iterative development",
      "Scalable for large organizations"
    ],
    disadvantages: [
      "Can be heavyweight if not tailored",
      "Steep learning curve",
      "Process overhead for small teams",
      "Requires strong process discipline"
    ],
    use_when: [
      "Enterprise or mission-critical projects",
      "Need defined roles and governance",
      "Multiple teams and stakeholders involved",
      "You want a configurable but structured process"
    ]
  },

  DSDM: {
    description: "Dynamic Systems Development Method is an Agile framework that emphasizes timeboxing, active user involvement, and frequent delivery of business value.",
    structure: "Iterative/Timeboxed",
    flexibility: "High",
    best_for: "Business-focused projects with tight deadlines",
    team_size: "Small to Medium",
    documentation: "Moderate",
    icon: "⏱️",
    phases: [
      "Pre-project",
      "Feasibility",
      "Foundations",
      "Exploration",
      "Engineering",
      "Deployment"
    ],
    advantages: [
      "Strong focus on on-time delivery",
      "Clear prioritization (Must/Should/Could/Won't)",
      "High stakeholder involvement",
      "Aligns IT work with business value"
    ],
    disadvantages: [
      "Requires committed user involvement",
      "Best suited for well-understood domains",
      "Can be complex to implement fully",
      "Needs experienced Agile team"
    ],
    use_when: [
      "Deadlines are fixed",
      "Business stakeholders are available",
      "You need governance on top of Agile",
      "Project is business value driven"
    ]
  },

};

// Questionnaire data
const questionnaire = [
  {
    id: 1,
    question: "How clear are your project requirements?",
    options: [
      {
        text: "Very clear and unlikely to change",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 1, Agile: 0, Scrum: 0, Kanban: 0,
          RAD: 1, DevOps: 1, Lean: 1, XP: 0,
          Prototype: 0, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 1,
          "Staged Delivery": 2, "Parallel Development": 3,
          RUP: 3, DSDM: 0
        }
      },
      {
        text: "Somewhat clear but may evolve",
        scores: {
          Waterfall: 1, "V-Model": 1, "W-Model": 1,
          Spiral: 2, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Unclear and will evolve during development",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 2, DevOps: 2, Lean: 2, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          "Staged Delivery": 0, "Parallel Development": 1,
          RUP: 1, DSDM: 3
        }
      }
    ]
  },
  {
    id: 2,
    question: "What is the size of your development team?",
    options: [
      {
        text: "Small (1-5 people)",
        scores: {
          Waterfall: 2, "V-Model": 1, "W-Model": 1,
          Spiral: 0, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 3, DevOps: 1, Lean: 2, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          "Staged Delivery": 1, "Parallel Development": 1,
          RUP: 0, DSDM: 2
        }
      },
      {
        text: "Medium (6-15 people)",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 2,
          RAD: 1, DevOps: 3, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 3, DSDM: 3
        }
      },
      {
        text: "Large (16+ people)",
        scores: {
          Waterfall: 2, "V-Model": 3, "W-Model": 3,
          Spiral: 3, Agile: 2, Scrum: 1, Kanban: 1,
          RAD: 0, DevOps: 3, Lean: 3, XP: 0,
          Prototype: 1, "Evolutionary Prototyping": 1, "Throwaway Prototyping": 0,
          "Staged Delivery": 3, "Parallel Development": 3,
          RUP: 3, DSDM: 2
        }
      }
    ]
  },
  {
    id: 3,
    question: "How experienced is your development team?",
    options: [
      {
        text: "Beginner or mixed experience",
        scores: {
          Waterfall: 3, "V-Model": 2, "W-Model": 2,
          Spiral: 0, Agile: 1, Scrum: 1, Kanban: 2,
          RAD: 1, DevOps: 0, Lean: 1, XP: 0,
          Prototype: 2, "Evolutionary Prototyping": 1, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 1,
          RUP: 1, DSDM: 1
        }
      },
      {
        text: "Intermediate",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Very experienced and self-organizing",
        scores: {
          Waterfall: 1, "V-Model": 2, "W-Model": 2,
          Spiral: 3, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 3, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          "Staged Delivery": 2, "Parallel Development": 3,
          RUP: 3, DSDM: 3
        }
      }
    ]
  },
  {
    id: 4,
    question: "What is the complexity level of your project?",
    options: [
      {
        text: "Simple and straightforward",
        scores: {
          Waterfall: 3, "V-Model": 2, "W-Model": 2,
          Spiral: 0, Agile: 2, Scrum: 2, Kanban: 3,
          RAD: 3, DevOps: 1, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 1, "Parallel Development": 1,
          RUP: 1, DSDM: 2
        }
      },
      {
        text: "Moderate complexity",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 2,
          RAD: 2, DevOps: 3, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 3, DSDM: 3
        }
      },
      {
        text: "Highly complex",
        scores: {
          Waterfall: 0, "V-Model": 1, "W-Model": 1,
          Spiral: 3, Agile: 3, Scrum: 2, Kanban: 1,
          RAD: 0, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 1,
          "Staged Delivery": 1, "Parallel Development": 3,
          RUP: 3, DSDM: 2
        }
      }
    ]
  },
  {
    id: 5,
    question: "How often do you expect requirements to change?",
    options: [
      {
        text: "Rarely or never",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 1, Agile: 0, Scrum: 0, Kanban: 0,
          RAD: 1, DevOps: 1, Lean: 1, XP: 0,
          Prototype: 1, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 1,
          "Staged Delivery": 3, "Parallel Development": 2,
          RUP: 3, DSDM: 0
        }
      },
      {
        text: "Occasionally",
        scores: {
          Waterfall: 1, "V-Model": 1, "W-Model": 1,
          Spiral: 3, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 1, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Frequently",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 2, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          "Staged Delivery": 0, "Parallel Development": 1,
          RUP: 1, DSDM: 3
        }
      }
    ]
  },
  {
    id: 6,
    question: "What level of customer involvement do you expect?",
    options: [
      {
        text: "Minimal (beginning and end only)",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 1, Agile: 0, Scrum: 0, Kanban: 0,
          RAD: 0, DevOps: 1, Lean: 1, XP: 0,
          Prototype: 1, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 1,
          "Staged Delivery": 2, "Parallel Development": 1,
          RUP: 3, DSDM: 0
        }
      },
      {
        text: "Moderate (periodic reviews)",
        scores: {
          Waterfall: 1, "V-Model": 2, "W-Model": 2,
          Spiral: 3, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 1,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 3, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Continuous (throughout development)",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 3, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          "Staged Delivery": 1, "Parallel Development": 1,
          RUP: 1, DSDM: 3
        }
      }
    ]
  },
  {
    id: 7,
    question: "What is your timeline flexibility?",
    options: [
      {
        text: "Fixed deadline, cannot change",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 1, Agile: 1, Scrum: 1, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 1,
          Prototype: 1, "Evolutionary Prototyping": 1, "Throwaway Prototyping": 1,
          "Staged Delivery": 2, "Parallel Development": 3,
          RUP: 3, DSDM: 2
        }
      },
      {
        text: "Somewhat flexible",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Very flexible",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 2, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 1, DSDM: 3
        }
      }
    ]
  },
  {
    id: 8,
    question: "How important is documentation for your project?",
    options: [
      {
        text: "Critical (compliance, legal requirements)",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 3, Agile: 0, Scrum: 0, Kanban: 0,
          RAD: 1, DevOps: 1, Lean: 0, XP: 0,
          Prototype: 1, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 1,
          "Staged Delivery": 3, "Parallel Development": 2,
          RUP: 3, DSDM: 2
        }
      },
      {
        text: "Moderate (standard documentation)",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 2, Scrum: 2, Kanban: 1,
          RAD: 2, DevOps: 2, Lean: 1, XP: 1,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Minimal (working software over documentation)",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 1, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 2, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 2, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 2,
          "Staged Delivery": 0, "Parallel Development": 1,
          RUP: 0, DSDM: 3
        }
      }
    ]
  },
  {
    id: 9,
    question: "What is your risk tolerance level?",
    options: [
      {
        text: "Low (safety-critical, mission-critical)",
        scores: {
          Waterfall: 2, "V-Model": 3, "W-Model": 3,
          Spiral: 3, Agile: 1, Scrum: 1, Kanban: 1,
          RAD: 0, DevOps: 1, Lean: 1, XP: 2,
          Prototype: 1, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 1,
          "Staged Delivery": 2, "Parallel Development": 1,
          RUP: 3, DSDM: 1
        }
      },
      {
        text: "Medium",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          "Staged Delivery": 2, "Parallel Development": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "High (can tolerate failures and iterate)",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 2, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 3, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          "Staged Delivery": 1, "Parallel Development": 2,
          RUP: 1, DSDM: 3
        }
      }
    ]
  },
  {
    id: 10,
    question: "How quickly do you need to deliver value?",
    options: [
      {
        text: "Long-term (6+ months is acceptable)",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 2, Agile: 1, Scrum: 1, Kanban: 1,
          RAD: 0, DevOps: 1, Lean: 1, XP: 1,
          Prototype: 0, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 0,
          RUP: 3, DSDM: 0
        }
      },
      {
        text: "Moderate (3-6 months)",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 3, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          RUP: 2, DSDM: 3
        }
      },
      {
        text: "Fast (need quick iterations and releases)",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 1, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 3, DevOps: 3, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          RUP: 1, DSDM: 3
        }
      }
    ]
  },
  {
    id: 11,
    question: "What is your budget constraint?",
    options: [
      {
        text: "Tight and fixed",
        scores: {
          Waterfall: 3, "V-Model": 2, "W-Model": 2,
          Spiral: 0, Agile: 1, Scrum: 1, Kanban: 2,
          RAD: 1, DevOps: 1, Lean: 3, XP: 1,
          Prototype: 1, "Evolutionary Prototyping": 1, "Throwaway Prototyping": 1,
          RUP: 1, DSDM: 1
        }
      },
      {
        text: "Moderate",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 2, Agile: 2, Scrum: 2, Kanban: 2,
          RAD: 2, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 2,
          RUP: 2, DSDM: 2
        }
      },
      {
        text: "Flexible and substantial",
        scores: {
          Waterfall: 1, "V-Model": 2, "W-Model": 2,
          Spiral: 3, Agile: 3, Scrum: 2, Kanban: 2,
          RAD: 3, DevOps: 3, Lean: 1, XP: 2,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 2,
          RUP: 3, DSDM: 3
        }
      }
    ]
  },
  {
    id: 12,
    question: "What type of project are you working on?",
    options: [
      {
        text: "Banking/Financial/Healthcare system",
        scores: {
          Waterfall: 3, "V-Model": 3, "W-Model": 3,
          Spiral: 2, Agile: 1, Scrum: 1, Kanban: 0,
          RAD: 0, DevOps: 1, Lean: 1, XP: 1,
          Prototype: 1, "Evolutionary Prototyping": 0, "Throwaway Prototyping": 1,
          RUP: 3, DSDM: 1
        }
      },
      {
        text: "Web application or SaaS",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 1, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 2, DevOps: 3, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 2,
          RUP: 2, DSDM: 3
        }
      },
      {
        text: "Mobile application",
        scores: {
          Waterfall: 0, "V-Model": 1, "W-Model": 1,
          Spiral: 1, Agile: 3, Scrum: 3, Kanban: 3,
          RAD: 2, DevOps: 3, Lean: 2, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 2,
          RUP: 2, DSDM: 3
        }
      },
      {
        text: "Enterprise software",
        scores: {
          Waterfall: 2, "V-Model": 2, "W-Model": 2,
          Spiral: 3, Agile: 2, Scrum: 2, Kanban: 1,
          RAD: 1, DevOps: 2, Lean: 2, XP: 1,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 1,
          RUP: 3, DSDM: 2
        }
      },
      {
        text: "MVP/Startup product",
        scores: {
          Waterfall: 0, "V-Model": 0, "W-Model": 0,
          Spiral: 0, Agile: 3, Scrum: 3, Kanban: 2,
          RAD: 3, DevOps: 2, Lean: 3, XP: 3,
          Prototype: 3, "Evolutionary Prototyping": 3, "Throwaway Prototyping": 3,
          RUP: 1, DSDM: 3
        }
      },
      {
        text: "Embedded/IoT system",
        scores: {
          Waterfall: 1, "V-Model": 2, "W-Model": 2,
          Spiral: 3, Agile: 2, Scrum: 2, Kanban: 1,
          RAD: 1, DevOps: 2, Lean: 2, XP: 2,
          Prototype: 2, "Evolutionary Prototyping": 2, "Throwaway Prototyping": 1,
          RUP: 3, DSDM: 1
        }
      }
    ]
  }
];


// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let quizScores = {};

// Initialize the app
function init() {
  renderMethodologyCards();
  populateCompareSelects();
  renderQuestion();
}

// Show section
function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Remove active class from all nav items
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Show selected section
  document.getElementById(sectionName).classList.add('active');
  
  // Add active class to selected nav item
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
}

// Render methodology cards
function renderMethodologyCards() {
  const grid = document.getElementById('methodology-grid');
  grid.innerHTML = '';
  
  Object.keys(methodologies).forEach(name => {
    const method = methodologies[name];
    const card = document.createElement('div');
    card.className = 'methodology-card';
    card.setAttribute('data-flexibility', method.flexibility);
    card.setAttribute('data-team-size', method.team_size);
    
    card.innerHTML = `
      <div class="card-icon">${method.icon}</div>
      <h3 class="card-title">${name}</h3>
      <p class="card-description">${method.description}</p>
      <div class="card-meta">
        <span class="meta-tag">Flexibility: ${method.flexibility}</span>
        <span class="meta-tag">${method.team_size}</span>
      </div>
      <button class="btn btn-primary" onclick="showMethodologyDetail('${name}')">Learn More</button>
    `;
    
    grid.appendChild(card);
  });
}

// Filter methodologies
function filterMethodologies() {
  const flexibilityFilter = document.getElementById('flexibility-filter').value;
  const teamFilter = document.getElementById('team-filter').value;
  
  document.querySelectorAll('.methodology-card').forEach(card => {
    let showCard = true;
    
    if (flexibilityFilter !== 'all') {
      const cardFlexibility = card.getAttribute('data-flexibility');
      if (cardFlexibility !== flexibilityFilter) {
        showCard = false;
      }
    }
    
    if (teamFilter !== 'all') {
      const cardTeamSize = card.getAttribute('data-team-size');
      if (!cardTeamSize.includes(teamFilter)) {
        showCard = false;
      }
    }
    
    card.style.display = showCard ? 'block' : 'none';
  });
}

// Show methodology detail in modal
function showMethodologyDetail(name) {
  const method = methodologies[name];
  const modal = document.getElementById('methodology-modal');
  const modalBody = document.getElementById('modal-body');
  
  // Create process flow HTML
  let flowHTML = '<div class="process-flow">';
  method.phases.forEach((phase, index) => {
    flowHTML += `<div class="flow-box">${phase}</div>`;
    if (index < method.phases.length - 1) {
      flowHTML += '<span class="flow-arrow">→</span>';
    }
  });
  flowHTML += '</div>';
  
  modalBody.innerHTML = `
    <div class="modal-icon">${method.icon}</div>
    <h2 class="modal-title">${name}</h2>
    
    <div class="modal-section">
      <h3>Overview</h3>
      <p>${method.description}</p>
    </div>
    
    <div class="modal-section">
      <h3>Key Characteristics</h3>
      <ul>
        <li><strong>Structure:</strong> ${method.structure}</li>
        <li><strong>Flexibility:</strong> ${method.flexibility}</li>
        <li><strong>Best For:</strong> ${method.best_for}</li>
        <li><strong>Team Size:</strong> ${method.team_size}</li>
        <li><strong>Documentation:</strong> ${method.documentation}</li>
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>Process Flow</h3>
      ${flowHTML}
    </div>
    
    <div class="modal-section">
      <h3>Advantages</h3>
      <ul>
        ${method.advantages.map(adv => `<li>${adv}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>Disadvantages</h3>
      <ul>
        ${method.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
      </ul>
    </div>
    
    <div class="modal-section">
      <h3>When to Use</h3>
      <ul>
        ${method.use_when.map(when => `<li>${when}</li>`).join('')}
      </ul>
    </div>
  `;
  
  modal.classList.add('active');
}

// Close modal
function closeModal() {
  document.getElementById('methodology-modal').classList.remove('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('methodology-modal');
  if (event.target === modal) {
    closeModal();
  }
}

// Populate compare dropdowns
function populateCompareSelects() {
  const select1 = document.getElementById('compare-select-1');
  const select2 = document.getElementById('compare-select-2');
  
  Object.keys(methodologies).forEach(name => {
    const option1 = document.createElement('option');
    option1.value = name;
    option1.textContent = name;
    select1.appendChild(option1);
    
    const option2 = document.createElement('option');
    option2.value = name;
    option2.textContent = name;
    select2.appendChild(option2);
  });
}

// Update comparison
function updateComparison() {
  const method1Name = document.getElementById('compare-select-1').value;
  const method2Name = document.getElementById('compare-select-2').value;
  const container = document.getElementById('comparison-container');
  
  if (!method1Name || !method2Name) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">Please select two methodologies to compare</p>';
    return;
  }
  
  const method1 = methodologies[method1Name];
  const method2 = methodologies[method2Name];
  
  container.innerHTML = `
    <div class="comparison-grid">
      <div class="comparison-card">
        <h2>${method1Name} ${method1.icon}</h2>
        <div class="comparison-item">
          <div class="comparison-label">Structure</div>
          <div class="comparison-value">${method1.structure}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Flexibility</div>
          <div class="comparison-value">${method1.flexibility}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Best For</div>
          <div class="comparison-value">${method1.best_for}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Team Size</div>
          <div class="comparison-value">${method1.team_size}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Documentation</div>
          <div class="comparison-value">${method1.documentation}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Advantages</div>
          <ul style="margin-top: 8px;">
            ${method1.advantages.map(adv => `<li>${adv}</li>`).join('')}
          </ul>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Disadvantages</div>
          <ul style="margin-top: 8px;">
            ${method1.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="comparison-card">
        <h2>${method2Name} ${method2.icon}</h2>
        <div class="comparison-item">
          <div class="comparison-label">Structure</div>
          <div class="comparison-value">${method2.structure}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Flexibility</div>
          <div class="comparison-value">${method2.flexibility}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Best For</div>
          <div class="comparison-value">${method2.best_for}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Team Size</div>
          <div class="comparison-value">${method2.team_size}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Documentation</div>
          <div class="comparison-value">${method2.documentation}</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Advantages</div>
          <ul style="margin-top: 8px;">
            ${method2.advantages.map(adv => `<li>${adv}</li>`).join('')}
          </ul>
        </div>
        <div class="comparison-item">
          <div class="comparison-label">Disadvantages</div>
          <ul style="margin-top: 8px;">
            ${method2.disadvantages.map(dis => `<li>${dis}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
    
    <div class="comparison-table">
      <h3>Decision Criteria Comparison</h3>
      <table>
        <thead>
          <tr>
            <th>Criteria</th>
            <th>${method1Name}</th>
            <th>${method2Name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Requirements Clarity Needs</td>
            <td>${method1.flexibility === 'Low' ? 'High clarity needed' : method1.flexibility === 'Medium' ? 'Moderate clarity' : 'Can handle unclear requirements'}</td>
            <td>${method2.flexibility === 'Low' ? 'High clarity needed' : method2.flexibility === 'Medium' ? 'Moderate clarity' : 'Can handle unclear requirements'}</td>
          </tr>
          <tr>
            <td>Project Complexity Handling</td>
            <td>${method1.best_for}</td>
            <td>${method2.best_for}</td>
          </tr>
          <tr>
            <td>Timeline Flexibility</td>
            <td>${method1.flexibility}</td>
            <td>${method2.flexibility}</td>
          </tr>
          <tr>
            <td>Customer Involvement</td>
            <td>${method1.flexibility === 'Low' ? 'Minimal' : method1.flexibility === 'Medium' ? 'Moderate' : 'High'}</td>
            <td>${method2.flexibility === 'Low' ? 'Minimal' : method2.flexibility === 'Medium' ? 'Moderate' : 'High'}</td>
          </tr>
          <tr>
            <td>Risk Tolerance</td>
            <td>${method1.structure.includes('Sequential') ? 'Low' : method1.structure.includes('Risk') ? 'Managed' : 'Medium to High'}</td>
            <td>${method2.structure.includes('Sequential') ? 'Low' : method2.structure.includes('Risk') ? 'Managed' : 'Medium to High'}</td>
          </tr>
          <tr>
            <td>Delivery Speed</td>
            <td>${method1.flexibility === 'Low' || method1.documentation === 'Heavy' ? 'Slower' : method1.structure.includes('Continuous') ? 'Very Fast' : 'Fast'}</td>
            <td>${method2.flexibility === 'Low' || method2.documentation === 'Heavy' ? 'Slower' : method2.structure.includes('Continuous') ? 'Very Fast' : 'Fast'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Quiz functions
function renderQuestion() {
  const question = questionnaire[currentQuestionIndex];
  const container = document.getElementById('question-container');
  
  let optionsHTML = '';
  question.options.forEach((option, index) => {
    const isSelected = userAnswers[currentQuestionIndex] === index;
    optionsHTML += `
      <button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectOption(${index})">
        ${option.text}
      </button>
    `;
  });
  
  container.innerHTML = `
    <div class="question-card">
      <h3 class="question-text">${question.question}</h3>
      <div class="options-container">
        ${optionsHTML}
      </div>
    </div>
  `;
  
  updateProgress();
  updateNavigationButtons();
}

function selectOption(optionIndex) {
  userAnswers[currentQuestionIndex] = optionIndex;
  renderQuestion();
}

function updateProgress() {
  const percentage = Math.round(((currentQuestionIndex + 1) / questionnaire.length) * 100);
  document.getElementById('question-counter').textContent = `Question ${currentQuestionIndex + 1} of ${questionnaire.length}`;
  document.getElementById('progress-percentage').textContent = `${percentage}%`;
  document.getElementById('progress-fill').style.width = `${percentage}%`;
}

function updateNavigationButtons() {
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  prevBtn.disabled = currentQuestionIndex === 0;
  
  const hasAnswer = userAnswers[currentQuestionIndex] !== undefined;
  nextBtn.disabled = !hasAnswer;
  
  if (currentQuestionIndex === questionnaire.length - 1 && hasAnswer) {
    nextBtn.textContent = 'See Results';
  } else {
    nextBtn.textContent = 'Next';
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questionnaire.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    calculateResults();
  }
}

function calculateResults() {
  // Initialize scores
  quizScores = {};
  Object.keys(methodologies).forEach(name => {
    quizScores[name] = { score: 0, maxScore: 0 };
  });
  
  // Calculate scores
  questionnaire.forEach((question, qIndex) => {
    const answerIndex = userAnswers[qIndex];
    if (answerIndex !== undefined) {
      const selectedOption = question.options[answerIndex];
      Object.keys(selectedOption.scores).forEach(methodology => {
        quizScores[methodology].score += selectedOption.scores[methodology];
        quizScores[methodology].maxScore += 3; // Max score per question
      });
    }
  });
  
  // Calculate percentages and sort
  const results = Object.keys(quizScores).map(name => {
    const percentage = Math.round((quizScores[name].score / quizScores[name].maxScore) * 100);
    return { name, percentage, score: quizScores[name].score };
  }).sort((a, b) => b.percentage - a.percentage);
  
  displayResults(results);
}

function displayResults(results) {
  document.querySelector('.quiz-container').classList.add('hidden');
  const resultsContainer = document.getElementById('results-container');
  resultsContainer.classList.remove('hidden');
  
  const top3 = results.slice(0, 3);
  
  let resultsHTML = `
    <div class="results-header">
      <h2>Your Results</h2>
      <p>Based on your answers, here are your top 3 recommended methodologies:</p>
    </div>
  `;
  
  top3.forEach((result, index) => {
    const method = methodologies[result.name];
    let explanation = '';
    let benefits = [];
    
    if (index === 0) {
      explanation = `${result.name} is your best match! This methodology aligns perfectly with your project requirements, team structure, and development goals.`;
      benefits = method.advantages.slice(0, 3);
    } else if (index === 1) {
      explanation = `${result.name} is also a strong candidate for your project, offering excellent compatibility with your needs.`;
      benefits = method.advantages.slice(0, 3);
    } else {
      explanation = `${result.name} could work well for your project as a viable alternative approach.`;
      benefits = method.advantages.slice(0, 2);
    }
    
    resultsHTML += `
      <div class="result-card">
        <div class="result-header">
          <div>
            <span style="font-size: 32px; margin-right: 12px;">${method.icon}</span>
            <span class="result-name">${result.name}</span>
          </div>
          <span class="result-score">${result.percentage}% Match</span>
        </div>
        <div class="score-bar">
          <div class="score-fill" style="width: ${result.percentage}%"></div>
        </div>
        <p class="result-explanation">${explanation}</p>
        <div class="result-benefits">
          <h4>Key Benefits for Your Project:</h4>
          <ul>
            ${benefits.map(benefit => `<li>${benefit}</li>`).join('')}
          </ul>
        </div>
        <button class="btn btn-primary" onclick="showMethodologyDetail('${result.name}')">Learn More</button>
      </div>
    `;
  });
  
  resultsHTML += `
    <div class="results-actions">
      <button class="btn btn-secondary" onclick="startOver()">Start Over</button>
      <button class="btn btn-primary" onclick="compareTop2('${top3[0].name}', '${top3[1].name}')">Compare Top 2</button>
    </div>
  `;
  
  resultsContainer.innerHTML = resultsHTML;
}

function startOver() {
  currentQuestionIndex = 0;
  userAnswers = [];
  quizScores = {};
  document.querySelector('.quiz-container').classList.remove('hidden');
  document.getElementById('results-container').classList.add('hidden');
  renderQuestion();
}

function compareTop2(method1, method2) {
  document.getElementById('compare-select-1').value = method1;
  document.getElementById('compare-select-2').value = method2;
  updateComparison();
  showSection('compare');
}

// Initialize on page load
window.onload = init;