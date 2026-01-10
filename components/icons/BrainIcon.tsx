export default function BrainIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30 35 C30 25, 35 20, 42 20 C45 20, 48 21, 50 23 C52 21, 55 20, 58 20 C65 20, 70 25, 70 35 C70 40, 68 45, 65 48 C68 50, 70 55, 70 60 C70 70, 65 75, 58 75 C55 75, 52 74, 50 72 C48 74, 45 75, 42 75 C35 75, 30 70, 30 60 C30 55, 32 50, 35 48 C32 45, 30 40, 30 35 Z"
        fill="currentColor"
      />
      <circle cx="42" cy="35" r="4" fill="white" opacity="0.4" />
      <circle cx="58" cy="35" r="4" fill="white" opacity="0.4" />
      <path
        d="M38 50 Q42 52, 46 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      <path
        d="M54 50 Q58 52, 62 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
    </svg>
  );
}
