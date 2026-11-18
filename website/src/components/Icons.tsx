type P = { size?: number };
const base = (size = 24) => ({
  width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor",
  strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true,
});

export const IconPhone = ({ size }: P) => (
  <svg {...base(size)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>
);
export const IconMail = ({ size }: P) => (
  <svg {...base(size)}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
);
export const IconLock = ({ size }: P) => (
  <svg {...base(size)}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
export const IconMenu = ({ size }: P) => (<svg {...base(size)}><path d="M3 6h18M3 12h18M3 18h18"/></svg>);
export const IconClose = ({ size }: P) => (<svg {...base(size)}><path d="M18 6 6 18M6 6l12 12"/></svg>);
export const IconCloud = ({ size }: P) => (
  <svg {...base(size)}><path d="M7 18a5 5 0 0 1-.9-9.9A6 6 0 0 1 17.7 9 4.5 4.5 0 0 1 17.5 18z"/><path d="M12 11v6M9.5 13.5 12 11l2.5 2.5"/></svg>
);
export const IconTag = ({ size }: P) => (
  <svg {...base(size)}><path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>
);
export const IconRuler = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 21 21 3"/><path d="M3 21h18V3"/><path d="M15 21v-3M11 21v-3M7 21v-3M21 15h-3M21 11h-3M21 7h-3"/></svg>
);
export const IconBolt = ({ size }: P) => (<svg {...base(size)}><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>);
export const IconClock = ({ size }: P) => (<svg {...base(size)}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>);
export const IconRevise = ({ size }: P) => (
  <svg {...base(size)}><path d="M3 12a9 9 0 0 1 15.5-6.3L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16"/><path d="M3 21v-5h5"/></svg>
);
export const IconFile = ({ size }: P) => (
  <svg {...base(size)}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/></svg>
);
export const IconCube = ({ size }: P) => (
  <svg {...base(size)}><path d="M21 16V8l-9-5-9 5v8l9 5z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/></svg>
);
export const IconWhatsApp = ({ size = 24 }: P) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" aria-hidden>
    <path d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.3.6 4.53 1.74 6.5L3 29l6.68-1.75A12.94 12.94 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3zm0 23.66c-2 0-3.95-.54-5.65-1.55l-.4-.24-3.96 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.4 16c0-5.87 4.77-10.64 10.64-10.64S26.66 10.13 26.66 16 21.9 26.66 16.04 26.66zm5.84-7.97c-.32-.16-1.89-.93-2.180-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59a9.6 9.6 0 0 1-1.78-2.21c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.730-.98-2.370-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.120 1.090-1.120 2.660s1.140 3.080 1.300 3.300c.16.2 2.250 3.430 5.450 4.810.76.33 1.350.52 1.820.67.76.24 1.460.2 2.010.12.61-.09 1.890-.77 2.150-1.520.27-.74.27-1.380.19-1.520-.08-.13-.29-.21-.61-.37z"/>
  </svg>
);

/** Brand mark: a drafted roof/plan outline with dimension ticks. */
export function LogoMark({ size = 40 }: P) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
      <rect width="48" height="48" rx="10" fill="#17643c" />
      <g fill="none" stroke="#fff" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
        <path d="M11 22 24 11l13 11" />
        <path d="M14 20v16h20V20" />
        <path d="M21 36v-8h6v8" />
      </g>
      <g stroke="#9fe0b9" strokeWidth="1.4" strokeLinecap="round">
        <path d="M14 40h20M14 38.5v3M34 38.5v3" />
        <path d="M39 20v16M37.5 20h3M37.5 36h3" />
      </g>
    </svg>
  );
}
