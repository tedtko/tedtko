type P = { size?: number };
const base = (size = 24) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
});

export const IconPhone = ({ size }: P) => (
  <svg {...base(size)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
);
export const IconMail = ({ size }: P) => (
  <svg {...base(size)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
);
export const IconPin = ({ size }: P) => (
  <svg {...base(size)}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
);
export const IconCheck = ({ size }: P) => (
  <svg {...base(size)}><path d="M20 6 9 17l-5-5"/></svg>
);
export const IconShield = ({ size }: P) => (
  <svg {...base(size)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
export const IconLock = ({ size }: P) => (
  <svg {...base(size)}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
export const IconClock = ({ size }: P) => (
  <svg {...base(size)}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
);
export const IconMenu = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 6h18M3 12h18M3 18h18"/></svg>
);
export const IconClose = ({ size }: P) => (
  <svg {...base(size)}><path d="M18 6 6 18M6 6l12 12"/></svg>
);
export const IconHouse = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9v12h14V9"/><path d="M10 21v-6h4v6"/></svg>
);
export const IconBrush = ({ size }: P) => (
  <svg {...base(size)}><rect x="3" y="3" width="15" height="6" rx="1"/><path d="M18 6h3v5h-9v3"/><rect x="10" y="14" width="4" height="7" rx="1"/></svg>
);
export const IconBricks = ({ size }: P) => (
  <svg {...base(size)}><rect x="2" y="4" width="20" height="16" rx="1"/><path d="M2 9.3h20M2 14.6h20M8 4v5.3M16 4v5.3M12 9.3v5.3M6 14.6V20M18 14.6V20"/></svg>
);
export const IconRoof = ({ size }: P) => (
  <svg {...base(size)}><path d="M2 20 12 4l10 16"/><path d="M8 20v-5h8v5"/><path d="M12 11h.01"/></svg>
);
export const IconBath = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 12h18v3a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-3z"/><path d="M6 12V5a2 2 0 0 1 4 0"/><path d="M7 20l-1 2M17 20l1 2"/></svg>
);
export const IconRuler = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 21 21 3"/><path d="M3 21h18V3"/><path d="M15 21v-3M11 21v-3M7 21v-3M21 15h-3M21 11h-3M21 7h-3"/></svg>
);
export const IconHelmet = ({ size }: P) => (
  <svg {...base(size)}><path d="M2 18h20"/><path d="M4 18v-2a8 8 0 0 1 16 0v2"/><path d="M10 8V5h4v3"/></svg>
);
export const IconCard = ({ size }: P) => (
  <svg {...base(size)}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></svg>
);
export const IconWhatsApp = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
    <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.53 1.74 6.5L3 29l6.68-1.75A12.94 12.94 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3zm0 23.66c-2 0-3.95-.54-5.65-1.55l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.4 16c0-5.87 4.77-10.64 10.64-10.64S26.66 10.13 26.66 16 21.9 26.66 16.04 26.66zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.6 9.6 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.14 3.08 1.3 3.3c.16.2 2.25 3.43 5.45 4.81.76.33 1.35.52 1.82.67.76.24 1.46.2 2.01.12.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/>
  </svg>
);

export const serviceIcons: Record<string, (p: P) => React.ReactElement> = {
  "new-builds": IconHouse,
  renovations: IconBrush,
  extensions: IconBricks,
  "loft-conversions": IconRoof,
  bathrooms: IconBath,
  "planning-drawings": IconRuler,
  "project-management": IconHelmet,
};
