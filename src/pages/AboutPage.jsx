import BRAND from "../constants/brand";
import XYZLogo from "../components/XYZLogo";

const sections = [
  {
    icon: "📊",
    title: "Project Overview",
    content: "This analytics portal was built for XYZ Retail Chain, operating 10 outlets across Bangalore. The solution combines Tableau Public dashboards with a React web application to provide leadership with a unified, branded analytics experience.",
  },
  {
    icon: "🗄️",
    title: "Data Sources",
    content: "Two primary datasets were used: xyz_Sales (transactional sales data per outlet) and xyz_Quality (operational quality metrics per outlet). Both datasets were modeled in Tableau with calculated fields for KPI derivation.",
  },
  {
    icon: "📝",
    title: "Assumptions Made",
    content: "Data was assumed to be clean for initial modeling. Calculated KPIs include Total Sales, Average Sales per Outlet, Monthly Growth Rate, Defect Rate, and Quality Score. Outlet identifiers were used as dimensions for comparative analysis. Time dimension was aggregated at monthly granularity.",
  },
  {
    icon: "🎨",
    title: "Design Decisions",
    content: "Brand colors from xyz_Colours were applied consistently across both Tableau dashboards and this web application. DM Serif Display and DM Sans were chosen as the typography pair. The sidebar layout was chosen for scalability as the portal grows.",
  },
  {
    icon: "⚙️",
    title: "Tech Stack",
    content: "React (functional components + hooks) for the web application. Tableau Public for dashboard hosting and embedding. Tableau embed parameters (embed=yes, showVizHome=no) ensure clean, distraction-free integration.",
  },
  {
    icon: "💻",
    title: "How to Run Locally",
    content: "1. Clone the repository  2. Run `npm install`  3. Run `npm start`  4. Replace TABLEAU_SALES_URL and TABLEAU_QUALITY_URL in src/constants/tableauUrls.js  5. App runs at localhost:3000",
  },
];

const AboutPage = () => (
  <div style={{ padding: "28px 32px", maxWidth: 900, margin: "0 auto" }}>

    <div className="fade-up stagger-1" style={{ marginBottom: 32 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: BRAND.secondary, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
        Documentation
      </div>
      <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 32, color: BRAND.primary }}>
        About this Portal
      </h1>
      <p style={{ fontSize: 15, color: BRAND.textMuted, marginTop: 8, lineHeight: 1.7 }}>
        Design rationale, data sources, assumptions, and setup instructions.
      </p>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: 18 }}>
      {sections.map((s, i) => (
        <div key={i} className={`fade-up stagger-${Math.min(i + 1, 5)}`} style={{
          background: BRAND.white, borderRadius: 16, padding: "26px 28px",
          border: `1px solid ${BRAND.border}`, boxShadow: "0 2px 8px rgba(26,42,74,0.04)",
        }}>
          <div style={{ fontSize: 24, marginBottom: 12 }}>{s.icon}</div>
          <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 18, color: BRAND.primary, marginBottom: 10 }}>
            {s.title}
          </h3>
          <p style={{ fontSize: 13.5, color: BRAND.textMuted, lineHeight: 1.75 }}>{s.content}</p>
        </div>
      ))}
    </div>

    {/* Attribution */}
    <div className="fade-up stagger-5" style={{
      marginTop: 28,
      background: `linear-gradient(120deg, ${BRAND.primary}, #243B6E)`,
      borderRadius: 16, padding: "24px 28px",
      display: "flex", alignItems: "center", gap: 20,
    }}>
      <XYZLogo size={42} showText={true} />
      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
        Built as part of the XYZ Retail Analytics Interview Case Study.<br />
        Tableau + React · Bangalore Operations · 2025
      </div>
    </div>
  </div>
);

export default AboutPage;