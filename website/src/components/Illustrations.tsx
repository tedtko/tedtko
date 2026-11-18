// Example drawing deliverables (illustrative SVGs).

// --- Technical drawings ----------------------------------------------------

const ink = "#1f3a5a";

export function FloorPlan() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Example proposed ground floor plan drawing">
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke="#dbe6ef" strokeWidth="0.6" />
        </pattern>
        <pattern id="hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="5" stroke={ink} strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#f7fafc" />
      <rect width="400" height="300" fill="url(#grid)" />
      {/* outer walls */}
      <g fill="url(#hatch)" stroke={ink} strokeWidth="1.5">
        <rect x="40" y="40" width="250" height="8" />
        <rect x="40" y="232" width="250" height="8" />
        <rect x="40" y="40" width="8" height="200" />
        <rect x="282" y="40" width="8" height="200" />
      </g>
      {/* new extension in green */}
      <g fill="#17643c" fillOpacity="0.35" stroke="#0f4a2b" strokeWidth="1.5">
        <rect x="290" y="40" width="70" height="8" />
        <rect x="290" y="232" width="70" height="8" />
        <rect x="352" y="48" width="8" height="184" />
      </g>
      {/* internal walls */}
      <g stroke={ink} strokeWidth="4">
        <line x1="48" y1="130" x2="150" y2="130" />
        <line x1="180" y1="130" x2="200" y2="130" />
        <line x1="200" y1="48" x2="200" y2="110" />
        <line x1="200" y1="150" x2="200" y2="232" />
        <line x1="110" y1="130" x2="110" y2="185" />
      </g>
      {/* door swings */}
      <g stroke={ink} strokeWidth="1" fill="none">
        <path d="M150 130 A30 30 0 0 1 180 160" />
        <line x1="150" y1="130" x2="150" y2="160" />
        <path d="M200 110 A40 40 0 0 1 240 150" strokeDasharray="0" />
        <line x1="200" y1="110" x2="200" y2="150" />
      </g>
      {/* glazing on extension */}
      <g stroke="#0f4a2b" strokeWidth="2">
        <line x1="356" y1="70" x2="356" y2="210" />
      </g>
      <rect x="300" y="110" width="40" height="60" fill="none" stroke="#0f4a2b" strokeDasharray="4 3" />
      {/* kitchen island + stairs */}
      <rect x="230" y="160" width="60" height="22" fill="none" stroke={ink} />
      <g stroke={ink} strokeWidth="1">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i} x1={56 + i * 7} y1="140" x2={56 + i * 7} y2="180" />
        ))}
        <rect x="52" y="140" width="56" height="40" fill="none" />
      </g>
      {/* labels */}
      <g fontFamily="Arial, sans-serif" fontSize="9" fill={ink} textAnchor="middle">
        <text x="124" y="86">LIVING ROOM</text>
        <text x="124" y="97" fontSize="7">4.20 x 3.85m</text>
        <text x="245" y="86">DINING</text>
        <text x="155" y="205">HALL / WC</text>
        <text x="258" y="205">KITCHEN</text>
        <text x="321" y="96" fontSize="7" fill="#0f4a2b">NEW</text>
        <text x="321" y="105" fontSize="7" fill="#0f4a2b">EXTENSION</text>
        <text x="320" y="138" fontSize="5.5" fill="#0f4a2b">ROOF</text>
        <text x="320" y="146" fontSize="5.5" fill="#0f4a2b">LANTERN</text>
      </g>
      {/* dimension line */}
      <g stroke={ink} strokeWidth="0.8" fill={ink}>
        <line x1="40" y1="258" x2="360" y2="258" />
        <line x1="40" y1="252" x2="40" y2="264" />
        <line x1="290" y1="252" x2="290" y2="264" />
        <line x1="360" y1="252" x2="360" y2="264" />
        <text x="165" y="272" fontSize="8" fontFamily="Arial" textAnchor="middle" stroke="none">7500</text>
        <text x="325" y="272" fontSize="8" fontFamily="Arial" textAnchor="middle" stroke="none">3000</text>
      </g>
      {/* title block */}
      <g fontFamily="Arial, sans-serif" fill={ink}>
        <rect x="262" y="8" width="130" height="26" fill="#fff" stroke={ink} />
        <text x="268" y="19" fontSize="7" fontWeight="bold">PROPOSED GROUND FLOOR</text>
        <text x="268" y="29" fontSize="6">SCALE 1:50 @ A3 · FTDS</text>
      </g>
      {/* north arrow */}
      <g transform="translate(30 20)" fill={ink}>
        <polygon points="0,-10 5,6 0,2 -5,6" />
        <text x="-3" y="18" fontSize="8" fontFamily="Arial">N</text>
      </g>
    </svg>
  );
}

export function Elevation() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Example proposed rear elevation drawing">
      <rect width="400" height="300" fill="#f7fafc" />
      <g stroke={ink} strokeWidth="1.5" fill="none">
        {/* ground line */}
        <line x1="20" y1="250" x2="380" y2="250" strokeWidth="2.5" />
        {/* existing house */}
        <rect x="60" y="100" width="220" height="150" />
        <polyline points="50,100 170,40 290,100" />
        <rect x="90" y="120" width="50" height="40" />
        <line x1="115" y1="120" x2="115" y2="160" />
        <rect x="200" y="120" width="50" height="40" />
        <line x1="225" y1="120" x2="225" y2="160" />
        {/* brick coursing */}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="60" x2="280" y1={175 + i * 7} y2={175 + i * 7} strokeWidth="0.4" />
        ))}
      </g>
      {/* proposed extension in green */}
      <g stroke="#0f4a2b" strokeWidth="1.8" fill="#17643c" fillOpacity="0.12">
        <rect x="40" y="170" width="300" height="80" />
        <rect x="140" y="160" width="60" height="10" />
      </g>
      <g stroke="#0f4a2b" strokeWidth="1.2" fill="none">
        <rect x="70" y="185" width="200" height="65" />
        <line x1="120" y1="185" x2="120" y2="250" />
        <line x1="170" y1="185" x2="170" y2="250" />
        <line x1="220" y1="185" x2="220" y2="250" />
        <line x1="80" y1="240" x2="100" y2="195" strokeWidth="0.6" />
        <line x1="180" y1="240" x2="200" y2="195" strokeWidth="0.6" />
      </g>
      {/* height dimension */}
      <g stroke={ink} strokeWidth="0.8">
        <line x1="355" y1="170" x2="355" y2="250" />
        <line x1="349" y1="170" x2="361" y2="170" />
        <line x1="349" y1="250" x2="361" y2="250" />
        <line x1="375" y1="40" x2="375" y2="250" />
        <line x1="369" y1="40" x2="381" y2="40" />
      </g>
      <g fontFamily="Arial, sans-serif" fontSize="8" fill={ink}>
        <text x="342" y="214" transform="rotate(-90 342 214)" textAnchor="middle">3000</text>
        <text x="390" y="150" transform="rotate(-90 390 150)" textAnchor="middle">8650</text>
        <text x="80" y="268" fill="#0f4a2b">ANTHRACITE ALUMINIUM BI-FOLD DOORS</text>
        <text x="80" y="280" fill="#0f4a2b">FLAT ROOF WITH LANTERN · RENDER TO MATCH</text>
        <rect x="262" y="8" width="130" height="26" fill="#fff" stroke={ink} />
        <text x="268" y="19" fontSize="7" fontWeight="bold">PROPOSED REAR ELEVATION</text>
        <text x="268" y="29" fontSize="6">SCALE 1:50 @ A3 · FTDS</text>
      </g>
    </svg>
  );
}

export function Section3D() {
  // Simple axonometric "3D visual" of an extension.
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Example 3D visual of a proposed extension">
      <defs>
        <linearGradient id="v3sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eaf3f9" />
          <stop offset="1" stopColor="#f7fafc" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#v3sky)" />
      <polygon points="40,230 200,290 380,210 220,160" fill="#a5cf7d" />
      {/* main house */}
      <polygon points="110,170 110,80 200,110 200,200" fill="#e9dfd2" />
      <polygon points="200,200 200,110 300,75 300,165" fill="#d8cbbb" />
      <polygon points="110,80 160,40 250,70 200,110" fill="#3f474d" />
      <polygon points="200,110 250,70 300,75" fill="#353c41" />
      {/* extension */}
      <polygon points="120,215 120,175 210,205 210,245" fill="#f6f4ef" />
      <polygon points="210,245 210,205 320,165 320,205" fill="#ebe7df" />
      <polygon points="120,175 210,205 320,165 230,137" fill="#2f3538" />
      <polygon points="190,172 222,183 250,173 218,162" fill="#a9d2ea" stroke="#2f3538" />
      <polygon points="220,238 220,212 310,180 310,206" fill="#7fb6d6" />
      {[0, 1, 2].map((i) => (
        <line key={i} x1={250 + i * 30} y1={201 - i * 10.5} x2={250 + i * 30} y2={227 - i * 10.5} stroke="#2f3538" strokeWidth="2" />
      ))}
      <polygon points="130,165 130,135 165,147 165,177" fill="#a9d2ea" stroke="#2f3538" strokeWidth="2" />
      <polygon points="220,155 220,125 255,113 255,143" fill="#a9d2ea" stroke="#2f3538" strokeWidth="2" />
      <text x="20" y="28" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill={ink}>3D VISUAL · PROPOSED EXTENSION</text>
    </svg>
  );
}

export function SitePlan() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Example site and location plan with red-line boundary">
      <rect width="400" height="300" fill="#f7fafc" />
      <g stroke="#9aa9b6" strokeWidth="1" fill="#e6ebef">
        <rect x="30" y="60" width="60" height="90" />
        <rect x="100" y="60" width="60" height="90" />
        <rect x="240" y="60" width="60" height="90" />
        <rect x="310" y="60" width="60" height="90" />
        <rect x="30" y="190" width="80" height="70" />
        <rect x="130" y="200" width="70" height="60" />
        <rect x="230" y="195" width="80" height="65" />
      </g>
      <rect x="0" y="160" width="400" height="22" fill="#dde3e8" />
      <text x="200" y="175" fontSize="9" fontFamily="Arial, sans-serif" fill={ink} textAnchor="middle">EXAMPLE ROAD</text>
      <rect x="170" y="40" width="62" height="118" fill="none" stroke="#c0262d" strokeWidth="2.5" />
      <rect x="176" y="60" width="50" height="60" fill="#c9d3db" stroke={ink} />
      <rect x="176" y="120" width="50" height="22" fill="#17643c" fillOpacity="0.35" stroke="#17643c" />
      <text x="201" y="134" fontSize="7" fontFamily="Arial, sans-serif" fill="#0f4a2b" textAnchor="middle">PROPOSED</text>
      <g transform="translate(360 250)" fill={ink}>
        <polygon points="0,-14 6,6 0,2 -6,6" />
        <text x="-3" y="20" fontSize="9" fontFamily="Arial">N</text>
      </g>
      <g fontFamily="Arial, sans-serif" fill={ink}>
        <rect x="262" y="8" width="130" height="26" fill="#fff" stroke={ink} />
        <text x="268" y="19" fontSize="7" fontWeight="bold">SITE &amp; LOCATION PLAN</text>
        <text x="268" y="29" fontSize="6">SCALE 1:1250 / 1:500 · FTDS</text>
      </g>
    </svg>
  );
}

export function CrossSection() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Example building regulations cross-section with annotations">
      <defs>
        <pattern id="ins" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M0 4 Q2 0 4 4 T8 4" fill="none" stroke="#c8a23a" strokeWidth="1" />
        </pattern>
        <pattern id="conc" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.8" fill="#7d8a96" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="#f7fafc" />
      <line x1="20" y1="230" x2="380" y2="230" stroke={ink} strokeWidth="2" />
      <rect x="60" y="230" width="40" height="40" fill="url(#conc)" stroke={ink} />
      <rect x="250" y="230" width="40" height="40" fill="url(#conc)" stroke={ink} />
      <rect x="70" y="100" width="12" height="130" fill="#c9b49a" stroke={ink} />
      <rect x="82" y="100" width="8" height="130" fill="url(#ins)" stroke={ink} />
      <rect x="260" y="100" width="12" height="130" fill="#c9b49a" stroke={ink} />
      <rect x="268" y="100" width="8" height="130" fill="url(#ins)" stroke={ink} />
      <rect x="90" y="215" width="170" height="15" fill="url(#conc)" stroke={ink} />
      <rect x="90" y="205" width="170" height="10" fill="url(#ins)" stroke={ink} />
      <rect x="60" y="88" width="230" height="12" fill="#3a4550" />
      <rect x="66" y="78" width="218" height="10" fill="url(#ins)" stroke={ink} />
      <g fontFamily="Arial, sans-serif" fontSize="6.2" fill={ink}>
        <line x1="290" y1="83" x2="296" y2="70" stroke={ink} />
        <text x="298" y="66">150mm PIR ROOF INSULATION</text>
        <text x="298" y="75">U-VALUE 0.15 W/m²K</text>
        <line x1="276" y1="160" x2="296" y2="150" stroke={ink} />
        <text x="298" y="146">CAVITY WALL, FULL-FILL</text>
        <text x="298" y="155">U-VALUE 0.18 W/m²K</text>
        <line x1="200" y1="210" x2="296" y2="200" stroke={ink} />
        <text x="298" y="196">100mm SLAB INSULATION</text>
        <text x="298" y="205">ON DPM, 100mm SLAB</text>
        <line x1="270" y1="255" x2="296" y2="262" stroke={ink} />
        <text x="298" y="266">CONCRETE STRIP FOOTING</text>
        <text x="298" y="275">TO ENGINEER'S DETAIL</text>
      </g>
      <g stroke={ink} strokeWidth="0.8">
        <line x1="40" y1="100" x2="40" y2="230" />
        <line x1="34" y1="100" x2="46" y2="100" />
        <line x1="34" y1="230" x2="46" y2="230" />
      </g>
      <text x="30" y="170" transform="rotate(-90 30 170)" fontSize="8" fontFamily="Arial" fill={ink} textAnchor="middle">2700</text>
      <g fontFamily="Arial, sans-serif" fill={ink}>
        <rect x="20" y="8" width="130" height="26" fill="#fff" stroke={ink} />
        <text x="26" y="19" fontSize="7" fontWeight="bold">SECTION A–A (BUILDING REGS)</text>
        <text x="26" y="29" fontSize="6">SCALE 1:20 · FTDS</text>
      </g>
    </svg>
  );
}
