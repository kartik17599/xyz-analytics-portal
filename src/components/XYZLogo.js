import BRAND from "../constants/brand";

const XYZLogo = ({ size = 48, showText = true, collapsed = false }) => {
  // When collapsed, show only the Y icon (square with Y)
  // Otherwise show the full XYZ logo with text
  
  if (collapsed) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="96 4 105 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Y background square */}
        <rect x="96" y="4" width="105" height="96" fill={BRAND.secondary} />
        {/* Y — white letter on teal square */}
        <text x="99" y="88" fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900" fontSize="100" fill={BRAND.white}>Y</text>
      </svg>
    );
  }

  // Full logo when not collapsed
  const s = size;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg
        width={s * 3}
        height={s}
        viewBox="0 0 297 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* X — teal letter */}
        <text x="0" y="88" fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900" fontSize="100" fill={BRAND.secondary}>X</text>

        {/* Y background square */}
        <rect x="96" y="4" width="105" height="96" fill={BRAND.secondary} />
        {/* Y — white letter on teal square */}
        <text x="99" y="88" fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900" fontSize="100" fill={BRAND.white}>Y</text>

        {/* Z — teal letter */}
        <text x="204" y="88" fontFamily="Arial Black, Arial, sans-serif"
          fontWeight="900" fontSize="100" fill={BRAND.secondary}>Z</text>
      </svg>

      {showText && (
        <div>
          <div style={{ fontSize: 13, color: BRAND.white, fontWeight: 700, letterSpacing: "0.06em", lineHeight: 1.2 }}>
            XYZ Retail
          </div>
          <div style={{ fontSize: 10, color: BRAND.secondary, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
            Analytics
          </div>
        </div>
      )}
    </div>
  );
};

export default XYZLogo;