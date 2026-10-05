import type {
  PersonalInfo,
  ProjectItem,
  TechnologyItem,
  SocialLink,
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Marvin S. Oclarino Jr.",
  initials: "MO",
  avatar: "/profile-portrait.jpg",
  titles: ["IoT DEVELOPER", "EMBEDDED BUILDER", "BSIT STUDENT", "SYSTEMS CREATOR"],
  role: "IoT & Embedded Systems Developer",
  focus: "Arduino • ESP32 • Python • Hardware Integration",
  location: "Philippines",
  status: "Available for Opportunities",
  tagline: "I build smart hardware prototypes and embedded systems that turn real-world safety problems into practical solutions.",
  statement: "Combining microcontrollers, wireless communication, and desktop monitoring tools to create functional physical-digital prototypes.",
  philosophy: {
    headline: "PRACTICAL TECHNOLOGY SHOULD SOLVE REAL-WORLD PROBLEMS.",
    subheadline: "Software is at its best when it interacts directly with the physical environment.",
    details: "I focus on developing tangible systems that have immediate utility—from vehicle speed monitors with wireless warnings to desktop management stations that log sensor data reliably.",
    principles: [
      {
        title: "Hands-On Engineering",
        desc: "Building and testing real circuits, sensors, and firmware rather than remaining purely theoretical."
      },
      {
        title: "Hardware-Software Reliability",
        desc: "Ensuring clean communication between low-level microcontrollers and desktop application interfaces."
      },
      {
        title: "Purposeful Design",
        desc: "Designing simple, clear interfaces and alert systems that anyone can understand instantly."
      }
    ]
  },
  about: {
    education: "Bachelor of Science in Information Technology (BSIT)",
    interests: [
      "Microcontroller Programming (Arduino & ESP32)",
      "Wireless Sensor Communications (RF & WiFi)",
      "Python Desktop GUI Development (CustomTkinter)",
      "Database Design & Event Logging (SQLite)"
    ],
    technicalFocus: [
      "IoT & Hardware Prototyping (Arduino, ESP32-CAM, RF 433MHz)",
      "Python Application Development (CustomTkinter, Serial Communication)",
      "Embedded C/C++ Firmware for Microcontrollers",
      "Local Relational Database Management (SQLite)"
    ],
    careerGoals: "To become a skilled IoT and software developer creating reliable connected systems for smart communities, automation, and industrial safety.",
    summary: [
      "I am an Information Technology student with a strong passion for physical computing, embedded electronics, and software development. Rather than staying purely theoretical, I enjoy getting my hands dirty with Arduino boards, ESP32 microcontrollers, sensor arrays, and wiring circuits to solve tangible everyday challenges.",
      "My flagship project is a Speed Detection and Warning System that combines radar sensors, RF wireless communication, camera captures, and a Python desktop control station to protect pedestrians in school and residential zones."
    ]
  }
};

export const projects: ProjectItem[] = [
  {
    id: "speed-detection-system",
    number: "01",
    title: "Speed Detection & Warning System",
    category: "IoT / Embedded / Smart Safety",
    year: "2026",
    shortDescription: "A smart physical-digital safety prototype that detects vehicle velocity, triggers instant auditory and visual overspeed warnings, and coordinates camera snapshots for visual evidence.",
    technologies: ["Arduino", "ESP32-CAM", "RF 433MHz", "Python", "CustomTkinter", "SQLite"],
    featuredBadge: "Flagship Hardware & Software Project",
    interactiveType: "radar-speed",
    caseStudy: {
      problem: "Excessive vehicular speed in school zones and residential streets frequently leads to accidents because drivers lack immediate contextual warnings and local safety monitors lack low-cost, portable speed-auditing equipment.",
      idea: "Build an autonomous, dual-stage physical telemetry unit that calculates approach speed, transmits overspeed status wirelessly over RF to a roadside warning flasher, and commands an ESP32-CAM module to log timestamped records to a desktop station.",
      system: "Sensors measure vehicle transit delta to compute velocity in km/h. When the speed threshold (e.g. 40 km/h) is exceeded, the Arduino sends a wireless packet via RF communication to activate the warning flasher. Simultaneously, the base station desktop application captures telemetry over serial, commands the ESP32-CAM to take a photo, and stores the incident into an SQLite audit database.",
      technology: [
        "Arduino Uno / Nano for accurate sensor timing and calculation",
        "ESP32-CAM for capturing incident footage over local WiFi/Serial",
        "RF Transmitter & Receiver (433MHz) for wireless warning sign activation",
        "Python (CustomTkinter) for desktop monitoring station UI",
        "SQLite for reliable local event and timestamp persistence"
      ],
      experience: "The desktop operator monitors a clean console displaying current zone status, live speed graphs, incident counters, and captured camera stills. Drivers receive an immediate visual flashing strobe when exceeding the speed limit.",
      result: "Successfully built a functional hardware prototype capable of reliably distinguishing vehicle velocities, sounding buzzer alerts within 120ms of threshold breach, and persisting incident metadata with associated camera frames.",
      systemFlow: [
        { step: "01", title: "Sensor Trigger", component: "Radar / Timing Sensor", action: "Measures vehicle approach delta with millisecond precision" },
        { step: "02", title: "Speed Computation", component: "Arduino Microcontroller", action: "Calculates km/h and checks against configured zone threshold" },
        { step: "03", title: "Wireless Signal", component: "RF Module (433MHz)", action: "Transmits alert packet to remote street-level warning flasher" },
        { step: "04", title: "Visual Capture", component: "ESP32-CAM", action: "Captures snapshot upon overspeed trigger signal" },
        { step: "05", title: "Desktop Central", component: "Python CustomTkinter & SQLite", action: "Records telemetry log, time, speed, and embeds image frame" }
      ],
      challenges: [
        {
          challenge: "Hardware sensor bounce and false-positive timing triggers caused by environmental noise.",
          solution: "Implemented software debouncing and signal filtering on the Arduino to discard transient anomalous timing spikes."
        },
        {
          challenge: "RF signal latency and packet collisions between the sensor node and the alert beacon.",
          solution: "Structured a lightweight binary payload with checksum validation and periodic keep-alive heartbeats."
        },
        {
          challenge: "Coordinating camera snapshot capture without freezing the desktop UI.",
          solution: "Decoupled serial ingestion and image frame saving into background Python worker threads feeding thread-safe queues into CustomTkinter."
        }
      ],
      lessons: [
        "Embedded systems require strict fault isolation: hardware failures should never crash the supervisory desktop database.",
        "Wireless RF links must account for physical obstacles through retry budgets and clean status indicators.",
        "CustomTkinter delivers impressive desktop UI performance when event loops remain decoupled from I/O."
      ],
      metricsOrOutputs: [
        { label: "Alert Response", value: "< 140ms" },
        { label: "Hardware Nodes", value: "Arduino + ESP32-CAM" },
        { label: "Telemetry DB", value: "SQLite Relational Log" },
        { label: "Field Status", value: "Working Prototype" }
      ]
    }
  }
];

export const technologies: TechnologyItem[] = [
  {
    name: "Arduino",
    category: "IoT",
    level: "Microcontroller",
    usageExplanation: "Writing C/C++ firmware for timing loops, sensor signal processing, and RF wireless transmitter control.",
    commonPairs: ["C++", "Sensors", "RF 433MHz"]
  },
  {
    name: "ESP32 & ESP32-CAM",
    category: "IoT",
    level: "Connected Microcontroller",
    usageExplanation: "Capturing visual snapshot evidence upon overspeed triggers and transmitting frames to the monitoring station.",
    commonPairs: ["Arduino IDE", "OV2640 Camera", "WiFi / Serial"]
  },
  {
    name: "RF Communication (433MHz)",
    category: "IoT",
    level: "Wireless Protocol",
    usageExplanation: "Transmitting alert signals wirelessly from the detection node to remote street signage without internet dependency.",
    commonPairs: ["433MHz Transmitter", "Receiver", "Arduino"]
  },
  {
    name: "Python",
    category: "BACKEND",
    level: "Application Programming",
    usageExplanation: "Primary language for the desktop supervisory system, serial port communication, and database management.",
    commonPairs: ["CustomTkinter", "pyserial", "SQLite"]
  },
  {
    name: "CustomTkinter",
    category: "FRONTEND",
    level: "Desktop GUI",
    usageExplanation: "Designing modern, high-contrast desktop user interfaces for real-time speed monitoring and camera inspection.",
    commonPairs: ["Python", "SQLite", "Serial Bus"]
  },
  {
    name: "SQLite",
    category: "DATABASE",
    level: "Embedded Database",
    usageExplanation: "Storing vehicle transit timestamps, calculated speeds, and image frame references locally with zero configuration.",
    commonPairs: ["Python", "SQL Queries"]
  },
  {
    name: "Git & GitHub",
    category: "TOOLS",
    level: "Version Control",
    usageExplanation: "Managing code repositories, tracking firmware revisions, and maintaining documentation.",
    commonPairs: ["VS Code", "Terminal"]
  },
  {
    name: "C / C++",
    category: "TOOLS",
    level: "Embedded Firmware",
    usageExplanation: "Writing efficient, hardware-optimized code for microcontroller interrupt handling and timing logic.",
    commonPairs: ["Arduino Uno", "ESP32"]
  }
];

export const socialLinks: SocialLink[] = [
  {
    platform: "Email",
    label: "Direct developer correspondence",
    url: "mailto:oclarino.dev@gmail.com",
    handle: "oclarino.dev@gmail.com"
  },
  {
    platform: "GitHub",
    label: "Code repositories & projects",
    url: "https://github.com/",
    handle: "github.com/developer"
  },
  {
    platform: "LinkedIn",
    label: "Professional profile",
    url: "https://linkedin.com/",
    handle: "linkedin.com/in/developer"
  }
];
