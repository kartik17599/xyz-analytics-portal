import BRAND from "../constants/brand";
import navItems from "../constants/navItems";
import XYZLogo from "../components/XYZLogo";

const kpis = [
  { label: "Outlets",      value: "10",      unit: "across Bangalore" },
  { label: "Dashboards",   value: "2",       unit: "interactive views" },
  { label: "Data Sources", value: "2",       unit: "Sales & Quality" },
  { label: "Granularity",  value: "Monthly", unit: "time series" },
];

const cards = [
  { id: "sales",   label: "Sales Dashboard",  desc: "Revenue, outlet comparisons & monthly growth trends",  color: BRAND.primary },
  { id: "quality", label: "Quality Dashboard", desc: "Defect rates, operational scores & outlet benchmarks", color: "#C8992A" },
  { id: "about",   label: "About this Portal", desc: "Data sources, assumptions & design decisions",         color: "#27AE60" },
];

const HomePage = ({ setActive }) => (
  <div style={{ padding: "36px 32px", maxWidth: 1100, margin: "0 auto" }}>

    {/* Hero */}
    <div className="fade-up stagger-1" style={{
      background: `linear-gradient(120deg, ${BRAND.primary} 0%, #243B6E 100%)`,
      borderRadius: 20, padding: "48px 52px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 32, marginBottom: 36, overflow: "hidden", position: "relative",
    }}>
      <div style={{ position: "absolute", right: -40, top: -40, width: 260, height: 260, borderRadius: "50%", background: "rgba(200,153,42,0.08)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 80, bottom: -60, width: 180, height: 180, borderRadius: "50%", background: "rgba(200,153,42,0.05)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: BRAND.secondary, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 12 }}>
          Analytics Portal · 2025
        </div>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 3.5vw, 44px)", color: BRAND.white, lineHeight: 1.15, marginBottom: 16 }}>
          Welcome to XYZ<br />Retail Analytics
        </h1>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", maxWidth: 440, lineHeight: 1.7, marginBottom: 28 }}>
          A unified analytics portal for XYZ's 10 Bangalore outlets. Explore live Tableau dashboards for sales performance and quality metrics — all in one branded interface.
        </p>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={() => setActive("sales")} style={{
            background: BRAND.secondary, color: BRAND.primary, border: "none",
            borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 700,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          }}>
            View Sales →
          </button>
          <button onClick={() => setActive("quality")} style={{
            background: "rgba(255,255,255,0.1)", color: BRAND.white,
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600,
            cursor: "pointer", fontFamily: "'DM Sans', sans-serif",
          }}>
            View Quality
          </button>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 1, flexShrink: 0 }}>
        <XYZLogo size={80} showText={false} />
      </div>
    </div>

    {/* KPI Strip */}
    <div className="fade-up stagger-2" style={{
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, marginBottom: 36,
    }}>
      {kpis.map((k, i) => (
        <div key={i} style={{
          background: BRAND.white, borderRadius: 14, padding: "20px 22px",
          border: `1px solid ${BRAND.border}`, boxShadow: "0 2px 8px rgba(26,42,74,0.05)",
        }}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: BRAND.primary, lineHeight: 1 }}>
            {k.value}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: BRAND.text, marginTop: 6 }}>{k.label}</div>
          <div style={{ fontSize: 12, color: BRAND.textMuted, marginTop: 2 }}>{k.unit}</div>
        </div>
      ))}
    </div>

    {/* Nav Cards */}
    <h2 className="fade-up stagger-3" style={{ fontFamily: "'DM Serif Display', serif", fontSize: 24, color: BRAND.primary, marginBottom: 16 }}>
      Explore the Portal
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
      {cards.map((c, i) => (
        <button
          key={c.id}
          onClick={() => setActive(c.id)}
          className={`fade-up stagger-${i + 3}`}
          style={{
            background: BRAND.white, border: `1px solid ${BRAND.border}`,
            borderRadius: 16, padding: "28px 26px", textAlign: "left",
            cursor: "pointer", boxShadow: "0 2px 8px rgba(26,42,74,0.05)",
            transition: "transform 0.2s, box-shadow 0.2s",
            fontFamily: "'DM Sans', sans-serif",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(26,42,74,0.12)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)";   e.currentTarget.style.boxShadow = "0 2px 8px rgba(26,42,74,0.05)"; }}
        >
          <div style={{ width: 42, height: 42, borderRadius: 10, background: c.color, marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: BRAND.white, fontSize: 18 }}>
              {navItems.find(n => n.id === c.id)?.icon}
            </span>
          </div>
          <div style={{ fontSize: 16, fontWeight: 700, color: BRAND.text, marginBottom: 8 }}>{c.label}</div>
          <div style={{ fontSize: 13, color: BRAND.textMuted, lineHeight: 1.6 }}>{c.desc}</div>
          <div style={{ marginTop: 16, fontSize: 13, fontWeight: 600, color: c.color }}>Open →</div>
        </button>
      ))}
    </div>
  </div>
);

export default HomePage;