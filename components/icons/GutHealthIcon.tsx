export default function GutHealthIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M45 15 C42 15, 40 18, 40 22 L40 35 C40 38, 38 40, 35 42 C28 46, 25 50, 25 58 C25 68, 30 75, 35 78 C38 80, 40 82, 40 86 L40 95"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M55 15 C58 15, 60 18, 60 22 L60 35 C60 38, 62 40, 65 42 C72 46, 75 50, 75 58 C75 68, 70 75, 65 78 C62 80, 60 82, 60 86 L60 95"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      <circle cx="35" cy="58" r="4" fill="#22C55E" />
      <circle cx="65" cy="58" r="4" fill="#22C55E" />
      <circle cx="45" cy="65" r="3" fill="#4ADE80" />
      <circle cx="55" cy="65" r="3" fill="#4ADE80" />

      <path d="M42 50 Q50 48, 58 50" stroke="#22C55E" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}
