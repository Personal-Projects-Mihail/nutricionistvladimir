'use client';

export default function FruitBowl() {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Bowl */}
      <path
        d="M40 100 Q40 140, 100 150 Q160 140, 160 100 L150 100 Q150 130, 100 138 Q50 130, 50 100 Z"
        fill="#A8DF8E"
        opacity="0.3"
      />
      
      {/* Apple */}
      <circle cx="70" cy="85" r="18" fill="#EF4444" />
      <path d="M70 67 Q73 62, 76 67" stroke="#22C55E" strokeWidth="2" fill="none" />
      <ellipse cx="73" cy="82" rx="6" ry="8" fill="#FCA5A5" opacity="0.5" />
      
      {/* Orange */}
      <circle cx="100" cy="80" r="20" fill="#FB923C" />
      <circle cx="100" cy="80" r="3" fill="#F97316" />
      
      {/* Banana */}
      <path
        d="M115 90 Q105 75, 125 70 Q135 72, 138 80 Q140 88, 130 95 Q120 98, 115 90 Z"
        fill="#FDE047"
      />
      
      {/* Grapes */}
      <circle cx="140" cy="95" r="6" fill="#9333EA" />
      <circle cx="148" cy="90" r="6" fill="#9333EA" />
      <circle cx="135" cy="88" r="6" fill="#9333EA" />
      <circle cx="143" cy="83" r="6" fill="#9333EA" />
      <circle cx="150" cy="78" r="6" fill="#9333EA" />
    </svg>
  );
}
