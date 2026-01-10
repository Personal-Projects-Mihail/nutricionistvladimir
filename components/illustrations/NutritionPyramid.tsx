export default function NutritionPyramid({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pyramidGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
        <linearGradient id="pyramidGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D1FAE5" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
        <linearGradient id="pyramidGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#A7F3D0" />
          <stop offset="100%" stopColor="#34D399" />
        </linearGradient>
        <linearGradient id="pyramidGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>
        <linearGradient id="pyramidGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
      </defs>

      <path d="M200 50 L160 120 L240 120 Z" fill="url(#pyramidGrad1)" stroke="#F59E0B" strokeWidth="2" />
      <text x="200" y="95" textAnchor="middle" fontSize="12" fontWeight="600" fill="#92400E">Масти</text>

      <path d="M160 120 L120 190 L280 190 Z" fill="url(#pyramidGrad2)" stroke="#10B981" strokeWidth="2" />
      <text x="200" y="165" textAnchor="middle" fontSize="12" fontWeight="600" fill="#065F46">Протеини</text>

      <path d="M120 190 L80 260 L320 260 Z" fill="url(#pyramidGrad3)" stroke="#059669" strokeWidth="2" />
      <text x="200" y="235" textAnchor="middle" fontSize="12" fontWeight="600" fill="#064E3B">Млечни</text>

      <path d="M80 260 L40 330 L360 330 Z" fill="url(#pyramidGrad4)" stroke="#16A34A" strokeWidth="2" />
      <text x="200" y="305" textAnchor="middle" fontSize="12" fontWeight="600" fill="#14532D">Овошје</text>

      <path d="M40 330 L10 380 L390 380 Z" fill="url(#pyramidGrad5)" stroke="#15803D" strokeWidth="2" />
      <text x="200" y="365" textAnchor="middle" fontSize="12" fontWeight="600" fill="white">Зеленчук & Житарки</text>

      <g className="animate-pulse" opacity="0.7">
        <circle cx="200" cy="70" r="8" fill="#FCD34D" />
        <circle cx="90" cy="240" r="8" fill="#22C55E" />
        <circle cx="310" cy="240" r="8" fill="#34D399" />
      </g>
    </svg>
  );
}
