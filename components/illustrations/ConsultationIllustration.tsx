export default function ConsultationIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="100" width="180" height="250" rx="20" fill="#F0FDF4" stroke="#A8DF8E" strokeWidth="3" />

      <rect x="80" y="130" width="120" height="80" rx="10" fill="white" />
      <line x1="95" y1="150" x2="185" y2="150" stroke="#D1FAE5" strokeWidth="4" />
      <line x1="95" y1="170" x2="170" y2="170" stroke="#D1FAE5" strokeWidth="4" />
      <line x1="95" y1="190" x2="185" y2="190" stroke="#D1FAE5" strokeWidth="4" />

      <circle cx="100" cy="260" r="15" fill="#A8DF8E" />
      <path d="M95 260 L98 265 L105 255" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="125" y="265" fontSize="14" fill="#064E3B">Анализа</text>

      <circle cx="100" cy="300" r="15" fill="#A8DF8E" />
      <path d="M95 300 L98 305 L105 295" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <text x="125" y="305" fontSize="14" fill="#064E3B">План</text>

      <circle cx="350" cy="200" r="80" fill="#A8DF8E" opacity="0.2" />
      <circle cx="350" cy="200" r="60" fill="#A8DF8E" />

      <circle cx="350" cy="180" r="35" fill="#F0FDF4" />
      <circle cx="340" cy="170" r="6" fill="#064E3B" />
      <circle cx="360" cy="170" r="6" fill="#064E3B" />
      <path d="M340 185 Q350 192, 360 185" stroke="#064E3B" strokeWidth="3" strokeLinecap="round" fill="none" />

      <path d="M300 230 Q310 240, 315 245 Q320 250, 330 248" stroke="#F0FDF4" strokeWidth="8" strokeLinecap="round" />
      <path d="M390 235 Q385 245, 380 250 Q375 255, 370 253" stroke="#F0FDF4" strokeWidth="8" strokeLinecap="round" />

      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <path d="M420 120 L425 130 L435 128 L428 137 L432 147 L420 142 L408 147 L412 137 L405 128 L415 130 Z" fill="#FCD34D" />
      </g>
      <g className="animate-float" style={{ animationDelay: '0.5s' }}>
        <path d="M270 100 L273 107 L280 106 L275 112 L277 119 L270 115 L263 119 L265 112 L260 106 L267 107 Z" fill="#A8DF8E" />
      </g>
    </svg>
  );
}
