export default function HealthJourneyIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="200" r="60" fill="#E0F2FE" opacity="0.6" />
      <circle cx="250" cy="200" r="70" fill="#A8DF8E" opacity="0.3" />
      <circle cx="400" cy="200" r="60" fill="#FEF3C7" opacity="0.6" />

      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <circle cx="100" cy="200" r="40" fill="#3B82F6" />
        <path d="M85 200 L95 210 L115 185" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <line x1="140" y1="200" x2="180" y2="200" stroke="#A8DF8E" strokeWidth="4" strokeDasharray="8 8" />

      <g className="animate-float" style={{ animationDelay: '0.5s' }}>
        <circle cx="250" cy="200" r="50" fill="#A8DF8E" />
        <circle cx="235" cy="190" r="5" fill="white" />
        <circle cx="265" cy="190" r="5" fill="white" />
        <path d="M235 215 Q250 225, 265 215" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
      </g>

      <line x1="300" y1="200" x2="340" y2="200" stroke="#FCD34D" strokeWidth="4" strokeDasharray="8 8" />

      <g className="animate-float" style={{ animationDelay: '1s' }}>
        <circle cx="400" cy="200" r="40" fill="#FCD34D" />
        <path d="M385 185 L395 195 M405 195 L415 185 M390 210 Q400 220, 410 210" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </g>

      <g className="animate-pulse" opacity="0.6">
        <path d="M250 100 L255 110 L265 108 L258 117 L262 127 L250 122 L238 127 L242 117 L235 108 L245 110 Z" fill="#FCD34D" />
        <path d="M150 120 L153 125 L158 124 L154 128 L156 133 L150 130 L144 133 L146 128 L142 124 L147 125 Z" fill="#A8DF8E" />
        <path d="M350 140 L353 145 L358 144 L354 148 L356 153 L350 150 L344 153 L346 148 L342 144 L347 145 Z" fill="#3B82F6" />
      </g>

      <text x="100" y="280" textAnchor="middle" fill="#64748B" fontSize="16" fontWeight="600">Почеток</text>
      <text x="250" y="280" textAnchor="middle" fill="#064E3B" fontSize="16" fontWeight="600">Напредок</text>
      <text x="400" y="280" textAnchor="middle" fill="#92400E" fontSize="16" fontWeight="600">Успех</text>
    </svg>
  );
}
