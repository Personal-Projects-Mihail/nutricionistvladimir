export default function BalanceIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="50" y1="20" x2="50" y2="75" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="35" y1="75" x2="65" y2="75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      <line x1="20" y1="30" x2="50" y2="20" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M10 50 L20 30 L30 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="2" />

      <line x1="50" y1="20" x2="80" y2="30" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M70 50 L80 30 L90 50 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="2" />

      <circle cx="50" cy="18" r="5" fill="currentColor" />
    </svg>
  );
}
