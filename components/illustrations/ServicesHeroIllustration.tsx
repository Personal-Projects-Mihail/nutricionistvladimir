export default function ServicesHeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="250" cy="200" r="120" fill="#D1FAE5" opacity="0.5" />
      <circle cx="250" cy="200" r="90" fill="#A8DF8E" opacity="0.3" />
      <circle cx="250" cy="200" r="60" fill="#7AC45A" />

      <g className="animate-float" style={{ animationDelay: '0s' }}>
        <circle cx="150" cy="120" r="30" fill="#3B82F6" />
        <svg x="135" y="105" width="30" height="30" fill="white" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
        </svg>
      </g>

      <g className="animate-float" style={{ animationDelay: '0.3s' }}>
        <circle cx="350" cy="140" r="35" fill="#EC4899" />
        <svg x="332" y="122" width="36" height="36" fill="white" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </g>

      <g className="animate-float" style={{ animationDelay: '0.6s' }}>
        <circle cx="120" cy="280" r="32" fill="#10B981" />
        <svg x="104" y="264" width="32" height="32" fill="white" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      </g>

      <g className="animate-float" style={{ animationDelay: '0.9s' }}>
        <circle cx="380" cy="260" r="28" fill="#F59E0B" />
        <svg x="366" y="246" width="28" height="28" fill="white" viewBox="0 0 20 20">
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </g>

      <circle cx="250" cy="200" r="40" fill="white" />
      <text x="250" y="210" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#7AC45A">+</text>

      <g className="animate-pulse" opacity="0.4">
        <path d="M50 50 L55 60 L65 58 L58 67 L62 77 L50 72 L38 77 L42 67 L35 58 L45 60 Z" fill="#FCD34D" />
        <path d="M430 80 L433 87 L440 86 L435 92 L437 99 L430 95 L423 99 L425 92 L420 86 L427 87 Z" fill="#A8DF8E" />
        <path d="M70 350 L73 357 L80 356 L75 362 L77 369 L70 365 L63 369 L65 362 L60 356 L67 357 Z" fill="#3B82F6" />
      </g>
    </svg>
  );
}
