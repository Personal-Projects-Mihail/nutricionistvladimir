export default function WeightLossIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="40" r="25" fill="currentColor" opacity="0.9" />
      <path
        d="M30 65 L30 85 C30 88, 32 90, 35 90 L65 90 C68 90, 70 88, 70 85 L70 65 Z"
        fill="currentColor"
      />
      <line x1="25" y1="65" x2="75" y2="65" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      <g transform="translate(45, 30)">
        <path d="M0 -8 L2 -3 L7 -2 L3 2 L4 7 L0 5 L-4 7 L-3 2 L-7 -2 L-2 -3 Z" fill="#FCD34D" />
      </g>

      <path d="M35 70 L38 80" stroke="white" strokeWidth="2" opacity="0.6" />
      <path d="M50 70 L50 82" stroke="white" strokeWidth="2" opacity="0.6" />
      <path d="M65 70 L62 80" stroke="white" strokeWidth="2" opacity="0.6" />
    </svg>
  );
}
