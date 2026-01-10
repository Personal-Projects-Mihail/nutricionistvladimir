export default function ContactIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="200" r="140" fill="#D1FAE5" opacity="0.4" />

      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <rect x="100" y="120" width="140" height="180" rx="20" fill="white" stroke="#A8DF8E" strokeWidth="4" />
        <circle cx="170" cy="170" r="25" fill="#A8DF8E" />
        <path d="M160 170 L165 175 L180 160" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

        <line x1="120" y1="220" x2="220" y2="220" stroke="#D1FAE5" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="240" x2="200" y2="240" stroke="#D1FAE5" strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="260" x2="220" y2="260" stroke="#D1FAE5" strokeWidth="4" strokeLinecap="round" />
      </g>

      <g className="animate-float" style={{ animationDelay: '0.3s' }}>
        <circle cx="350" cy="180" r="60" fill="#A8DF8E" />
        <path d="M330 165 Q350 155, 370 165" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M335 190 Q350 200, 365 190" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="340" cy="175" r="4" fill="white" />
        <circle cx="360" cy="175" r="4" fill="white" />
      </g>

      <g className="animate-float" style={{ animationDelay: '0.6s' }}>
        <rect x="260" y="240" width="120" height="100" rx="15" fill="#F0FDF4" stroke="#7AC45A" strokeWidth="3" />
        <circle cx="290" cy="270" r="8" fill="#A8DF8E" />
        <line x1="310" y1="270" x2="360" y2="270" stroke="#D1FAE5" strokeWidth="3" strokeLinecap="round" />
        <circle cx="290" cy="300" r="8" fill="#A8DF8E" />
        <line x1="310" y1="300" x2="360" y2="300" stroke="#D1FAE5" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="animate-pulse" opacity="0.6">
        <path d="M420 100 L423 107 L430 106 L425 112 L427 119 L420 115 L413 119 L415 112 L410 106 L417 107 Z" fill="#A8DF8E" />
        <path d="M80 280 L82 285 L87 284 L83 288 L85 293 L80 290 L75 293 L77 288 L73 284 L78 285 Z" fill="#7AC45A" />
        <path d="M430 320 L432 325 L437 324 L433 328 L435 333 L430 330 L425 333 L427 328 L423 324 L428 325 Z" fill="#D1FAE5" />
      </g>

      <g transform="translate(180, 80)">
        <circle cx="0" cy="0" r="15" fill="#FCD34D" className="animate-pulse" />
        <path d="M-5 0 L0 5 L10 -5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
