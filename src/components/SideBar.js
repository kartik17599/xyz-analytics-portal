import BRAND from "../constants/brand";
import navItems from "../constants/navItems";
import XYZLogo from "./XYZLogo";

const Sidebar = ({ active, setActive, collapsed, setCollapsed, mobileOpen, setMobileOpen }) => {
  const isMobile = window.innerWidth <= 768;

  const sidebarStyle = {
    position: isMobile ? "fixed" : "relative",
    top: 0, left: 0, bottom: 0,
    width: isMobile ? (mobileOpen ? "260px" : "0") : (collapsed ? "72px" : "260px"),
    minWidth: isMobile ? undefined : (collapsed ? "72px" : "260px"),
    background: `linear-gradient(160deg, ${BRAND.dark} 0%, ${BRAND.primary} 100%)`,
    display: "flex",
    flexDirection: "column",
    transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), min-width 0.3s",
    overflow: "hidden",
    zIndex: 50,
    flexShrink: 0,
    boxShadow: "4px 0 24px rgba(13,23,38,0.18)",
  };

  return (
    <>
      {isMobile && mobileOpen && (
        <div className="sidebar-overlay active" onClick={() => setMobileOpen(false)} />
      )}
      <aside style={sidebarStyle}>

        {/* Header */}
        <div style={{
          padding: "20px 14px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          borderBottom: `1px solid rgba(255,255,255,0.08)`,
          minWidth: 0,
          gap: 8,
        }}>
          <div style={{ flex: 1, minWidth: 0, overflow: "hidden", display: "flex", alignItems: "center" }}>
            <XYZLogo height={32} collapsed={collapsed} />
          </div>
          {!isMobile && (
            <button
              onClick={() => setCollapsed(!collapsed)}
              style={{
                background: "rgba(255,255,255,0.08)", border: "none", borderRadius: 6,
                color: BRAND.white, cursor: "pointer", padding: "6px 8px",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s", flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {collapsed
                  ? <polyline points="9 18 15 12 9 6" />
                  : <polyline points="15 18 9 12 15 6" />}
              </svg>
            </button>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "16px 10px", display: "flex", flexDirection: "column", gap: 4 }}>
          {!collapsed && (
            <div style={{
              fontSize: 10, color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.14em", textTransform: "uppercase",
              fontWeight: 600, padding: "0 8px 10px",
            }}>
              Navigation
            </div>
          )}
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActive(item.id); if (isMobile) setMobileOpen(false); }}
                title={collapsed ? item.label : undefined}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: collapsed ? "12px 16px" : "11px 14px",
                  justifyContent: collapsed ? "center" : "flex-start",
                  borderRadius: 10, border: "none", cursor: "pointer",
                  background: isActive ? "rgba(200,153,42,0.18)" : "transparent",
                  color: isActive ? BRAND.secondary : "rgba(255,255,255,0.65)",
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  transition: "all 0.2s",
                  borderLeft: isActive ? `3px solid ${BRAND.secondary}` : "3px solid transparent",
                  whiteSpace: "nowrap", overflow: "hidden",
                }}
              >
                <span style={{ flexShrink: 0, color: isActive ? BRAND.secondary : "rgba(255,255,255,0.5)" }}>
                  {item.icon}
                </span>
                {!collapsed && <span>{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div style={{
            padding: "16px",
            borderTop: `1px solid rgba(255,255,255,0.08)`,
            fontSize: 11, color: "rgba(255,255,255,0.3)", lineHeight: 1.6,
          }}>
            <div style={{ fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>XYZ Analytics Portal</div>
            <div>Bangalore · 10 Outlets</div>
            <div style={{ marginTop: 4, color: BRAND.secondary, opacity: 0.7 }}>v1.0 · 2025</div>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;