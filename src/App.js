import { useState, useEffect } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Sidebar from "./components/SideBar";
import Topbar from "./components/TopBar";
import HomePage from "./pages/HomePage";
import TableauPage from "./pages/TableauPage";
import AboutPage from "./pages/AboutPage";
import { TABLEAU_SALES_URL, TABLEAU_QUALITY_URL } from "./constants/tableauUrls";

const App = () => {
  const [active,     setActive]     = useState("home");
  const [collapsed,  setCollapsed]  = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile,   setIsMobile]   = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderPage = () => {
    switch (active) {
      case "home":
        return <HomePage setActive={setActive} />;
      case "sales":
        return (
          <TableauPage
            title="Sales Dashboard"
            url={TABLEAU_SALES_URL}
            description="Outlet-wise sales performance, monthly trends, and KPI overview for all 10 XYZ locations."
          />
        );
      case "quality":
        return (
          <TableauPage
            title="Quality Dashboard"
            url={TABLEAU_QUALITY_URL}
            description="Quality scores, defect rates, and operational benchmarks across all Bangalore outlets."
          />
        );
      case "about":
        return <AboutPage />;
      default:
        return <HomePage setActive={setActive} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
        <Sidebar
          active={active}
          setActive={setActive}
          collapsed={isMobile ? false : collapsed}
          setCollapsed={setCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <Topbar
            active={active}
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
          <main style={{ flex: 1, overflow: "hidden" }}>
            {renderPage()}
          </main>
        </div>
      </div>
    </>
  );
};

export default App;