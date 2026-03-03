
export const products = [
  {
    slug: "ev-lithium-batteries",
    category: "mobility",
    title: "EV Lithium Batteries",
    hero: {
      headline: "Lightweight. Intelligent. Future-Ready.",
      subheadline: "Advanced lithium-ion battery systems engineered for modern electric mobility platforms."
    },
    valueProposition: [
      "Up to 70% lighter than lead-acid batteries",
      "2–4 hour fast charging",
      "800–2,000+ charge cycles (3–5 years lifespan)",
      "Maintenance-free operation",
      "High energy density for compact design"
    ],
    technology: {
      smartBMS: [
        "AI-powered predictive analytics",
        "Cloud-connected monitoring",
        "Over-the-air diagnostics",
        "Active cell balancing (up to 25% longer life)"
      ]
    },
    sustainability: [
      "LFP transition to reduce cobalt dependency",
      "Second-life repurposing for solar storage",
      "95% material recovery (EPR compliant)"
    ]
  },

  {
    slug: "battery-swapping-baas",
    category: "mobility",
    title: "Battery Swapping & BaaS",
    hero: {
      headline: "Zero Wait Time. Zero Degradation.",
      subheadline: "Battery-as-a-Service model enabling instant swaps and subscription-based ownership."
    },
    features: [
      "Under 3-minute battery swapping",
      "Up to 40% lower upfront vehicle cost",
      "Access to newest high-health battery packs",
      "Swap stations network ready"
    ]
  },

  {
    slug: "e-forklift-batteries",
    category: "industrial",
    title: "E-Forklift Batteries",
    hero: {
      headline: "Industrial Lithium Power for 24/7 Operations",
      subheadline: "LiFePO4 battery systems replacing traditional lead-acid traction batteries."
    },
    specifications: {
      voltageOptions: ["24V", "48V", "80V"],
      capacityRange: "150Ah to 600Ah+",
      chargingTime: "1.5–2.5 hours",
      efficiency: "95–98%",
      communication: ["CAN", "RS485"]
    },
    advantages: [
      "3,500+ cycle life",
      "Opportunity charging (15-minute top-up)",
      "Zero watering or acid maintenance",
      "IoT & GPRS fleet monitoring",
      "4-sensor thermal protection",
      "Vibration-resistant industrial design"
    ],
    impact: [
      "Multi-shift ready",
      "Eliminates battery swapping rooms",
      "Zero emissions during charging"
    ]
  },

  {
    slug: "e-cleaning-machine-batteries",
    category: "industrial",
    title: "E-Cleaning Machine Batteries",
    hero: {
      headline: "Reliable Deep-Cycle Power for Commercial Cleaning",
      subheadline: "High-demand energy solutions for scrubbers, sweepers, and automated cleaning systems."
    },
    features: [
      "Extended runtime & deep-cycle performance",
      "Rapid charging support",
      "Maintenance-free AGM & Lithium options",
      "Vibration-resistant casing",
      "Optimized discharge curves",
      "Integrated overcharge & deep-discharge protection",
      "Universal BCI & DIN compatibility"
    ],
    applications: [
      "Walk-behind scrubbers",
      "Ride-on sweepers",
      "Burnishers & polishers",
      "Carpet extractors",
      "Automated robotic cleaners"
    ]
  },

  {
    slug: "e-drone-batteries",
    category: "aviation",
    title: "E-Drone Batteries",
    hero: {
      headline: "Aviation-Grade Power for UAV Missions",
      subheadline: "High-density, high-discharge lithium systems for industrial and agricultural drones."
    },
    chemistries: [
      "Semi-Solid State Li-Ion (Up to 400 Wh/kg)",
      "High-C LiFePO4 (15C–30C discharge rate)"
    ],
    smartFeatures: [
      "Flight-aware Smart BMS",
      "Auto-storage mode (60% voltage management)",
      "Black box logging",
      "Anti-spark connectors (AS150 / XT90-S)"
    ],
    resilience: [
      "IP54-rated housing",
      "Operates in temperatures down to -20°C",
      "Second-life repurposing below 80% capacity"
    ]
  },

  {
    slug: "solar-panels",
    category: "solar",
    title: "Solar Panels",
    hero: {
      headline: "High-Efficiency Photovoltaic Systems",
      subheadline: "Advanced N-type solar architectures for maximum energy harvest."
    },
    technologies: [
      "TOPCon bifacial panels (23–25% efficiency)",
      "HJT hybrid panels (26%+ efficiency)",
      "Perovskite-Silicon Tandem Cells (28–30%)",
      "Bifacial glass-to-glass design (10–20% boost)",
      "MBB & Half-Cut reliability architecture"
    ]
  },

  {
    slug: "solar-batteries",
    category: "solar",
    title: "Solar Batteries",
    hero: {
      headline: "The Heart of the Home Energy Ecosystem",
      subheadline: "Advanced lithium storage systems engineered for daily cycling."
    },
    metrics: {
      roundTripEfficiency: "90%+",
      depthOfDischarge: "100% DoD",
      cycleLife: "6,000+ cycles (LFP)"
    },
    features: [
      "AI weather forecasting charge optimization",
      "VPP integration",
      "App-based monitoring & reserve control",
      "Peak vs continuous power handling"
    ],
    chemistries: [
      "LFP (Lithium Iron Phosphate)",
      "Sodium-Ion (cost-effective alternative)",
      "Solid-State (premium high-density option)"
    ]
  },

  {
    slug: "solar-inverters",
    category: "solar",
    title: "Solar Inverters",
    hero: {
      headline: "Smart Energy Hub for Solar & Storage",
      subheadline: "Advanced power conversion and grid-interactive intelligence."
    },
    intelligence: [
      "Rapid MPPT (up to 30% higher yield)",
      "BEE 2026 certified (98%+ efficiency)",
      "AFCI & Rapid Shutdown safety",
      "Hybrid bi-directional energy flow"
    ],
    professionalStandards: [
      "SiC semiconductors",
      "99% peak efficiency",
      "Multi-MPPT architecture",
      "Pure sine wave (THD <3%)",
      "IP66 industrial protection"
    ]
  },

  {
    slug: "home-ups",
    category: "power-backup",
    title: "Home UPS",
    hero: {
      headline: "Smart Backup for Modern Living",
      subheadline: "Whisper-quiet, instant switchover protection for homes."
    },
    features: [
      "Pure sine wave output",
      "<10ms switchover (UPS mode)",
      "ABCC intelligent charging",
      "IoT connectivity (Wi-Fi & Bluetooth)",
      "Comprehensive electronic protection"
    ]
  },

  {
    slug: "hi-capacity-ups",
    category: "power-backup",
    title: "Hi-Capacity UPS (HKVA)",
    hero: {
      headline: "Heavy-Duty Backup for Commercial Infrastructure",
      subheadline: "High surge capacity UPS systems for luxury homes and businesses."
    },
    features: [
      "2kVA–15kVA range",
      "300% startup surge handling",
      "DSP-based voltage intelligence",
      "MCB & thermal protection",
      "Supports ACs, pumps & heavy appliances"
    ]
  }
];
