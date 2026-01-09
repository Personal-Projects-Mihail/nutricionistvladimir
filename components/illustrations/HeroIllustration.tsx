'use client';

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background Circle */}
      <circle cx="250" cy="250" r="200" fill="#7AC45A" opacity="0.1" />
      
      {/* Person Silhouette */}
      <ellipse cx="250" cy="180" rx="50" ry="55" fill="#5DA945" />
      <path
        d="M250 240 C200 260, 200 340, 200 380 L200 450 L220 450 L220 380 L280 380 L280 450 L300 450 L300 380 C300 340, 300 260, 250 240Z"
        fill="#7AC45A"
      />
      
      {/* Fruits & Vegetables Floating Around */}
      
      {/* Apple - Top Left */}
      <circle cx="120" cy="100" r="25" fill="#EF4444" />
      <path d="M120 75 Q125 65, 130 75" stroke="#22C55E" strokeWidth="3" fill="none" />
      <ellipse cx="125" cy="95" rx="8" ry="10" fill="#FCA5A5" opacity="0.5" />
      
      {/* Broccoli - Top Right */}
      <circle cx="380" cy="120" r="15" fill="#22C55E" />
      <circle cx="395" cy="130" r="12" fill="#22C55E" />
      <circle cx="370" cy="135" r="13" fill="#22C55E" />
      <rect x="383" y="145" width="8" height="30" fill="#4ADE80" rx="2" />
      
      {/* Carrot - Middle Left */}
      <path
        d="M80 280 L85 320 L95 320 L100 280 Z"
        fill="#F97316"
      />
      <path d="M90 275 L85 260 M90 275 L95 265 M90 275 L90 260" stroke="#22C55E" strokeWidth="2" />
      
      {/* Avocado - Bottom Right */}
      <ellipse cx="400" cy="350" rx="20" ry="28" fill="#4ADE80" />
      <ellipse cx="400" cy="350" rx="12" ry="18" fill="#FDE047" />
      
      {/* Orange Slice - Middle Right */}
      <circle cx="420" cy="250" r="22" fill="#FB923C" />
      <line x1="420" y1="228" x2="420" y2="272" stroke="#FFF" strokeWidth="2" />
      <line x1="398" y1="250" x2="442" y2="250" stroke="#FFF" strokeWidth="2" />
      <line x1="405" y1="235" x2="435" y2="265" stroke="#FFF" strokeWidth="2" />
      <line x1="435" y1="235" x2="405" y2="265" stroke="#FFF" strokeWidth="2" />
      
      {/* Leafy Green - Bottom Left */}
      <ellipse cx="100" cy="400" rx="18" ry="25" fill="#10B981" transform="rotate(-20 100 400)" />
      <ellipse cx="115" cy="395" rx="16" ry="23" fill="#22C55E" transform="rotate(15 115 395)" />
      <ellipse cx="108" cy="415" rx="15" ry="22" fill="#34D399" transform="rotate(-10 108 415)" />
      
      {/* Tomato - Top Center */}
      <circle cx="250" cy="80" r="18" fill="#EF4444" />
      <path d="M245 63 L250 58 L255 63 L260 60 L262 65" fill="#22C55E" />
      
      {/* Banana - Left Side */}
      <path
        d="M60 200 Q50 230, 70 250 Q80 255, 85 245 Q95 215, 80 195 Q70 190, 60 200 Z"
        fill="#FDE047"
      />
      <path
        d="M65 205 Q58 225, 72 242"
        stroke="#F59E0B"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Berries - Various Positions */}
      <circle cx="150" cy="180" r="8" fill="#DC2626" />
      <circle cx="165" cy="175" r="6" fill="#DC2626" />
      <circle cx="155" cy="195" r="7" fill="#DC2626" />
      
      {/* Sparkles/Stars for freshness */}
      <g opacity="0.6">
        <path d="M180 120 L182 125 L187 125 L183 128 L185 133 L180 130 L175 133 L177 128 L173 125 L178 125 Z" fill="#FDE047" />
        <path d="M350 180 L352 185 L357 185 L353 188 L355 193 L350 190 L345 193 L347 188 L343 185 L348 185 Z" fill="#FDE047" />
        <path d="M320 380 L322 385 L327 385 L323 388 L325 393 L320 390 L315 393 L317 388 L313 385 L318 385 Z" fill="#FDE047" />
      </g>
      
      {/* Circular dots pattern for visual interest */}
      <g opacity="0.15">
        <circle cx="140" cy="300" r="3" fill="#7AC45A" />
        <circle cx="160" cy="310" r="3" fill="#7AC45A" />
        <circle cx="145" cy="330" r="3" fill="#7AC45A" />
        <circle cx="370" cy="280" r="3" fill="#7AC45A" />
        <circle cx="355" cy="300" r="3" fill="#7AC45A" />
        <circle cx="390" cy="295" r="3" fill="#7AC45A" />
      </g>
    </svg>
  );
}
