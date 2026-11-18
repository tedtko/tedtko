// Hand-built SVG illustrations used as placeholders until real project
// photos are added. Each scene has a "before" and "after" state.

type SceneProps = { after?: boolean };

function Sky({ after, id }: { after?: boolean; id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={after ? "#8fc8ee" : "#b8bec4"} />
          <stop offset="1" stopColor={after ? "#dff0fb" : "#d9dcdf"} />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#sky-${id})`} />
      {after ? (
        <g fill="#fff" opacity="0.9">
          <ellipse cx="70" cy="45" rx="34" ry="11" />
          <ellipse cx="95" cy="38" rx="22" ry="12" />
          <ellipse cx="330" cy="60" rx="30" ry="9" />
          <ellipse cx="350" cy="54" rx="18" ry="10" />
        </g>
      ) : (
        <g fill="#a9afb5" opacity="0.7">
          <ellipse cx="80" cy="40" rx="60" ry="16" />
          <ellipse cx="320" cy="55" rx="70" ry="14" />
        </g>
      )}
    </>
  );
}

function Win({ x, y, w, h, after }: { x: number; y: number; w: number; h: number; after?: boolean }) {
  const frame = after ? "#2d3336" : "#e9e2c9";
  const glass = after ? "#a9d2ea" : "#8d9aa1";
  return (
    <g>
      <rect x={x - 3} y={y - 3} width={w + 6} height={h + 6} fill={frame} />
      <rect x={x} y={y} width={w} height={h} fill={glass} />
      {after && <path d={`M${x + 4} ${y + h - 6} L${x + w * 0.45} ${y + 4}`} stroke="#e6f4fc" strokeWidth="5" opacity="0.6" />}
      <rect x={x + w / 2 - 1.5} y={y} width="3" height={h} fill={frame} />
      {!after && <rect x={x} y={y + h * 0.35} width={w} height="3" fill={frame} />}
      <rect x={x - 6} y={y + h + 3} width={w + 12} height="5" fill={after ? "#d9dcde" : "#cfc6b0"} />
    </g>
  );
}

export function HouseFront({ after }: SceneProps) {
  const id = after ? "hfa" : "hfb";
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={after ? "Refurbished house front" : "House front before refurbishment"}>
      <Sky after={after} id={id} />
      {/* neighbours */}
      <rect x="0" y="120" width="80" height="130" fill={after ? "#d8cfc4" : "#bdb3a6"} />
      <rect x="320" y="120" width="80" height="130" fill={after ? "#d8cfc4" : "#bdb3a6"} />
      <polygon points="0,122 0,70 70,122" fill={after ? "#6c6560" : "#5f5953"} />
      <polygon points="400,122 400,70 330,122" fill={after ? "#6c6560" : "#5f5953"} />
      {/* chimney */}
      <rect x="245" y="48" width="24" height="40" fill={after ? "#b4553c" : "#8f6a5a"} />
      <rect x="242" y="44" width="30" height="7" fill={after ? "#8e3f2b" : "#6f5248"} />
      {/* roof */}
      <polygon points="72,114 200,38 328,114" fill={after ? "#39424a" : "#6d655e"} />
      {after
        ? [0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1={88 + i * 4} y1={104 - i * 14} x2={312 - i * 4} y2={104 - i * 14} stroke="#2c343a" strokeWidth="1.5" opacity={i * 14 < 70 ? 1 : 0} />
          ))
        : (
          <g>
            <rect x="150" y="80" width="18" height="9" fill="#857b72" />
            <rect x="215" y="95" width="22" height="9" fill="#857b72" />
            <rect x="180" y="62" width="14" height="8" fill="#4f4842" />
          </g>
        )}
      {/* body */}
      <rect x="88" y="112" width="224" height="138" fill={after ? "#f5f3ee" : "#b5a28b"} />
      {after ? (
        <rect x="88" y="182" width="224" height="68" fill="#b5583f" />
      ) : (
        <g stroke="#8f7c66" strokeWidth="1.5" fill="none">
          <path d="M120 116 l6 18 -4 10 7 16" />
          <path d="M292 200 l-8 12 4 9 -6 14" />
        </g>
      )}
      {after &&
        Array.from({ length: 8 }).map((_, r) => (
          <line key={r} x1="88" x2="312" y1={190 + r * 8} y2={190 + r * 8} stroke="#9a4733" strokeWidth="1" />
        ))}
      {/* gutter */}
      <rect x="80" y="112" width={after ? 240 : 150} height="5" fill={after ? "#2d3336" : "#d6d0c2"} />
      {!after && <rect x="236" y="114" width="84" height="5" fill="#d6d0c2" transform="rotate(6 236 114)" />}
      {/* windows */}
      <Win x={112} y={128} w={58} h={44} after={after} />
      <Win x={230} y={128} w={58} h={44} after={after} />
      {/* bay window */}
      <rect x="104" y="190" width="80" height="60" fill={after ? "#2d3336" : "#e9e2c9"} />
      <rect x="110" y="196" width="20" height="44" fill={after ? "#a9d2ea" : "#8d9aa1"} />
      <rect x="134" y="196" width="22" height="44" fill={after ? "#a9d2ea" : "#8d9aa1"} />
      <rect x="160" y="196" width="18" height="44" fill={after ? "#a9d2ea" : "#8d9aa1"} />
      <polygon points="98,190 190,190 182,182 106,182" fill={after ? "#2d3336" : "#7b726a"} />
      {/* door */}
      <rect x="228" y="186" width="46" height="64" fill={after ? "#2d3336" : "#e9e2c9"} />
      <rect x="232" y="196" width="38" height="54" fill={after ? "#4c9a2a" : "#7a5a48"} />
      <rect x="232" y="188" width="38" height="6" fill={after ? "#a9d2ea" : "#8d9aa1"} />
      <circle cx="263" cy="224" r="2.5" fill={after ? "#e3c46a" : "#5a463a"} />
      {after && <rect x="246" y="206" width="10" height="24" fill="#3e8323" />}
      {after && <circle cx="222" cy="200" r="3" fill="#ffe8a3" />}
      {/* ground */}
      <rect x="0" y="250" width="400" height="50" fill={after ? "#8dbb5c" : "#8b8a6a"} />
      <polygon points="232,250 270,250 290,300 214,300" fill={after ? "#d6d2ca" : "#9c958a"} />
      {after ? (
        <g>
          <rect x="0" y="262" width="200" height="12" rx="6" fill="#4c7d2e" />
          <rect x="300" y="262" width="100" height="12" rx="6" fill="#4c7d2e" />
          <circle cx="60" cy="247" r="12" fill="#5d9a38" />
          <circle cx="340" cy="245" r="14" fill="#5d9a38" />
        </g>
      ) : (
        <g>
          <path d="M10 262 q12 -26 24 0 q10 -30 22 0 q14 -22 26 0 q10 -28 22 0" fill="#6f7444" />
          <path d="M300 262 q12 -30 24 0 q12 -24 26 0 q12 -30 26 0" fill="#6f7444" />
          <rect x="190" y="230" width="22" height="30" rx="2" fill="#40484c" />
          <rect x="188" y="226" width="26" height="6" rx="2" fill="#2f3538" />
        </g>
      )}
    </svg>
  );
}

export function RearExtension({ after }: SceneProps) {
  const id = after ? "rea" : "reb";
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={after ? "New rear extension with glazed doors" : "Rear of house before extension"}>
      <Sky after={after} id={id} />
      {/* main house rear */}
      <polygon points="60,100 200,36 340,100" fill={after ? "#39424a" : "#6d655e"} />
      <rect x="76" y="98" width="248" height="132" fill={after ? "#d9c7b2" : "#b3a491"} />
      <Win x={104} y={116} w={52} h={40} after={after} />
      <Win x={244} y={116} w={52} h={40} after={after} />
      {after ? (
        <g>
          {/* extension */}
          <rect x="56" y="168" width="288" height="82" fill="#f3f1ec" />
          <rect x="50" y="160" width="300" height="10" fill="#2d3336" />
          <rect x="160" y="148" width="80" height="14" fill="#a9d2ea" stroke="#2d3336" strokeWidth="3" />
          <rect x="80" y="182" width="240" height="68" fill="#2d3336" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={84 + i * 59} y="186" width="55" height="64" fill="#a9d2ea" />
          ))}
          <path d="M92 240 L130 192" stroke="#e6f4fc" strokeWidth="6" opacity="0.5" />
          <path d="M210 240 L248 192" stroke="#e6f4fc" strokeWidth="6" opacity="0.5" />
          <circle cx="68" cy="190" r="3" fill="#ffe8a3" />
          <circle cx="332" cy="190" r="3" fill="#ffe8a3" />
          {/* patio + lawn */}
          <rect x="0" y="250" width="400" height="50" fill="#8dbb5c" />
          <polygon points="40,250 360,250 380,276 20,276" fill="#cfcac0" />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line key={i} x1={60 + i * 48} y1="250" x2={50 + i * 50} y2="276" stroke="#bab4a8" />
          ))}
        </g>
      ) : (
        <g>
          {/* old lean-to */}
          <polygon points="210,170 330,186 330,192 210,176" fill="#cfd3d4" />
          <rect x="214" y="186" width="112" height="64" fill="#dad4c4" />
          <rect x="224" y="196" width="36" height="50" fill="#8d9aa1" stroke="#e9e2c9" strokeWidth="3" />
          <rect x="270" y="196" width="46" height="26" fill="#8d9aa1" stroke="#e9e2c9" strokeWidth="3" />
          <rect x="100" y="180" width="38" height="70" fill="#7a5a48" stroke="#e9e2c9" strokeWidth="3" />
          <rect x="0" y="250" width="400" height="50" fill="#8b8a6a" />
          <path d="M0 262 q14 -18 28 0 q14 -22 28 0 q14 -16 28 0 q14 -20 28 0" fill="#6f7444" />
          <rect x="150" y="256" width="40" height="8" fill="#9c958a" />
          <rect x="200" y="262" width="34" height="8" fill="#9c958a" />
        </g>
      )}
    </svg>
  );
}

export function LoftConversion({ after }: SceneProps) {
  const id = after ? "lca" : "lcb";
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" role="img" aria-label={after ? "Loft conversion with rear dormer" : "Roof before loft conversion"}>
      <Sky after={after} id={id} />
      {/* side view of house */}
      <rect x="70" y="140" width="260" height="110" fill={after ? "#e8e2d8" : "#b3a491"} />
      <polygon points="56,142 200,52 344,142" fill={after ? "#39424a" : "#6d655e"} />
      {after ? (
        <g>
          <rect x="200" y="70" width="128" height="72" fill="#3a4246" />
          <rect x="196" y="64" width="138" height="8" fill="#2d3336" />
          <Win x={218} y={86} w={40} h={40} after />
          <Win x={270} y={86} w={40} h={40} after />
          <rect x="142" y="92" width="26" height="18" fill="#a9d2ea" stroke="#2d3336" strokeWidth="3" transform="skewY(-32) translate(0 90)" />
        </g>
      ) : (
        <g>
          <rect x="150" y="96" width="18" height="9" fill="#857b72" />
          <rect x="240" y="110" width="16" height="9" fill="#857b72" />
        </g>
      )}
      <Win x={100} y={160} w={50} h={36} after={after} />
      <Win x={250} y={160} w={50} h={36} after={after} />
      <rect x="170" y="190" width="40" height="60" fill={after ? "#4c9a2a" : "#7a5a48"} stroke={after ? "#2d3336" : "#e9e2c9"} strokeWidth="3" />
      <rect x="0" y="250" width="400" height="50" fill={after ? "#8dbb5c" : "#8b8a6a"} />
      {!after && <path d="M300 262 q12 -26 24 0 q12 -22 24 0 q12 -26 24 0" fill="#6f7444" />}
      {after && <rect x="0" y="262" width="150" height="12" rx="6" fill="#4c7d2e" />}
    </svg>
  );
}

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
      <g fill="#4c9a2a" fillOpacity="0.35" stroke="#2f6b1f" strokeWidth="1.5">
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
      <g stroke="#2f6b1f" strokeWidth="2">
        <line x1="356" y1="70" x2="356" y2="210" />
      </g>
      <rect x="300" y="110" width="40" height="60" fill="none" stroke="#2f6b1f" strokeDasharray="4 3" />
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
        <text x="321" y="96" fontSize="7" fill="#2f6b1f">NEW</text>
        <text x="321" y="105" fontSize="7" fill="#2f6b1f">EXTENSION</text>
        <text x="320" y="138" fontSize="5.5" fill="#2f6b1f">ROOF</text>
        <text x="320" y="146" fontSize="5.5" fill="#2f6b1f">LANTERN</text>
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
        <text x="268" y="29" fontSize="6">SCALE 1:50 @ A3 · FT23</text>
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
      <g stroke="#2f6b1f" strokeWidth="1.8" fill="#4c9a2a" fillOpacity="0.12">
        <rect x="40" y="170" width="300" height="80" />
        <rect x="140" y="160" width="60" height="10" />
      </g>
      <g stroke="#2f6b1f" strokeWidth="1.2" fill="none">
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
        <text x="80" y="268" fill="#2f6b1f">ANTHRACITE ALUMINIUM BI-FOLD DOORS</text>
        <text x="80" y="280" fill="#2f6b1f">FLAT ROOF WITH LANTERN · RENDER TO MATCH</text>
        <rect x="262" y="8" width="130" height="26" fill="#fff" stroke={ink} />
        <text x="268" y="19" fontSize="7" fontWeight="bold">PROPOSED REAR ELEVATION</text>
        <text x="268" y="29" fontSize="6">SCALE 1:50 @ A3 · FT23</text>
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
