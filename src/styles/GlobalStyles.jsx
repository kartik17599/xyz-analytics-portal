import BRAND from "../constants/brand";

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --primary:   ${BRAND.primary};
      --secondary: ${BRAND.secondary};
      --surface:   ${BRAND.surface};
      --dark:      ${BRAND.dark};
      --text:      ${BRAND.text};
      --muted:     ${BRAND.textMuted};
      --white:     ${BRAND.white};
      --border:    ${BRAND.border};
      --sidebar-w: 260px;
      --sidebar-collapsed: 72px;
    }

    html, body, #root { height: 100%; font-family: 'DM Sans', sans-serif; background: var(--surface); }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 3px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.5; }
    }

    .fade-up  { animation: fadeUp 0.5s ease forwards; }
    .fade-in  { animation: fadeIn 0.4s ease forwards; }

    .stagger-1 { animation-delay: 0.05s; opacity: 0; }
    .stagger-2 { animation-delay: 0.12s; opacity: 0; }
    .stagger-3 { animation-delay: 0.19s; opacity: 0; }
    .stagger-4 { animation-delay: 0.26s; opacity: 0; }
    .stagger-5 { animation-delay: 0.33s; opacity: 0; }

    .sidebar-overlay {
      display: none;
      position: fixed; inset: 0;
      background: rgba(13,23,38,0.55);
      backdrop-filter: blur(2px);
      z-index: 40;
    }
    .sidebar-overlay.active { display: block; }

    @media (max-width: 768px) {
      :root { --sidebar-w: 260px; }
    }
  `}</style>
);

export default GlobalStyle;