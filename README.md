# Farm Compass AI

# 🌱 KISANMITRAI — AI-Powered Smart Farming & Climate Resilience Platform

Build a **modern, highly user-friendly, AI-powered agricultural web application** called **kisanmitra AI** that acts as a real-time bridge between raw field conditions and practical agronomic guidance.

The goal is to help farmers quickly understand:

* What is happening to their crop?

* Is it a disease, pest, nutrient deficiency, weather stress, or something else?

* What should they do right now?

* Should they irrigate today?

* When is it safe to spray?

* What weather risks are coming?

* How serious is the crop risk?

* Is the crop improving or getting worse?

* When should they check the crop again?

* When should they contact an agricultural expert?

The application must be designed for **real farmers**, including users with limited technical knowledge and users who may have slow internet connectivity.

The interface should feel **simple, trustworthy, calm, agricultural, modern, and easy to understand**.

---

# 🎨 VISUAL THEME & DESIGN SYSTEM

Use a **Premium Nature + Smart Agriculture theme**.

### Primary colors:

* Pale green

* Soft sage green

* Light gray

* White

* Dark charcoal for readable text

* Very subtle earthy/brown accents

Avoid excessive bright green.

Use green primarily for:

* Healthy status

* Positive recommendations

* Agriculture-related elements

Use:

* Yellow/amber → Warning

* Orange → Moderate risk

* Red → Critical/emergency

* Blue → Weather/water information

### Overall visual style

Create a clean modern SaaS-style interface combined with agricultural visual elements.

Use:

* Rounded cards

* Soft shadows

* Large readable typography

* Simple icons

* Clear visual hierarchy

* Large buttons

* Plenty of whitespace

* Accessible contrast

* Minimal unnecessary animations

* Smooth micro-interactions

* Subtle leaf/field-inspired decorative elements

* Modern charts and visual indicators

Do NOT make the website look like a complicated corporate analytics dashboard.

It should feel like:

**"A friendly digital farming assistant."**

---

# 🧑‍🌾 MAIN USER EXPERIENCE

The farmer should be able to open the application and immediately understand what requires attention.

The homepage/dashboard should answer:

### "What should I do today?"

Create a prominent:

## 🌱 TODAY'S FARM ACTION PLAN

Example:

**Good morning, Farmer!**

### Today's priorities

🟢 Crop health

"Tomato crop looks stable."

💧 Irrigation

"Skip irrigation today — rain expected tonight."

🌧️ Weather

"Heavy rainfall expected in 10 hours."

🧪 Spraying

"Safe spraying window: Tomorrow 6:00 AM – 8:00 AM."

🐛 Disease risk

"Fungal disease risk increasing this week."

Use simple language rather than technical terminology.

---

# 🏠 FARMER DASHBOARD

Create a beautiful dashboard containing:

### 1. Crop Health

Show:

* Current health status

* Disease detected

* Disease severity

* AI confidence

* Previous health status

* Health trend

Example:

**Crop Health: 78/100**

🟢 Stable

"Your crop appears stable compared with the previous scan."

---

### 2. 🌾 Crop Risk Score

Generate a simple **0–100 Crop Risk Score**.

Categories:

🟢 0–25 → Low

🟡 26–50 → Moderate

🟠 51–75 → High

🔴 76–100 → Critical

Explain the score using the top 2–3 reasons.

Example:

### Crop Risk: 68/100 — HIGH

Main reasons:

* High humidity

* Disease symptoms increasing

* Rain expected within 24 hours

Do not simply show a number.

Always explain **why**.

---

### 3. 🌧️ Weather Risk

Display:

* Current temperature

* Humidity

* Rain probability

* Wind speed

* Forecast

* Extreme weather warnings

Show crop-specific advice.

Example:

> ⚠️ Heavy rain expected in 8 hours.

> Postpone spraying and check field drainage.

---

### 4. 💧 Smart Irrigation

Display:

### Irrigation Recommendation

Example:

**💧 SKIP IRRIGATION TODAY**

"Rain is expected tonight."

Show:

* Soil type

* Recent rainfall

* Temperature

* Humidity

* Forecast

* Estimated irrigation need

If irrigation is required:

**💧 Irrigate Tomorrow Morning**

Keep recommendations simple.

---

### 5. 🧪 Safe Spray Window

Create a dedicated card showing:

### Best spraying window

**Tomorrow

6:00 AM – 8:30 AM**

### Avoid

**Today evening**

### Why?

* Rain expected

* Strong wind

* High humidity

Never recommend spraying when weather conditions make it unsafe or ineffective.

For chemical treatment advice, clearly remind users:

> Always follow the product label and local agricultural guidance.

---

### 6. 💰 Treatment Cost Estimator

Allow farmers to enter:

* Field size

* Acres/hectares

* Crop

* Recommended treatment

Show:

**Estimated treatment cost**

₹500 – ₹850

Also show:

* Approximate quantity

* Cost assumptions

* Lower-cost alternatives where appropriate

Never prioritize products based on commercial relationships.

---

# 📸 AI CROP DIAGNOSIS

Create a major feature:

## "Scan Your Crop"

Allow farmers to:

* Upload an image

* Take a photo using camera

* Upload multiple photos

The system should analyze:

* Diseases

* Pests

* Nutrient deficiencies

* Physical damage

* Possible environmental stress

* Unclear symptoms

Show:

### Diagnosis

**Possible Tomato Early Blight**

### Confidence

**87% — High confidence**

### Severity

**Moderate**

### What we observed

Use simple explanations.

For example:

* Brown circular spots

* Yellowing around affected areas

* Damage mainly on lower leaves

### What to do now

Provide clear step-by-step actions.

### What NOT to do

Provide important warnings.

### Check again

"Take another photo in 3 days."

---

# 🧠 EXPLAINABLE AI

Never present AI results as absolute truth.

Every diagnosis should include:

* Confidence level

* Symptoms detected

* Reason for prediction

* Possible alternatives when confidence is low

Example:

### AI confidence: 54%

"This image is unclear. The symptoms could indicate fungal infection or nutrient deficiency."

Then show:

**👨‍🌾 Expert verification recommended**

If confidence is low, the system must NOT pretend to know the diagnosis.

---

# 🌱 CROP HEALTH TIMELINE

Allow farmers to save multiple photos of the same crop.

Create a visual timeline:

**June 12 → June 18 → June 25 → Today**

For each scan show:

* Photo

* Date

* Disease

* Severity

* Health score

Compare previous and current images.

Show:

🟢 Improving

🟡 Stable

🔴 Worsening

Example:

### Crop health trend

78 → 71 → 64 → 72

"Your crop is improving compared with the previous scan."

---

# 📸 FIELD SCOUTING MODE

Create a feature allowing farmers to take multiple photos from different parts of the field.

Example:

* North field

* South field

* East field

* West field

* Center field

Analyze each image individually.

Then generate:

## Field Health Summary

"Symptoms detected in 3 of 5 locations."

Determine whether the issue appears:

**Localized** or **Widespread**

Show an overall field health score.

---

# 🗺️ FIELD MAP & PROBLEM ZONES

Create a simple field map.

Allow farmers to mark:

* Diseased area

* Pest hotspot

* Waterlogged area

* Dry area

* Healthy area

Use simple colored zones.

Allow farmers to track how affected areas change over time.

---

# 🐛 PEST & DISEASE PREVENTION CALENDAR

Create a seasonal calendar based on:

* Crop

* Location

* Crop stage

* Weather

* Season

Show upcoming risks.

Example:

### Next Week

🟠 Fungal disease risk increasing

"High humidity and rainfall may increase fungal risk."

### Recommended action

"Inspect lower leaves every 2 days."

The system should focus on **prevention**, not only treatment.

---

# 🌦️ EXTREME WEATHER EARLY WARNING

Monitor:

* Heavy rain

* Heat waves

* Strong winds

* Frost/cold conditions

* Drought risk

* Thunderstorms

* Excess humidity

Create urgent alerts.

Example:

## ⚠️ HEAVY RAIN WARNING

Expected in approximately 8 hours.

### Protect your crop

1. Check drainage

2. Avoid unnecessary spraying

3. Secure young plants

4. Recheck the field after rainfall

---

# 🚨 EMERGENCY CROP ALERT

When disease severity + weather + crop stage indicate high risk, generate:

## 🚨 URGENT CROP ALERT

### What to do now

Step-by-step actions.

### What NOT to do

Important precautions.

### Check again

Specify when the farmer should inspect the field again.

---

# 🎙️ VOICE-BASED FARMER ASSISTANT

Add a large microphone button.

Farmers should be able to speak naturally.

Example:

> "నా టమాటా ఆకులు పసుపుగా మారుతున్నాయి, నేను ఏం చేయాలి?"

The system should:

1. Convert speech to text

2. Understand the question

3. Provide a simple answer

4. Support regional Indian languages where possible

Support languages such as:

* English

* Telugu

* Hindi

* Tamil

* Kannada

* Malayalam

* Marathi

* Bengali

Keep responses short and practical.

Include:

🔊 "Read answer aloud"

---

# 🌐 MULTILINGUAL INTERFACE

Add a highly visible language selector.

Allow the entire application to switch languages.

Translate:

* Dashboard

* Alerts

* Recommendations

* Weather information

* Crop diagnosis

* Buttons

* Voice assistant

* Notifications

Avoid complicated agricultural terminology.

Use farmer-friendly language.

---

# 📶 LOW-CONNECTIVITY / OFFLINE MODE

Design the application to remain useful during poor connectivity.

Cache:

* Recent crop diagnoses

* Treatment instructions

* Recent weather information

* Emergency alerts

* Farm activity history

Allow farmers to create records while offline.

When internet returns:

**"Syncing your farm data..."**

Then synchronize automatically.

---

# 🧾 FARM ACTIVITY LOG

Allow farmers to record:

* Sowing

* Irrigation

* Fertilizer application

* Spraying

* Pest control

* Harvesting

* Rainfall observations

* Crop inspections

Create a chronological history.

Example:

**July 20** → Irrigation

**July 22** → Fertilizer applied

**July 25** → Disease detected

**July 26** → Treatment applied

Use this history to improve future recommendations.

---

# 📦 INPUT INVENTORY

Allow farmers to record:

* Seeds

* Fertilizers

* Crop protection products

* Organic inputs

* Other farm supplies

Show reminders:

**"Your fertilizer stock may be running low."**

Do not recommend products solely because of commercial relationships.

---

# 🌱 CROP STAGE AWARENESS

Add an important feature:

## Crop Growth Stage

Allow farmers to select or record:

* Seedling

* Vegetative

* Flowering

* Fruiting

* Maturity

* Harvest

Use crop stage when generating recommendations.

The same disease or weather condition can have different consequences depending on crop stage.

---

# 📅 SMART FARM CALENDAR

Create a simple calendar showing:

* Irrigation

* Spraying

* Fertilizer application

* Crop inspections

* Expected weather risks

* Disease-risk periods

* Harvest estimate

Highlight today's most important task.

---

# 🔔 SMART REMINDERS

Allow farmers to receive reminders such as:

🌱 "Inspect your crop today."

💧 "Irrigation may be required tomorrow."

🌧️ "Heavy rain expected tonight."

📸 "Take another crop photo to compare progress."

🐛 "Pest-risk period approaching."

Make notifications actionable rather than generic.

---

# 👨‍🌾 EXPERT ESCALATION

If AI confidence is low:

### "AI confidence is low."

"An agricultural expert should verify this result."

Provide:

**Send to Expert**

Allow farmer to submit:

* Crop photo

* Location

* Crop type

* Crop stage

* Symptoms

* AI analysis

* Weather information

Show expert response inside the application.

---

# 🔒 SAFETY & TRUST LAYER

This is extremely important.

Clearly distinguish:

### 🤖 AI Prediction

from

### 👨‍🌾 Verified Expert Guidance

Never present uncertain AI output as guaranteed.

For chemical treatments:

* Avoid unsupported pesticide recommendations

* Do not provide dangerous or excessive chemical instructions

* Remind users to follow the product label

* Encourage local agricultural guidance

* Display safety precautions

* Display waiting/harvest intervals only when reliable data is available

Add a small:

**"Why am I seeing this recommendation?"**

button.

When clicked, explain the main factors used.

---

# 📊 FARM INSIGHTS

Create a section that learns from the farmer's historical records.

Show:

* Most common crop problems

* Irrigation patterns

* Disease frequency

* Weather-related problems

* Field health trend

* Input usage

* Successful interventions

Keep analytics simple and visual.

---

# 💡 NEW FEATURE: "WHAT SHOULD I DO NOW?"

Make this one of the most important features.

Instead of forcing the farmer to interpret multiple charts, automatically prioritize actions.

Example:

## 🌱 Your Top 3 Actions

### 1️⃣ Do now

Check drainage before heavy rain.

### 2️⃣ Do tomorrow

Inspect lower leaves for fungal symptoms.

### 3️⃣ Avoid

Do not spray before rainfall.

This should be generated from the current field conditions.

---

# 💡 NEW FEATURE: "WHY THIS MATTERS"

Every major recommendation should have a simple explanation.

Example:

**Recommendation:** Skip irrigation.

**Why?**

"Rain is expected tonight and the soil is already moist."

This builds farmer trust.

---

# 💡 NEW FEATURE: FARMER-FRIENDLY SEVERITY LANGUAGE

Do not rely only on technical scores.

Convert technical information into simple language.

Instead of:

"Moderate pathogen probability."

Say:

"⚠️ The crop may be developing a disease. Check the affected leaves today."

---

# 💡 NEW FEATURE: "COMPARE TWO PHOTOS"

Allow farmers to select:

**Previous photo vs Current photo**

Show:

* Side-by-side images

* Detected changes

* Disease severity

* Health score

* AI explanation

Example:

### "The affected area appears 18% smaller."

If the system cannot reliably calculate the change, clearly say so instead of inventing a number.

---

# 💡 NEW FEATURE: FARM PROFILE

Create a simple farmer/farm profile containing:

* Farmer name

* Farm name

* Location

* Crops

* Field size

* Soil type

* Irrigation type

* Preferred language

Allow multiple fields.

Example:

### My Farms

🌾 Field 1 — 2.5 acres — Rice

🍅 Field 2 — 1.2 acres — Tomato

🌱 Field 3 — 3 acres — Cotton

---

# 📱 MOBILE-FIRST DESIGN

The website must be **mobile-first** because farmers will primarily use smartphones.

Important requirements:

* Large touch targets

* Large camera button

* Large microphone button

* Simple navigation

* Minimal typing

* Easy image upload

* Fast loading

* Responsive design

* Works well on low-end phones

* Avoid tiny text

* Avoid complicated forms

Desktop version should also look excellent for judges/demo presentations.

---

# 🧭 SIMPLE NAVIGATION

Use a bottom navigation bar on mobile:

🏠 Home

📸 Scan

🌾 My Crops

🗺️ Fields

📅 Calendar

👤 Profile

On desktop, use a clean sidebar.

---

# 🏠 HOMEPAGE STRUCTURE

The homepage should contain:

1. Greeting

2. Today's Action Plan

3. Crop Risk Score

4. Crop Health

5. Weather Alert

6. Irrigation Recommendation

7. Safe Spray Window

8. Upcoming Disease/Pest Risk

9. Recent Activity

10. Quick Scan button

The most important information must appear above the fold.

---

# 📸 PROMINENT QUICK ACTION BUTTONS

Create large quick actions:

### 📸 Scan Crop

### 🎙️ Ask by Voice

### 🌦️ Weather

### 💧 Irrigation

### 🧑‍🌾 Ask Expert

---

# 🤖 AI DEMO / MOCK FUNCTIONALITY

If real AI APIs are not available, create realistic demo functionality using mock data.

The application should still feel functional.

For example:

Upload leaf image →

Processing animation →

"Analyzing crop..."

Then display:

**Possible Disease: Early Blight**

**Confidence: 87%**

**Severity: Moderate**

**Recommended Action: Inspect affected leaves and follow verified local guidance.**

Make the architecture ready for future integration with:

* Computer vision models

* Weather APIs

* Maps

* Speech recognition

* Translation APIs

* Agricultural databases

* Expert consultation systems

Do NOT claim that fake data is real-time data.

Clearly label demonstration/mock information where appropriate.

---

# 🧪 AI PROCESSING EXPERIENCE

When analyzing an image, create a friendly process:

### Step 1

📸 Image received

### Step 2

🔍 Analyzing visual symptoms

### Step 3

🌦️ Checking environmental conditions

### Step 4

🌱 Evaluating crop risk

### Step 5

📋 Preparing recommendation

Then show the result.

---

# 📈 VISUALIZATION

Use simple visualizations:

* Health score ring

* Risk meter

* Health timeline

* Weather cards

* Rain probability

* Risk trend

* Field hotspot map

* Activity timeline

Avoid overly complicated graphs.

---

# 🔔 ALERT PRIORITY SYSTEM

Use clear levels:

🟢 INFORMATION

🟡 ATTENTION

🟠 WARNING

🔴 URGENT

Each alert must explain:

**What happened → Why it matters → What to do**

---

# ♿ ACCESSIBILITY

Make the application accessible to users with limited literacy and older farmers.

Use:

* Icons + text

* Large fonts

* Strong contrast

* Voice interaction

* Read-aloud capability

* Simple sentences

* Minimal technical vocabulary

* Consistent button placement

---

# 🛡️ PRIVACY

Clearly communicate that:

* Farmer data is private

* Photos are used for crop analysis

* Location is used for relevant weather/agricultural recommendations

* Farmers control their farm information

Add appropriate privacy settings.

---

# 🏆 HACKATHON PRESENTATION MODE

Create the product so it looks impressive during a hackathon demonstration.

The demo flow should be:

### 1.

Farmer uploads diseased leaf photo.

### 2.

AI analyzes the image.

### 3.

Application identifies possible issue.

### 4.

Weather data is considered.

### 5.

Crop Risk Score is calculated.

### 6.

Application recommends what to do now.

### 7.

Smart Irrigation Advisor gives recommendation.

### 8.

Safe Spray Window is calculated.

### 9.

Farmer receives an extreme-weather warning.

### 10.

Farmer saves the diagnosis.

### 11.

Health Timeline updates.

### 12.

If AI confidence is low, Expert Escalation appears.

This should demonstrate that the application is not just an image-disease classifier.

It is a **complete decision-support system for farmers.**

---

# 💻 TECHNICAL EXPECTATIONS

Build the application with a clean, scalable structure.

Use modern frontend technologies appropriate for a production-quality web application.

Prioritize:

* Responsive UI

* Component-based architecture

* Reusable components

* Clean state management

* Form validation

* Loading states

* Empty states

* Error states

* API-ready architecture

* Accessibility

* Performance

* Mobile responsiveness

Use realistic sample data for the prototype.

Create reusable components for:

* Crop cards

* Weather cards

* Risk meters

* Alert cards

* Timeline

* Diagnosis results

* Recommendation cards

* Farm activity

* Field map

* Expert consultation

* Voice assistant

---

# 🎯 FINAL PRODUCT GOAL

The final application should NOT feel like a collection of unrelated features.

Everything should connect into one intelligent farming workflow:

**FIELD → PHOTO/VOICE → AI ANALYSIS → WEATHER → RISK → ACTION → MONITORING → EXPERT SUPPORT**

The core experience should answer one question:

# 🌱 "What should the farmer do next?"

Make the application:

**Simple enough for a farmer to use in seconds, intelligent enough to provide meaningful decision support, trustworthy enough to clearly communicate uncertainty, and visually polished enough to stand out in a hackathon.**

Use **Pale Green + Sage + White + Light Gray + Charcoal** as the primary visual identity.

Create a polished, production-style interface rather than a basic prototype. Add an Emergency Crop Alert that detects combinations of severe disease and dangerous weather and clearly displays “What to do now”, “What not to do” and “When to check again”.

Add Expert Escalation when AI confidence is low, the image is unclear or the condition is severe; show “AI confidence is low — expert verification recommended” and allow farmers to submit the photo, location and AI analysis to an agricultural expert.

Add a unique “What Should I Do Today?” feature that converts all available information into a simple daily checklist such as “Skip irrigation”, “Inspect lower leaves”, “Do not spray today” and “Improve drainage”.

Add a What-If Farm Simulator allowing farmers to ask questions such as “What if I irrigate today?”, “What if I spray tomorrow?” or “What if heavy rain comes tonight?” and show simple predicted risks and recommended actions.

Add a strong AI Safety & Trust Layer that clearly distinguishes AI predictions, verified expert advice, weather data and farmer-provided information; show confidence levels and always remind farmers to follow product labels and local agricultural guidance for chemical treatments. create me a website for that and please add a good pictues of a leaves and crops

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d411720d-21e8-4399-89a6-22aa7931247f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
