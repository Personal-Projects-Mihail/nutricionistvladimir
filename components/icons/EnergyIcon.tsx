export default function EnergyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M55 10 L30 45 L45 45 L40 90 L70 50 L55 50 L55 10 Z"
        fill="currentColor"
      />
      <path
        d="M52 15 L35 45 L45 45 L42 75"
        fill="white"
        opacity="0.3"
      />
    </svg>
  );
}
