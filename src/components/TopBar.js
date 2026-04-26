import BRAND from "../constants/brand";
import navItems from "../constants/navItems";

const Topbar = ({ active, mobileOpen, setMobileOpen }) => {
  const pageLabel = navItems.find((n) => n.id === active)?.label || "";

  return (
    <header style={{
      height: 64,
      background: BRAND.white,
      borderBottom: `1px solid ${BRAND.border}`,
      display: "flex", alignItems: "center",
      padding: "0 28px", gap: 16,
      boxShadow: "0 1px 4px rgba(26,42,74,0.06)",
      position: "sticky", top: 0, zIndex: 30, flexShrink: 0,
    }}>
      {/* Hamburger — mobile only */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: window.innerWidth <= 768 ? "flex" : "none",
          background: "none", border: "none", cursor: "pointer",
          color: BRAND.primary, padding: 4,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>

      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 20, color: BRAND.primary, lineHeight: 1.2 }}>
          {pageLabel}
        </span>
        <span style={{ fontSize: 12, color: BRAND.textMuted }}>XYZ Retail · Bangalore Outlets</span>
      </div>

      {/* Live badge */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        background: "#E8F5E9", borderRadius: 20, padding: "5px 12px",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: BRAND.success, display: "inline-block",
          animation: "pulse 2s infinite",
        }} />
        <span style={{ fontSize: 12, fontWeight: 600, color: BRAND.success }}>Live Data</span>
      </div>
    </header>
  );
};

export default Topbar;