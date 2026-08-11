// Demonstration data for the KisanMitra AI prototype.
// Clearly labelled as sample data in the UI — it is NOT live field or weather data.

export type Level = "low" | "moderate" | "high" | "critical";

export const farmer = {
  name: "Ramesh",
  farmName: "Sri Lakshmi Farm",
  location: "Guntur, Andhra Pradesh",
  soil: "Black cotton soil",
  irrigation: "Drip",
  language: "English",
};

export const fields = [
  { id: "f1", name: "Field 1", crop: "Rice", size: "2.5 acres", stage: "Vegetative", health: 82, emoji: "🌾" },
  { id: "f2", name: "Field 2", crop: "Tomato", size: "1.2 acres", stage: "Flowering", health: 72, emoji: "🍅" },
  { id: "f3", name: "Field 3", crop: "Cotton", size: "3 acres", stage: "Seedling", health: 88, emoji: "🌱" },
];

export const riskScore = {
  value: 68,
  label: "HIGH" as const,
  reasons: [
    "Humidity has stayed above 85% for 3 days",
    "Leaf spot symptoms increased since the last scan",
    "Rain expected within 24 hours",
  ],
};

export const cropHealth = {
  score: 72,
  previous: 64,
  trend: "improving" as "improving" | "stable" | "worsening",
  disease: "Possible Tomato Early Blight",
  severity: "Moderate",
  confidence: 87,
  note: "Your crop is improving compared with the previous scan.",
  history: [
    { date: "Jun 12", score: 78 },
    { date: "Jun 18", score: 71 },
    { date: "Jun 25", score: 64 },
    { date: "Today", score: 72 },
  ],
};

export const weather = {
  temp: 31,
  humidity: 88,
  rainChance: 80,
  wind: 18,
  summary: "Cloudy, heavy rain likely tonight",
  warning: {
    title: "Heavy rain warning",
    when: "Expected in about 8 hours",
    steps: [
      "Check field drainage channels",
      "Avoid spraying today",
      "Support young plants",
      "Recheck the field after the rain stops",
    ],
  },
  forecast: [
    { day: "Today", icon: "🌧️", temp: "31°", rain: "80%" },
    { day: "Tue", icon: "🌦️", temp: "29°", rain: "60%" },
    { day: "Wed", icon: "⛅", temp: "32°", rain: "20%" },
    { day: "Thu", icon: "☀️", temp: "34°", rain: "10%" },
    { day: "Fri", icon: "⛅", temp: "33°", rain: "25%" },
  ],
};

export const irrigation = {
  decision: "Skip irrigation today",
  why: "Rain is expected tonight and the soil is already moist.",
  facts: [
    { label: "Soil type", value: "Black cotton" },
    { label: "Rain in last 3 days", value: "22 mm" },
    { label: "Temperature", value: "31°C" },
    { label: "Humidity", value: "88%" },
    { label: "Estimated need", value: "0 mm today" },
  ],
};

export const spray = {
  best: "Tomorrow, 6:00 AM – 8:30 AM",
  avoid: "Today evening",
  why: ["Rain expected tonight", "Wind above 15 km/h", "Humidity too high for good coverage"],
};

export const todayActions = [
  {
    tone: "danger" as const,
    tag: "Do now",
    title: "Check drainage before the rain",
    detail: "Heavy rain is expected in about 8 hours. Clear the channels around Field 2.",
  },
  {
    tone: "warning" as const,
    tag: "Do tomorrow",
    title: "Inspect lower leaves for spots",
    detail: "Fungal risk rises after rain. Look at the leaves closest to the soil.",
  },
  {
    tone: "info" as const,
    tag: "Avoid",
    title: "Do not spray today",
    detail: "Rain will wash off the spray and it will not work.",
  },
];

export const preventionCalendar = [
  { when: "This week", level: "moderate" as Level, title: "Fungal disease risk rising", advice: "Inspect lower leaves every 2 days." },
  { when: "Next week", level: "high" as Level, title: "Fruit borer activity likely", advice: "Install pheromone traps in Field 2." },
  { when: "In 2 weeks", level: "low" as Level, title: "Nutrient top-up window", advice: "Plan fertiliser after the rain settles." },
];

export const activityLog = [
  { date: "July 20", type: "Irrigation", detail: "Drip, 45 minutes — Field 1" },
  { date: "July 22", type: "Fertilizer", detail: "Basal dose applied — Field 2" },
  { date: "July 25", type: "Disease detected", detail: "Leaf spots noticed on lower leaves" },
  { date: "July 26", type: "Treatment", detail: "Followed local extension officer advice" },
  { date: "July 28", type: "Crop inspection", detail: "5 photos saved from field scouting" },
];

export const inventory = [
  { item: "Tomato seed (hybrid)", qty: "2 packets", low: false },
  { item: "Urea", qty: "8 kg left", low: true },
  { item: "Neem oil", qty: "1.5 L", low: false },
  { item: "Sticky traps", qty: "6 left", low: true },
];

export const scoutingZones = [
  { zone: "North", status: "affected" as const, note: "Leaf spots on lower leaves" },
  { zone: "South", status: "healthy" as const, note: "No symptoms seen" },
  { zone: "East", status: "affected" as const, note: "Yellowing patches" },
  { zone: "Center", status: "watch" as const, note: "Slight wilting after midday" },
  { zone: "West", status: "healthy" as const, note: "No symptoms seen" },
];

export const timeline = [
  { date: "June 12", disease: "None", severity: "—", score: 78, trend: "stable" as const },
  { date: "June 18", disease: "Early spots", severity: "Mild", score: 71, trend: "worsening" as const },
  { date: "June 25", disease: "Possible early blight", severity: "Moderate", score: 64, trend: "worsening" as const },
  { date: "Today", disease: "Possible early blight", severity: "Moderate", score: 72, trend: "improving" as const },
];

export const calendarTasks = [
  { day: "Mon", task: "Check drainage", tone: "danger" as const },
  { day: "Tue", task: "Safe spray window 6–8:30 AM", tone: "success" as const },
  { day: "Wed", task: "Inspect lower leaves", tone: "warning" as const },
  { day: "Thu", task: "Irrigate Field 1", tone: "info" as const },
  { day: "Fri", task: "Take crop photo", tone: "info" as const },
  { day: "Sat", task: "Trap check — Field 2", tone: "warning" as const },
  { day: "Sun", task: "Rest / market day", tone: "muted" as const },
];

export const insights = {
  commonProblems: [
    { name: "Fungal leaf spots", count: 6 },
    { name: "Water stress", count: 3 },
    { name: "Fruit borer", count: 2 },
  ],
  irrigations: 14,
  scans: 21,
  rainDays: 9,
};

export const languages = [
  "English",
  "తెలుగు (Telugu)",
  "हिन्दी (Hindi)",
  "தமிழ் (Tamil)",
  "ಕನ್ನಡ (Kannada)",
  "മലയാളം (Malayalam)",
  "मराठी (Marathi)",
  "বাংলা (Bengali)",
];

export const scanSteps = [
  "📸 Image received",
  "🔍 Analysing visual symptoms",
  "🌦️ Checking weather conditions",
  "🌱 Evaluating crop risk",
  "📋 Preparing recommendation",
];

export const diagnosis = {
  name: "Possible Tomato Early Blight",
  confidence: 87,
  severity: "Moderate",
  observed: [
    "Brown circular spots with rings",
    "Yellowing around the affected areas",
    "Damage mainly on the lower leaves",
  ],
  doNow: [
    "Remove and destroy badly affected lower leaves",
    "Improve airflow — remove weeds around the plants",
    "Avoid watering the leaves; water the soil only",
    "Ask your local agriculture officer before using any chemical",
  ],
  doNot: [
    "Do not spray before rain — it will wash away",
    "Do not increase the dose beyond the product label",
    "Do not water the plants from above in the evening",
  ],
  recheck: "Take another photo in 3 days.",
};

export const riskColor = (v: number) =>
  v <= 25 ? "success" : v <= 50 ? "warning" : v <= 75 ? "caution" : "danger";

export const riskWord = (v: number) =>
  v <= 25 ? "LOW" : v <= 50 ? "MODERATE" : v <= 75 ? "HIGH" : "CRITICAL";
