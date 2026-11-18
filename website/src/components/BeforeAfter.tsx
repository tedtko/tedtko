"use client";

import { useState } from "react";

export default function BeforeAfter({ before, after, label }: { before: React.ReactNode; after: React.ReactNode; label: string }) {
  const [pos, setPos] = useState(50);
  return (
    <div className="ba">
      {before}
      <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>{after}</div>
      <div className="ba-handle" style={{ left: `${pos}%` }} />
      <span className="ba-label before">Before</span>
      <span className="ba-label after">After</span>
      <input
        type="range" min={0} max={100} value={pos}
        aria-label={`Compare before and after: ${label}`}
        onChange={(e) => setPos(Number(e.target.value))}
      />
    </div>
  );
}
