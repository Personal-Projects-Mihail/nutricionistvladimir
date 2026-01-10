export default function BookingIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="200" r="150" fill="#D1FAE5" opacity="0.4" />

      <rect x="150" y="80" width="200" height="240" rx="20" fill="white" stroke="#A8DF8E" strokeWidth="3" />

      <rect x="170" y="100" width="160" height="30" rx="8" fill="#F0FDF4" />
      <line x1="185" y1="115" x2="335" y2="115" stroke="#A8DF8E" strokeWidth="3" strokeLinecap="round" />

      <g>
        <rect x="170" y="145" width="70" height="60" rx="10" fill="#E0F2FE" />
        <text x="205" y="165" textAnchor="middle" fontSize="12" fill="#0284C7" fontWeight="600">ПОН</text>
        <text x="205" y="190" textAnchor="middle" fontSize="20" fill="#0C4A6E" fontWeight="bold">15</text>

        <rect x="260" y="145" width="70" height="60" rx="10" fill="#A8DF8E" />
        <text x="295" y="165" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">ВТО</text>
        <text x="295" y="190" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">16</text>
      </g>

      <g>
        <circle cx="190" cy="240" r="12" fill="#A8DF8E" />
        <path d="M185 240 L188 243 L195 236" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="210" y="245" fontSize="14" fill="#064E3B">Онлајн</text>
      </g>

      <g>
        <circle cx="190" cy="270" r="12" fill="#E5E7EB" />
        <text x="210" y="275" fontSize="14" fill="#6B7280">Лично</text>
      </g>

      <rect x="170" y="290" width="160" height="15" rx="7.5" fill="#F3F4F6" />
      <rect x="170" y="290" width="100" height="15" rx="7.5" fill="#A8DF8E" />

      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <circle cx="100" cy="150" r="25" fill="#FCD34D" />
        <path d="M90 145 L95 150 L110 135" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g className="animate-float" style={{ animationDelay: '0.5s' }}>
        <circle cx="400" cy="180" r="20" fill="#EC4899" />
        <text x="400" y="188" textAnchor="middle" fontSize="20" fill="white" fontWeight="bold">!</text>
      </g>

      <g className="animate-pulse" opacity="0.6">
        <path d="M350 280 L353 287 L360 286 L355 292 L357 299 L350 295 L343 299 L345 292 L340 286 L347 287 Z" fill="#A8DF8E" />
        <path d="M80 300 L82 305 L87 304 L83 308 L85 313 L80 310 L75 313 L77 308 L73 304 L78 305 Z" fill="#3B82F6" />
      </g>
    </svg>
  );
}
