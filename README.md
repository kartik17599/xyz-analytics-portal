<div align="center">

<!-- HEADER BANNER -->
<img src="public/xyz_Logo.png" alt="XYZ Logo" width="120" />

# XYZ Analytics Portal

**A dual-dashboard analytics platform built with Tableau Public + React**
*Transforming raw retail data into actionable intelligence — across 10 Bangalore outlets, 12 months, 2 dimensions.*

[![Live App](https://img.shields.io/badge/🌐_Live_App-Vercel-black?style=for-the-badge)](YOUR_VERCEL_URL)
[![Sales Dashboard](https://img.shields.io/badge/📊_Sales_Dashboard-Tableau_Public-E97627?style=for-the-badge)](YOUR_TABLEAU_SALES_URL)
[![Quality Dashboard](https://img.shields.io/badge/✅_Quality_Dashboard-Tableau_Public-E97627?style=for-the-badge)](YOUR_TABLEAU_QUALITY_URL)
[![GitHub](https://img.shields.io/badge/💻_Source_Code-GitHub-181717?style=for-the-badge)](YOUR_GITHUB_URL)

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Live Links](#-live-links)
- [What We Built](#-what-we-built)
- [How We Achieved It — Step by Step](#-how-we-achieved-it--step-by-step)
- [Data Model](#-data-model)
- [Calculated Fields](#-calculated-fields)
- [Dashboard Design](#-dashboard-design)
- [React App Architecture](#-react-app-architecture)
- [Brand System](#-brand-system)
- [How to Run Locally](#-how-to-run-locally)
- [Deployment](#-deployment)
- [Assumptions & Design Decisions](#-assumptions--design-decisions)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)

---

## 🎯 Overview

XYZ Analytics Portal is a full-stack business intelligence solution built for the XYZ interview case study. The challenge: take two raw Excel datasets (Sales + Quality) covering **10 Bangalore outlets across 12 months of 2024**, and turn them into a polished, interactive analytics platform that any business stakeholder can use — without needing Tableau Desktop installed.

The solution delivers:

- **2 interactive Tableau dashboards** embedded inside a custom-branded React web app
- **10 Tableau sheets** built from scratch with calculated fields, dual axes, heatmaps, and scatter plots
- **17 calculated fields** (8 Sales + 9 Quality) powering all KPIs and chart logic
- **Full cross-filtering** via Tableau dashboard actions — click one chart, everything updates
- **XYZ brand identity** applied consistently across both Tableau and React layers

---

## 🔗 Live Links

| Resource | URL |
|---|---|
| 🌐 React Web App (Vercel) | `https://xyz-analytics-portal-silk.vercel.app/` |
| 📊 Sales Dashboard (Tableau Public) | `https://public.tableau.com/views/XYZSalesDashboard2024/Dashboard1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link` |
| ✅ Quality Dashboard (Tableau Public) | `https://public.tableau.com/views/XYZQualityDashboard2024/XYZQualityDashboard2024?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link` |
| 💾 Tableau Packaged Workbook (.twbx) | `/tableau/XYZ_Analytics_Portal.twbx` |
| 💻 GitHub Repository | `https://github.com/kartik17599/xyz-analytics-portal` |

---

## 🏗 What We Built

### Tableau Layer — 10 Sheets across 2 Dashboards

**Sales Dashboard (5 Sheets)**

| Sheet | Chart Type | Key Insight |
|---|---|---|
| KPI Tiles (×5) | Scorecards | Total Revenue, Transactions, Avg Bill, Net Profit, Satisfaction |
| Outlet Revenue Bar | Horizontal Bar | Above/below average revenue per outlet |
| Monthly Revenue Trend | Dual Axis Line + Bar | Revenue trajectory + transaction volume overlay |
| Footfall vs Conversion Scatter | Scatter Plot | Outlet positioning by traffic efficiency |
| Cost vs Profit Stacked Bar | Stacked Bar | Revenue split: Operating Cost vs Net Profit |

**Quality Dashboard (5 Sheets)**

| Sheet | Chart Type | Key Insight |
|---|---|---|
| Quality KPI Tiles (×5) | Scorecards | Defect Rate, Return Rate, Complaints, Fulfillment, Cleanliness |
| Quality Heatmap | Matrix Heatmap | All 10 outlets × 6 quality metrics — at a glance |
| Defect & Return Trend | Dual Axis Line | Month-over-month quality degradation signals |
| Complaints & Resolution | Bar + Circle | Volume vs speed of complaint handling per outlet |
| Composite Quality Score | Ranked Bar | Overall quality ranking with 4.0 target reference line |

### React Layer — 4-Page Web App

| Page | Contents |
|---|---|
| Home | Hero section, KPI summary cards, portal navigation |
| Sales Analytics | Embedded Sales Tableau Dashboard (full width, 1200×860px) |
| Quality Analytics | Embedded Quality Tableau Dashboard (full width, 1200×860px) |
| About | Project overview, methodology, assumptions |

---

## 🚀 How We Achieved It — Step by Step

### Phase 1 — Data Exploration (Day 1)

Before touching Tableau, we opened both Excel files to manually audit them:

- Confirmed **120 rows × 15 columns** in each file (10 outlets × 12 months)
- Verified all column names matched exactly (critical for calculated field references)
- Confirmed join keys were consistent: `Outlet_ID`, `Month`, `Year` matched across both files
- Noted value ranges: Revenue ₹33L–₹121L/outlet/month, Satisfaction scores 1–5
- Extracted the **5 XYZ brand hex codes** from `xyz_Colours.png` and saved them for Tableau + CSS

### Phase 2 — Tableau Data Modelling (Day 1–2)

We connected both data sources using Tableau's **Relationship model** (not a Join), setting three relationship clauses:

```
xyz_Sales.Outlet_ID  =  xyz_Quality.Outlet_ID
xyz_Sales.Month      =  xyz_Quality.Month
xyz_Sales.Year       =  xyz_Quality.Year
```

> **Why Relationships instead of Joins?** Relationships preserve each table's native granularity. Joins can inflate row counts when aggregating across both tables simultaneously — Relationships avoid this entirely.

We then created **17 Calculated Fields** (full list below) before building a single chart.

### Phase 3 — Sales Dashboard (Day 2–3)

Built 5 sheets in sequence: KPI tiles first (simple, builds confidence), then progressively complex charts. Key decisions:

- **Color-coded bar chart**: `Revenue Performance` calculated field classifies each outlet as "Above Average" (Teal) or "Below Average" (Pink) using `WINDOW_AVG()`
- **Dual axis trend**: Bars (transaction volume, 50% opacity Amethyst) sit behind lines (revenue by outlet) — keeps both readable without a cluttered legend
- **Scatter plot quadrants**: Two median reference lines (X and Y axes) create natural quadrants — high footfall + high conversion = star outlets

### Phase 4 — Quality Dashboard (Day 3–4)

The heatmap was the most complex element: we used **Measure Names / Measure Values** to project 6 quality metrics as columns and 10 outlets as rows. Color direction is reversed for "bad is high" metrics (Defect Rate, Return Rate) so red always means bad.

The `Composite Quality Score` field normalizes 4 disparate metrics to a common 0–5 scale before averaging — making the ranking chart meaningful rather than arbitrary.

### Phase 5 — Publish to Tableau Public (Day 4)

Both dashboards published to a single Tableau Public workbook (`XYZ_Analytics_Portal`). We:
- Disabled "Show Sheets as Tabs" (cleaner embed)
- Extracted `?:embed=y&:display_count=n&:showVizHome=no` embed URLs for React
- Verified cross-filtering and filter dropdowns work in the public (unauthenticated) version

### Phase 6–8 — React App (Day 4–6)

Bootstrapped with Create React App, added React Router v6 for navigation. Architecture is intentionally simple — the app's job is to **present** Tableau beautifully, not replicate it.

Each Tableau page uses a responsive `<iframe>` with a loading spinner (shows while Tableau initializes) and graceful fallback links if the embed fails.

### Phase 9 — Deploy & Submit (Day 7)

- Production build: `npm run build`
- One-command deploy: `npx vercel --prod`
- Pushed all source to GitHub with the `.twbx` file under `/tableau`

---

## 🗄 Data Model

```
xyz_Sales.xlsx                    xyz_Quality.xlsx
──────────────────────            ──────────────────────────────
Outlet_ID          ◄──┐     ┌──► Outlet_ID
Outlet_Name            │     │    Outlet_Name
Location               │     │    Location
Month              ◄───┼─────┼──► Month
Year               ◄───┘     └──► Year
Monthly_Revenue_INR           Return_Rate_pct
Transactions                  Defect_Rate_pct
Avg_Bill_Value_INR            Customer_Complaints_Count
Footfall                      Order_Fulfillment_Accuracy_pct
Conversion_Rate_pct           On_Shelf_Availability_pct
Gross_Margin_pct              Stock_Accuracy_pct
Operating_Cost_INR            Audit_Compliance_Score
Net_Profit_INR                Avg_Issue_Resolution_Time_hrs
Inventory_Turnover            Supplier_Delivery_Compliance_pct
Customer_Satisfaction_Score   Store_Cleanliness_Score
```

**Relationship:** Many-to-many on `Outlet_ID + Month + Year` (Tableau flexible relationship model)

---

## 🧮 Calculated Fields

### Sales Fields (8)

| Field Name | Formula | Purpose |
|---|---|---|
| Total Revenue | `SUM([Monthly_Revenue_INR])` | Primary revenue KPI |
| Total Net Profit | `SUM([Net_Profit_INR])` | Profitability KPI |
| Profit Margin % | `SUM([Net_Profit_INR]) / SUM([Monthly_Revenue_INR])` | Margin ratio |
| Avg Bill Value | `AVG([Avg_Bill_Value_INR])` | Transaction size KPI |
| Avg Conversion Rate | `AVG([Conversion_Rate_pct])` | Sales efficiency KPI |
| Avg Customer Satisfaction | `AVG([Customer_Satisfaction_Score])` | CSAT KPI |
| Revenue vs Average | `SUM([Monthly_Revenue_INR]) - WINDOW_AVG(SUM([Monthly_Revenue_INR]))` | Above/below avg delta |
| Revenue Performance | `IF SUM(...) > WINDOW_AVG(...) THEN "Above Average" ELSE "Below Average" END` | Color classification |

### Quality Fields (9)

| Field Name | Formula | Purpose |
|---|---|---|
| Avg Defect Rate % | `AVG([Defect_Rate_pct])` | Defect KPI |
| Avg Return Rate % | `AVG([Return_Rate_pct])` | Returns KPI |
| Total Customer Complaints | `SUM([Customer_Complaints_Count])` | Volume KPI |
| Avg Fulfillment Accuracy % | `AVG([Order_Fulfillment_Accuracy_pct])` | Order accuracy KPI |
| Avg Cleanliness Score | `AVG([Store_Cleanliness_Score])` | Store standards KPI |
| Composite Quality Score | `(AVG(Audit) + AVG(Cleanliness) + AVG(Fulfillment)/25 + AVG(StockAccuracy)/25) / 4` | Unified quality index |
| Quality Status | IF score ≥ 4.0 → "✓ On Target", ≥ 3.5 → "⚠ Needs Attention", else → "✗ Critical" | Color classification |
| Complaint Intensity | IF complaints > 15 → "High", > 8 → "Medium", else → "Low" | Complaint severity tier |
| Avg Resolution Time (hrs) | `AVG([Avg_Issue_Resolution_Time_hrs])` | Response speed KPI |

> **Composite Quality Score normalization:** Audit Compliance and Store Cleanliness are already on a 0–5 scale. Order Fulfillment Accuracy and Stock Accuracy are percentages (~75–100%). Dividing by 25 maps the percentage range (0–100%) to the same 0–4 scale, making the average meaningful.

---

## 🎨 Dashboard Design

### Layout — Sales Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│  [XYZ Logo]   XYZ Sales Dashboard 2024                   Navy   │
├──────────┬──────────┬──────────┬──────────┬──────────────────── │
│ ₹82.4M   │  48,320  │  ₹1,842  │  ₹18.6M  │  ★ 4.32           │
│ Revenue  │ Trans.   │ Avg Bill │  Profit  │  Satisfaction       │
├──────────────────────────────┬──────────────────────────────────┤
│   Outlet Revenue Bar Chart   │   Monthly Revenue Trend          │
│   (sorted, color-coded,      │   (dual axis: lines + bars)      │
│    avg reference line)       │                                  │
├──────────────────────────────┼──────────────────────────────────┤
│   Footfall vs Conversion     │   Cost vs Profit Stacked Bar     │
│   Scatter (4 quadrants)      │   (2 colors, margin label)       │
└──────────────────────────────┴──────────────────────────────────┘
```

### Layout — Quality Dashboard

```
┌─────────────────────────────────────────────────────────────────┐
│  [XYZ Logo]   XYZ Quality Dashboard 2024                  Navy  │
├──────────┬──────────┬──────────┬──────────┬────────────────────┤
│  1.84%   │  2.31%   │  1,248   │  96.8%   │  4.21              │
│  Defect  │  Return  │ Complain │ Fulfillmt │  Cleanliness       │
├─────────────────────────────────────────────────────────────────┤
│         Quality Heatmap — 10 Outlets × 6 Metrics               │
│         (Red → Green color scale per metric direction)          │
├──────────────────────────────┬──────────────────────────────────┤
│  Defect & Return Rate Trend  │  Complaints & Resolution Time    │
│  (dual axis lines, monthly)  │  (color-tiered bars + dots)      │
├──────────────────────────────┴──────────────────────────────────┤
│        Composite Quality Score Ranking (target line @ 4.0)      │
└─────────────────────────────────────────────────────────────────┘
```

---

## ⚛️ React App Architecture

```
src/
├── components/
│   ├── Sidebar.jsx          # Fixed 240px nav with XYZ logo + route links
│   ├── TableauEmbed.jsx     # Reusable iframe wrapper with loading state
│   └── KpiCard.jsx          # Branded summary card for Home page
├── pages/
│   ├── Home.jsx             # Hero + 4 summary cards + portal CTA
│   ├── Sales.jsx            # TableauEmbed with Sales dashboard URL
│   ├── Quality.jsx          # TableauEmbed with Quality dashboard URL
│   └── About.jsx            # Methodology, assumptions, team
├── styles/
│   └── variables.css        # CSS custom properties — XYZ brand colors
├── App.jsx                  # Router + layout shell
└── index.js                 # Entry point
```

### Key Component: TableauEmbed

```jsx
// Reusable across Sales and Quality pages
// Shows XYZ-branded spinner while Tableau loads
// Fallback link if embed is blocked

<TableauEmbed
  url={SALES_DASHBOARD_URL}
  title="XYZ Sales Dashboard"
  height={860}
/>
```

---

## 🎨 Brand System

All colors sourced from `xyz_Colours.png` and applied as CSS variables across React and manually in Tableau's color picker:

| Token | Hex | Usage |
|---|---|---|
| `--xyz-teal` | `#18837E` | Primary brand, positive KPIs, active nav, above-average |
| `--xyz-pink` | `#DB3069` | Alerts, below-average, high complaint volume, critical quality |
| `--xyz-navy` | `#004975` | Headers, sidebar background, deep contexts |
| `--xyz-amethyst` | `#9882AC` | Secondary data series, medium severity, soft accents |
| `--xyz-smoke` | `#F2F2F2` | Dashboard backgrounds, card fills, page canvas |

**Typography:** DM Sans (Google Fonts) in React · Tableau Book in Tableau Desktop
**Logo:** `xyz_Logo.png` appears in Tableau dashboard headers and React sidebar

---

## 💻 How to Run Locally

```bash
# 1. Clone the repository
git clone YOUR_GITHUB_URL
cd xyz-analytics-portal

# 2. Install dependencies
npm install

# 3. Start development server
npm start
# → Opens at http://localhost:3000
```

> **Tableau dashboards:** The embedded dashboards load from Tableau Public — no Tableau Desktop needed to view the app. To edit the dashboards, open `/tableau/XYZ_Analytics_Portal.twbx` in Tableau Desktop.

---

## 🚀 Deployment

The app is deployed on **Vercel** (zero-config, automatic HTTPS):

```bash
# Build for production
npm run build

# Deploy to Vercel (one command)
npx vercel --prod
```

The `/build` folder can also be dropped onto [netlify.com/drop](https://netlify.com/drop) for instant Netlify hosting.

---

## 📐 Assumptions & Design Decisions

| Area | Decision | Reason |
|---|---|---|
| **Data join** | Tableau Relationship (not Join) on 3 keys | Prevents row duplication when aggregating cross-table |
| **Currency** | All values in INR, no conversion | Dataset is Bangalore-specific; INR is appropriate |
| **Scope** | 2024 full year, all 10 outlets | Dataset covers exactly this range — no filtering needed |
| **Quality target** | Composite Quality Score ≥ 4.0 = On Target | Retail industry standard for a 0–5 scale audit score |
| **Defect threshold** | > 2% = concern | Common retail defect rate benchmark |
| **Score normalization** | Percentage fields ÷ 25 to match 0–5 scale | 100% maps to 4.0 — comparable to a 4/5 audit score |
| **Complaint thresholds** | High > 15, Medium > 8, Low ≤ 8 | Relative to dataset range (max ~22/outlet/month) |
| **Data quality** | Assumed clean — no nulls or duplicates | Confirmed by manual inspection of both Excel files |
| **Month ordering** | Manual sort: Jan → Dec | Tableau alphabetizes by default; manual order required |
| **Embed approach** | `iframe` with `?:embed=y` params | Simplest reliable method for Tableau Public embeds |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Data Visualization | Tableau Desktop / Tableau Public |
| Frontend Framework | React 18 (Create React App) |
| Routing | React Router v6 |
| Typography | DM Sans via Google Fonts |
| Hosting | Vercel |
| Version Control | Git / GitHub |
| Data Sources | Microsoft Excel (.xlsx) |

---

## 📁 Project Structure

```
xyz-analytics-portal/
├── public/
│   ├── index.html
│   └── xyz_Logo.png          ← Brand logo
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── TableauEmbed.jsx
│   │   └── KpiCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Sales.jsx
│   │   ├── Quality.jsx
│   │   └── About.jsx
│   ├── styles/
│   │   └── variables.css
│   ├── App.jsx
│   └── index.js
├── tableau/
│   └── XYZ_Analytics_Portal.twbx   ← Packaged Tableau workbook
├── package.json
└── README.md
```

---

<div align="center">

*10 outlets · 12 months · 30 columns · 17 calculated fields · 10 Tableau sheets · 1 React app*

</div>
