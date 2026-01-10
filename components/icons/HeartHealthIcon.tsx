export default function HeartHealthIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M50 85 C50 85, 20 60, 15 40 C12 28, 15 20, 23 16 C30 12, 38 15, 43 22 L50 32 L57 22 C62 15, 70 12, 77 16 C85 20, 88 28, 85 40 C80 60, 50 85, 50 85 Z"
        fill="currentColor"
      />
      <circle cx="50" cy="45" r="15" fill="none" stroke="white" strokeWidth="2.5" opacity="0.8" />
      <path
        d="M35 45 L45 55 L65 35"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}
