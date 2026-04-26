import { useState, useRef } from "react";
import BRAND from "../constants/brand";

const tips = [
  { icon: "🔍", text: "Use filters inside the dashboard to drill into outlets or time periods" },
  { icon: "📤", text: "Click 'Open in Tableau Public' to view full-screen or download" },
  { icon: "🔄", text: "Dashboard data reflects the latest published version" },
];

const TableauPage = ({ title, url, description }) => {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef();
  const isPlaceholder = url.includes("YOUR_");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", padding: "16px 20px" }}>

      {/* Header */}
      <div className="fade-up stagger-1" style={{ marginBottom: 16, display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: BRAND.secondary, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6 }}>
            Interactive Dashboard
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 28, color: BRAND.primary }}>{title}</h1>
          <p style={{ fontSize: 14, color: BRAND.textMuted, marginTop: 6 }}>{description}</p>
        </div>
        {!isPlaceholder && (
          <a href={url} target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: 6,
            background: BRAND.primary, color: BRAND.white,
            borderRadius: 9, padding: "10px 18px",
            textDecoration: "none", fontSize: 13, fontWeight: 600,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Open in Tableau Public
          </a>
        )}
      </div>

      {/* Embed Container */}
      <div className="fade-up stagger-2" style={{
        background: BRAND.white, borderRadius: 18,
        border: `1px solid ${BRAND.border}`,
        boxShadow: "0 4px 24px rgba(26,42,74,0.07)",
        overflow: "hidden", flex: 1, display: "flex", flexDirection: "column",
      }}>
        {isPlaceholder ? (
          <div style={{
            flex: 1, display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: `linear-gradient(135deg, ${BRAND.surface} 0%, #EBF0FA 100%)`,
            gap: 20, padding: 40, textAlign: "center",
          }}>
            <div style={{ width: 72, height: 72, borderRadius: 18, background: BRAND.primary, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={BRAND.secondary} strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: BRAND.primary, marginBottom: 10 }}>
                Tableau Dashboard Placeholder
              </div>
              <p style={{ fontSize: 14, color: BRAND.textMuted, maxWidth: 420, lineHeight: 1.7 }}>
                Publish your <strong>{title}</strong> to Tableau Public and replace the URL constant in <code>src/constants/tableauUrls.js</code> to embed it here.
              </p>
            </div>
            <div style={{ background: BRAND.white, borderRadius: 12, padding: "16px 24px", border: `1px solid ${BRAND.border}`, fontFamily: "monospace", fontSize: 12, color: BRAND.text, maxWidth: 500, wordBreak: "break-all" }}>
              {`export const TABLEAU_${title.toUpperCase().split(" ")[0]}_URL = "https://public.tableau.com/views/YOUR_DASHBOARD";`}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              {["Filters work", "Interactions live", "Optimized for embed"].map(f => (
                <span key={f} style={{ background: "#E8F5E9", color: BRAND.success, borderRadius: 20, padding: "4px 14px", fontSize: 12, fontWeight: 600 }}>✓ {f}</span>
              ))}
            </div>
          </div>
        ) : (
          <div style={{ position: "relative", width: "100%", flex: 1 }}>
            {!loaded && (
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: BRAND.surface }}>
                <div style={{ textAlign: "center", color: BRAND.textMuted, animation: "pulse 1.5s infinite", fontSize: 14 }}>
                  Loading dashboard…
                </div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={`${url}?:embed=yes&:showVizHome=no&:tabs=no&:toolbar=yes&:device=desktop`}
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              onLoad={() => setLoaded(true)}
              title={title}
              allowFullScreen
            />
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="fade-up stagger-3" style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap", flexShrink: 0 }}>
        {tips.map((tip, i) => (
          <div key={i} style={{
            background: BRAND.white, border: `1px solid ${BRAND.border}`,
            borderRadius: 10, padding: "10px 16px",
            fontSize: 13, color: BRAND.textMuted,
            display: "flex", gap: 8, alignItems: "center",
          }}>
            <span>{tip.icon}</span> {tip.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableauPage;