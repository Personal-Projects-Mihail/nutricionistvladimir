export default function AppleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 10 C45 8, 42 12, 42 16 C42 16, 42 18, 44 20"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="50" cy="55" rx="28" ry="32" fill="currentColor" opacity="0.9" />
      <path
        d="M30 40 C28 45, 25 60, 30 75 C35 88, 45 90, 50 90 C55 90, 65 88, 70 75 C75 60, 72 45, 70 40 C68 35, 55 25, 50 25 C45 25, 32 35, 30 40 Z"
        fill="currentColor"
      />
      <ellipse cx="38" cy="45" rx="6" ry="8" fill="white" opacity="0.3" />
    </svg>
  );
}
