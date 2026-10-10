export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    children?: { label: string; href: string }[];
  }[];
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/services",
    children: [
      {
        label: "Cold Chain Solutions",
        href: "/services/cold-chain",
        description: "Truck cold monitoring & data loggers",
        children: [
          {
            label: "Single-use USB Logger",
            href: "/services/cold-chain/usb-data-logger"
          },
          {
            label: "Single-use Real-time Logger",
            href: "/services/cold-chain/single-use-realtime"
          },
          {
            label: "Multi-use Real-time Logger",
            href: "/services/cold-chain/multi-use-realtime"
          }
        ]
      },
      {
        label: "Energy / Solar Solutions",
        href: "/services/energy-monitoring",
        description: "Energy audits & solar installations, batteries, inverters, panels"
      },
      {
        label: "Utility Monitoring",
        href: "/services/water-gas-metering",
        description: "Generator, electricity, solar, backup batteries, water & gas"
      },
      {
        label: "Smart Homes",
        href: "/services/smart-home",
        description: "Locks, curtains, sockets, switches, gates, CCTV, door bells & lighting"
      },
      {
        label: "Trucks & Car Tracking",
        href: "/services/truck-telematics",
        description: "GPS, driver behaviour, fuel, load carrying & temperature"
      }
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" }
];

export const company = {
  name: "Powerise Solutions Limited",
  short: "Powerise",
  tagline: "Intelligent IoT for a connected Africa.",
  intro:
    "Powerise Solutions Limited is an IoT provider specializing in smart technologies that improve the efficiency, reliability and sustainability of essential resources and infrastructure. Its portfolio spans energy management, power backup, smart home automation and supply-chain monitoring.",
  address:
    "Jabavu House, Jabavu Lane, off Argwings Kodhek Road, Hurlingham, Nairobi, Kenya",
  email: "info@powerise.co.ke",
  website: "www.powerise.co.ke",
  hours: "Mon – Sat · 08:00 – 18:00 · Sunday Closed",
  social: {
    linkedin: "https://linkedin.com/company/powerise",
    x: "https://x.com/powerise",
    facebook: "https://facebook.com/powerise",
    instagram: "https://instagram.com/powerise"
  }
} as const;

export const stats = [
  { value: "10,000+", label: "Parameters monitored" },
  { value: "24/7", label: "Real-time analytics" },
  { value: "±0.5°C", label: "Cold-chain accuracy" },
  { value: "60 s", label: "Meter reporting interval" }
];

/**
 * Vision & positioning statements sourced from client documents.
 */
export const vision = {
  headline: "Transforming industries and homes through IoT-driven innovation.",
  body: "By providing intelligent solutions that optimize resource use, enhance safety and reduce environmental impact, we empower our clients to build smarter, more sustainable operations and living spaces.",
  whyUs: [
    {
      title: "Comprehensive Solutions",
      body: "A single portfolio for energy, water, gas, logistics and home automation, with one accountable partner across the stack."
    },
    {
      title: "Data-Driven Insights",
      body: "Continuous streams, automated reports and actionable intelligence that turn meters and sensors into decisions."
    },
    {
      title: "Reliability & Support",
      body: "Robust systems, resilient over 2G/4G/LoRaWAN, and a dedicated support team for seamless implementation."
    }
  ]
};

/**
 * Top-level offerings, mirrored from the client's IoT decks.
 * These are the six lead solutions surfaced on the homepage.
 */
export const pillars = [
  {
    slug: "energy-monitoring",
    icon: "gauge",
    title: "Energy Monitoring",
    tagline: "See every kWh in real time.",
    description:
      "IoT-enabled Energy Audit powered by smart meters. Continuous, granular insight into voltage, current, power factor and load patterns across buildings, circuits and equipment.",
    features: [
      "Real-time consumption dashboards",
      "Automated audit reports & benchmarks",
      "Anomaly, peak-load & wastage detection",
      "Time-of-use billing and TOU tariffs"
    ]
  },
  {
    slug: "cold-chain",
    icon: "snowflake",
    title: "Cold Chain",
    tagline: "Every degree, logged and defensible.",
    description:
      "Global real-time monitors for vaccines, pharmaceuticals and perishable cargo. Track temperature, humidity, light, shock and location on one WHO-PQS-aligned platform.",
    features: [
      "±0.5 °C TI digital sensors, −30 °C to 70 °C",
      "Global LTE 4G/5G with 2G fallback",
      "PDF reports via USB, cloud or mobile app",
      "SMS, email and app alerts, 24/7"
    ]
  },
  {
    slug: "truck-telematics",
    icon: "truck",
    title: "Truck & Fleet Telematics",
    tagline: "Full visibility over 250+ parameters.",
    description:
      "Monitor engine health, fuel, cargo weight, routes and driver behaviour across trucks, reefer fleets and diesel generators. Genset telemetry and cold-chain tracking support perishable loads.",
    features: [
      "Fuel theft prevention & consumption analytics",
      "Axle-load and cargo tampering detection",
      "Driver behaviour, speeding & route deviation",
      "Generator fuel, engine health & run-hours"
    ]
  },
  {
    slug: "water-gas-metering",
    icon: "droplet",
    title: "Water & Gas Metering",
    tagline: "Bill accurately. Find leaks first.",
    description:
      "Smart water and gas meters over LoRaWAN and 4G provide accurate consumption data, leak and tamper detection, remote valve control and audit-ready reporting.",
    features: [
      "Ultrasonic flow with tamper alerts",
      "Non-revenue water reduction",
      "LEL gas-safety monitoring & auto shut-off",
      "Prepaid, postpaid and TOU billing"
    ]
  },
  {
    slug: "smart-home",
    icon: "home",
    title: "Smart Home & Locks",
    tagline: "A home that thinks with you.",
    description:
      "Control smart locks, lighting, switches, sockets and CCTV from one app. Access options include mobile, PIN, RFID, fingerprint and mechanical key.",
    features: [
      "Fingerprint, PIN, RFID, app & key unlock",
      "Wi-Fi smart switches, sockets and dimmers",
      "Alexa & Google Home voice control",
      "AI encryption chip and anti-peep passwords"
    ]
  }
] as const;

/**
 * Deep-dive service lists per pillar. Keys match pillar slugs.
 */
export const services = {
  "energy-monitoring": [
    {
      title: "IoT Smart Energy Meters",
      description:
        "Connected meters capture voltage, current, power factor, and active and reactive power to support automated billing, TOU tariffs and anomaly detection.",
      icon: "gauge"
    },
    {
      title: "Energy Audit (IoT-enabled)",
      description:
        "Continuous, data-driven audit combining on-site assessment with real-time monitoring: identify inefficiencies, peak loads, wastage and cost savings.",
      icon: "clipboard"
    },
    {
      title: "Solar & Backup Battery Monitoring",
      description:
        "Track production, consumption and battery health across hybrid systems. Balance loads intelligently and support renewable integration.",
      icon: "sun"
    },
    {
      title: "Sub-Metering & Tenant Billing",
      description:
        "Deploy prepaid or postpaid sub-meters across malls, estates and factories with automated invoicing and self-service tenant portals.",
      icon: "building"
    }
  ],
  "cold-chain": [
    {
      title: "Cloud Platform & Route Tracking",
      description:
        "The cloud platform visualises location, temperature, humidity, shock and route data across web, mobile app and tablet views.",
      icon: "truck"
    },
    {
      title: "24/7 Alerts & Analysis",
      description:
        "Round-the-clock data control and analysis with real-time alerts via SMS, email and app the moment a shipment drifts out of range.",
      icon: "bell"
    },
    {
      title: "Audit-ready Reports",
      description:
        "Generate PDF cold-chain reports via USB 2.0, the cloud platform or mobile app. Reports include trip summaries, alarm statistics and record charts for compliance.",
      icon: "clipboard"
    },
    {
      title: "Calibration & Compliance",
      description:
        "Every logger includes a calibration report for its NIST-traceable TI digital sensor. Devices are certified to FCC, CE, RTCA/DO-160G, UN38.3, RoHS and WEEE standards.",
      icon: "check"
    }
  ],
  "truck-telematics": [
    {
      title: "Truck Health & DTC Monitoring",
      description:
        "Read engine health, ECU errors and DTC codes; monitor tractor-unit parameters and drivetrain performance across the fleet.",
      icon: "activity"
    },
    {
      title: "Fuel & Axle-Load Monitoring",
      description:
        "Capacitive fuel probes and axle-load sensors detect theft, unauthorised loading and overloading in real time.",
      icon: "scale"
    },
    {
      title: "Driver Behaviour & Route Safety",
      description:
        "Speeding, harsh braking, cornering and route-deviation analytics with configurable geofences and risk scoring.",
      icon: "route"
    },
    {
      title: "Cold-chain Telematics",
      description:
        "Integrated reefer temperature, humidity, door and GPS telemetry, one screen for cargo integrity and vehicle status.",
      icon: "snowflake"
    },
    {
      title: "Generator Engine Health & Diagnostics",
      description:
        "Engine speed, oil pressure, coolant temperature, power output, runtime, voltage and frequency, logged continuously and analysed for predictive maintenance.",
      icon: "zap"
    },
    {
      title: "Genset Fuel Monitoring & Theft Prevention",
      description:
        "Capacitive fuel-level sensors for stationary and mobile gensets. Alerts on sudden drains, top-ups and unauthorised siphoning.",
      icon: "droplet"
    },
    {
      title: "Genset Fleet & Geolocation",
      description:
        "Real-time geo-tracking of gensets and technicians, remote start/stop, and enterprise-view dashboards for large fleets.",
      icon: "map-pin"
    },
    {
      title: "Automated Alerts & Reports",
      description:
        "Configurable alarms for alarm codes, fuel loss and abnormal loads, delivered by SMS, email and app, with PDF and Excel reports.",
      icon: "bell"
    }
  ],
  "water-gas-metering": [
    {
      title: "Smart Water Metering",
      description:
        "Ultrasonic meters over LoRaWAN. Flow, temperature and burst detection; reduce non-revenue water and renovate pipes proactively.",
      icon: "droplet"
    },
    {
      title: "IoT Gas Metering",
      description:
        "Ultrasonic and diaphragm meters for residential, commercial and industrial gas. Remote valve control and tamper detection.",
      icon: "flame"
    },
    {
      title: "Fluid & Steam Metering",
      description:
        "Level probes for diesel, chemicals and process fluids; steam metering for industrial energy accounting.",
      icon: "beaker"
    },
    {
      title: "Waste Management Sensors",
      description:
        "Fill-level sensors for bins and skips, optimise collection routes and cut fuel and labour costs.",
      icon: "trash"
    }
  ],
  "smart-home": [
    {
      title: "Smart Locks (Mortise & Commercial)",
      description:
        "Fingerprint, PIN, RFID, app and mechanical-key unlock. AI encryption chip, anti-peep passwords and strong electromagnetic protection.",
      icon: "lock"
    },
    {
      title: "Wi-Fi Switches, Sockets & Dimmers",
      description:
        "Touch, physical and dimmer switches; smart power strips and wall sockets, Amazon Alexa and Google Home ready.",
      icon: "toggle-right"
    },
    {
      title: "Smart Lighting & Scenes",
      description:
        "Colour-tunable bulbs and light strips over Wi-Fi. Circadian, movie, away and party scenes with schedules and timers.",
      icon: "sun"
    },
    {
      title: "CCTV, Climate & Voice",
      description:
        "AI-assisted IP cameras with local NVR, smart thermostats and motorised blinds, one app, Alexa & Google Home voice control.",
      icon: "camera"
    }
  ]
} as const;

/**
 * Product model line-ups per solution, keyed by pillar slug.
 * Each model gets a section on the service detail page and its own
 * sub-page at /services/<pillar>/<model slug>.
 */
export const productModels: Record<
  string,
  {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    points: string[];
    highlights: { title: string; body: string }[];
    specs: { label: string; value: string }[];
    image: string;
    imageAlt: string;
  }[]
> = {
  "cold-chain": [
    {
      slug: "usb-data-logger",
      name: "Single-use USB Logger",
      tagline: "Offline · one-time use",
      description:
        "An economical choice for one-way shipments when you only need a report at the destination. Plug into any USB port to download PDF and CSV reports, with no connectivity or setup required.",
      points: [
        "Texas Instruments digital sensor with NIST-traceable calibration and a report included with every logger",
        "Up to 100 days per trip, max 14,400 readings",
        "−30 °C to 70 °C, shock detection, IP67",
        "12-month shelf life on a 3.0 V lithium battery"
      ],
      highlights: [
        {
          title: "Dual-format reports",
          body: "Every logger generates PDF and CSV reports over USB. Use the PDF for sign-off and the CSV with your QA systems."
        },
        {
          title: "NIST-traceable calibration",
          body: "A TI digital sensor and calibration report ship with every unit, providing traceable data for pharma and food audits."
        },
        {
          title: "Shock detection",
          body: "Records impact events alongside temperature so you can prove how goods were handled, not just how cold they were."
        }
      ],
      specs: [
        { label: "Usage type", value: "Single-use, up to 100 days per trip" },
        { label: "Temperature sensor", value: "Texas Instruments digital sensor, NIST traceable" },
        { label: "Temperature range", value: "−30 °C to 70 °C (−22 °F to 158 °F)" },
        { label: "Memory capacity", value: "Up to 14,400 readings" },
        { label: "Reports", value: "PDF and CSV via USB; no software required" },
        { label: "Shock detection", value: "Yes; records impacts to help protect goods" },
        { label: "Environmental rating", value: "IP67" },
        { label: "Battery", value: "3.0 V lithium · 12-month battery life" },
        { label: "Calibration", value: "Calibration report included with every logger" }
      ],
      image: "/products/cold-chain-usb-logger.jpg",
      imageAlt: "Single-use offline USB temperature data logger"
    },
    {
      slug: "single-use-realtime",
      name: "Single-use Real-time Logger",
      tagline: "B9Z · 2G · one-time use",
      description:
        "A global real-time monitor for critical one-way shipments. Temperature, location and route data stream to the cloud for live traceability, with a USB PDF backup on arrival and alerts when conditions drift.",
      points: [
        "Real-time alerts via SMS, email and app, 24/7",
        "Cold-chain visibility with location, temperature and route data",
        "Global embedded roaming SIM inside",
        "60 days of monitoring per trip, 28,800 readings"
      ],
      highlights: [
        {
          title: "Live cloud traceability",
          body: "Data streams to the cloud as it is recorded. Follow the shipment on a route map and respond to issues before product is lost."
        },
        {
          title: "Double-backup PDF reports",
          body: "Get a local PDF through the USB port and another from the cloud platform. The logger keeps the familiar USB workflow while adding real-time monitoring."
        },
        {
          title: "Flight mode on arrival",
          body: "Entering a preset location automatically switches the device to flight mode and notifies your team by email or app push."
        }
      ],
      specs: [
        { label: "Model", value: "B9Z (2G-60)" },
        { label: "Usage type", value: "Single-use, max 60 days" },
        { label: "Monitored parameters", value: "Temperature, location, track routes" },
        { label: "Temperature sensor", value: "Internal Texas Instruments digital sensor" },
        { label: "Temperature range", value: "−30 °C to 70 °C · ±0.5 °C (−20 °C to +40 °C) · 0.1 °C resolution" },
        { label: "Memory capacity", value: "Up to 28,800 readings" },
        { label: "Location", value: "LBS base-station positioning" },
        { label: "Cellular", value: "2G network · embedded global roaming SIM" },
        { label: "Use time", value: "60 days at 60-min reporting interval" },
        { label: "Intervals", value: "10-min logging · 10/20/30/60-min reporting (platform settable)" },
        { label: "Reports", value: "PDF via USB 2.0, cloud platform or mobile app" },
        { label: "Environmental rating", value: "IP64" },
        { label: "Dimensions / weight", value: "103 × 61.3 × 23 mm / 120 g" },
        { label: "Certifications", value: "FCC, CE, RTCA/DO-160G, UN38.3, RoHS, WEEE" },
        { label: "Shelf time / storage", value: "12 months · −10 °C to +55 °C" }
      ],
      image: "/products/cold-chain-b9z.jpg",
      imageAlt: "B9Z single-use real-time temperature logger"
    },
    {
      slug: "multi-use-realtime",
      name: "Multi-use Real-time Logger",
      tagline: "T7 / T71 · 4G/5G · reusable + rechargeable",
      description:
        "The workhorse for recurring lanes: a rechargeable real-time monitor that delivers full cold chain visibility trip after trip, with an on-device display for spot checks. Available with an external probe (T71) for deep-frozen loads down to −40 °C.",
      points: [
        "120 days per charge, up to 50,000 readings",
        "±0.5 °C accuracy from −20 °C to +40 °C",
        "Global LTE 4G/5G with 2G fallback",
        "Temperature, humidity, light, shock, location and route"
      ],
      highlights: [
        {
          title: "Chip-level radio design",
          body: "Chip-level design replaces off-the-shelf modules to deliver a stronger signal, a 156% larger effective working range and reliable data transmission."
        },
        {
          title: "2× battery endurance",
          body: "A low-power algorithm gives 4G devices endurance comparable to 2G models, with about twice the battery life of comparable loggers."
        },
        {
          title: "T71 probe variant",
          body: "The external-probe version monitors temperature from −40 °C to 80 °C, along with shock and location. It suits deep-frozen and ultra-low-temperature shipments."
        },
        {
          title: "2-year warranty",
          body: "Reusable hardware comes with a two-year warranty and can be used across dozens of trips."
        }
      ],
      specs: [
        { label: "Models", value: "T7 (internal sensors) · T71 (4G, external probe)" },
        { label: "Usage type", value: "Multi-use (reusable) + rechargeable" },
        { label: "Monitored parameters", value: "Temperature, humidity, light, shock, location, routes · T71: probe temperature, shock, location" },
        { label: "Temperature sensor", value: "Texas Instruments digital sensor" },
        { label: "Temperature range", value: "−30 °C to 70 °C · T71 probe: −40 °C to 80 °C" },
        { label: "Accuracy / resolution", value: "±0.5 °C (−20 °C to +40 °C) · 0.1 °C / 1 % RH" },
        { label: "Humidity range", value: "5–95 % RH, ±3 % (20–80 % RH)" },
        { label: "Memory capacity", value: "Up to 50,000 readings" },
        { label: "Location", value: "LBS base-station positioning" },
        { label: "Cellular", value: "Global LTE 4G/5G with 2G fallback · embedded global roaming SIM" },
        { label: "Use time", value: "120 days per charge at 120-min reporting interval" },
        { label: "Intervals", value: "1–10 min logging · 10–120 min reporting (platform settable)" },
        { label: "Reports", value: "PDF via USB 2.0, cloud platform or mobile app" },
        { label: "Environmental rating", value: "IP64" },
        { label: "Dimensions / weight", value: "103 × 65.6 × 18.5 mm · 160 g (T7) / 250 g (T71)" },
        { label: "Certifications", value: "FCC, CE, RTCA/DO-160G, UN38.3, RoHS, WEEE" },
        { label: "Shelf time / storage", value: "12 months · −10 °C to +55 °C" }
      ],
      image: "/products/cold-chain-logger-device.jpg",
      imageAlt: "Multi-use rechargeable real-time logger with on-device display"
    }
  ]
};

/**
 * Technical spec sheets per solution, keyed by pillar slug.
 * Cold-chain specs taken from the TemperatureHumidity logger datasheet.
 */
export const specSheets: Record<string, { label: string; value: string }[]> = {
  "cold-chain": [
    { label: "Usage type", value: "Multi-use (reusable + rechargeable) or single-use" },
    { label: "Monitored parameters", value: "Temperature, humidity, shock, location, track routes" },
    { label: "Temperature sensor", value: "Internal Texas Instruments (TI) digital sensor, NIST traceable" },
    { label: "Temperature range", value: "−30 °C to 70 °C (−22 °F to 158 °F)" },
    { label: "Temperature accuracy", value: "±0.5 °C (−20 °C to +40 °C); ±1 °C elsewhere" },
    { label: "Humidity range", value: "5–95 % RH, ±3 % (20–80 % RH)" },
    { label: "Memory capacity", value: "Up to 50,000 readings" },
    { label: "Connectivity", value: "Global LTE 4G/5G with 2G fallback and embedded roaming SIM" },
    { label: "Use time", value: "120 days per charge at 120-min reporting interval" },
    { label: "Logging / reporting interval", value: "1–10 min logging; 10–120 min reporting (platform settable)" },
    { label: "Reports", value: "PDF via USB 2.0, cloud platform or mobile app" },
    { label: "Dimensions / weight", value: "103 × 65.6 × 18.5 mm / 160 g" },
    { label: "Certifications", value: "FCC, CE, RTCA/DO-160G, UN38.3, RoHS, WEEE" },
    { label: "Environmental rating", value: "IP64 (multi-use) / IP67 (single-use USB)" }
  ]
};

export const industries = [
  {
    title: "Utilities & Energy",
    body: "Water service providers, IPPs and power distributors deploy our smart meters and audit platform to shrink non-revenue losses and monetise every kWh."
  },
  {
    title: "Health & Life Sciences",
    body: "Hospitals, blood banks, vaccine programmes and pharma distributors trust Powerise to keep temperature-sensitive stock defensibly in range."
  },
  {
    title: "Food & Beverage",
    body: "From breweries to QSR chains, protect margins with predictive maintenance and cut spoilage with real-time cold-chain alerts."
  },
  {
    title: "Logistics & Fleet",
    body: "Reefer operators, tanker fleets and distributors prove chain-of-custody in real time, from Mombasa port to the last mile."
  },
  {
    title: "Real Estate & Facilities",
    body: "Malls, estates and REITs use our sub-metering and BMS gateways to bill fairly, catch leaks and hit ESG reporting targets."
  },
  {
    title: "Homes & Estates",
    body: "Residential customers and gated communities upgrade to secure, cloud-optional smart-home ecosystems that simply work."
  }
] as const;

export const benefits = [
  {
    title: "Real-time Monitoring",
    body: "Live data on consumption, fuel, temperature and location, via web dashboards and mobile apps."
  },
  {
    title: "Predictive Maintenance",
    body: "Analyse trends to predict failures and maintenance needs, reducing downtime and repair costs."
  },
  {
    title: "Cost Reduction",
    body: "Improved efficiency, fewer manual reads and less waste translate directly to lower operating costs."
  },
  {
    title: "Higher Accuracy",
    body: "Removes human error from manual readings. Automatic tamper and anomaly detection built in."
  },
  {
    title: "Remote Access & Control",
    body: "Access data, and, where enabled, disconnect, reconnect or shut off, from anywhere in the world."
  },
  {
    title: "ESG-aligned Reporting",
    body: "Defensible Scope 1 and 2 numbers, waste reduction and safety metrics for your sustainability disclosures."
  }
];

/**
 * Platform layers, the technical stack behind every solution.
 * Wording aligns with the DIN-rail gateway architecture described in the docs.
 */
export const platformLayers = [
  {
    key: "sense",
    label: "Sense",
    title: "Sensors and meters built for the field.",
    body:
      "TI-grade digital temperature and humidity sensors, ultrasonic flow meters, capacitive fuel probes and IP64/IP67 enclosures rated for harsh African conditions.",
    bullets: [
      "±0.5 °C accuracy, resolution 0.1 °C",
      "Up to 50,000 readings on-device",
      "IP64/IP67 rugged enclosures"
    ]
  },
  {
    key: "connect",
    label: "Connect",
    title: "DIN-rail IoT gateway, any protocol.",
    body:
      "Our heart-of-system gateway connects RS485 Modbus devices, controllers and sensors, over 4G, Wi-Fi, WLAN or Ethernet, into cloud dashboards and mobile apps.",
    bullets: [
      "12–30 V power supply range",
      "4G / Wi-Fi / WLAN / Ethernet",
      "HTTP · MQTT · Modbus TCP & RTU",
      "OTA self-upgrade, AP Wi-Fi config"
    ]
  },
  {
    key: "analyze",
    label: "Analyze",
    title: "Real-time dashboards and analytics.",
    body:
      "Cloud analytics turn raw telemetry into consumption reports, KPI dashboards and predictive insights, from the building level down to individual assets.",
    bullets: [
      "Real-time power quadrants & load profiles",
      "Automated audits & benchmarks",
      "Top-consumers and daily-reading reports"
    ]
  },
  {
    key: "alert",
    label: "Alert",
    title: "Alerts that reach someone who cares.",
    body:
      "Configurable thresholds trigger multi-channel alerts, SMS, WhatsApp, email and in-app, with escalation ladders for ops managers and on-call teams.",
    bullets: [
      "SMS · Email · App · WhatsApp",
      "Escalation ladders & on-call rotations",
      "Signed audit trail per alert"
    ]
  },
  {
    key: "act",
    label: "Act",
    title: "Remote control and predictive action.",
    body:
      "Beyond monitoring, remote valve, meter and load control, PDF/Excel report exports and integration hooks to your ERP, billing or M-Pesa systems.",
    bullets: [
      "Remote valve & load control",
      "PDF, Excel and API exports",
      "M-Pesa, ERP & webhook integrations"
    ]
  }
];

export const process = [
  {
    step: "01",
    title: "Assess",
    body: "We walk your site, review load, cargo or fleet data and quantify the opportunity. You leave with a costed business case."
  },
  {
    step: "02",
    title: "Deploy",
    body: "Certified in-house crews install meters, sensors and gateways around live operations, no downtime, no drama."
  },
  {
    step: "03",
    title: "Monitor",
    body: "Continuous logging into Powerise Cloud with real-time dashboards, automated reports and multi-channel alerts."
  },
  {
    step: "04",
    title: "Optimise",
    body: "Ongoing analytics, energy-saving journey reports and firmware updates over-the-air for the life of every asset."
  }
];

/**
 * Capability strip shown on the homepage in place of fabricated client logos.
 * Numbers and phrasing sourced directly from the client's IoT decks.
 */
export const capabilities = [
  "10,000+ parameters monitored",
  "24/7 real-time analytics",
  "±0.5 °C cold-chain accuracy",
  "IP64 / IP67 rugged enclosures",
  "4G · Wi-Fi · WLAN · Ethernet",
  "MQTT · HTTP · Modbus TCP & RTU",
  "Over-the-air firmware updates",
  "M-Pesa · ERP · webhook ready"
];

/**
 * Deep-dive product & platform specifications taken from the client's
 * energy, generator, cold-chain and truck telemetry documentation.
 * Used on the homepage where a testimonials strip previously lived.
 */
export const highlights = [
  {
    eyebrow: "Energy monitoring",
    title: "Hierarchical audit, from building to individual asset.",
    body: "Powerise smart meters map consumption across four levels: building, circuit, critical asset and product condition. Every kWh is traceable, every anomaly is investigable.",
    bullets: [
      "Real-time voltage, current and power-factor logging",
      "Automated daily-reading and top-consumer reports",
      "Load-profile and TOU tariff analytics"
    ]
  },
  {
    eyebrow: "Generator telemetry",
    title: "Engine health, fuel and run-hours in one screen.",
    body: "Retrofit any diesel genset with capacitive fuel probes and CAN-bus / analog telemetry. Live RPM, oil pressure, coolant temperature, running hours and fuel level, with theft alerts the moment a drain occurs.",
    bullets: [
      "Predictive maintenance from CAN-bus DTCs",
      "Sudden-drain and unauthorised top-up alerts",
      "Remote start/stop and geo-tracking"
    ]
  },
  {
    eyebrow: "Cold chain",
    title: "WHO-PQS grade loggers with global 4G/5G reporting.",
    body: "TI-grade digital sensors with ±0.5 °C accuracy log up to 50,000 readings on-device. Global LTE with 2G fallback delivers PDF reports via USB, cloud and mobile app.",
    bullets: [
      "−30 °C to 70 °C operating range",
      "IP67 rechargeable multi-use loggers, 120-day run-time",
      "SMS · email · app alerts, 24/7"
    ]
  }
];
