export default function FamilyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="35" cy="25" r="12" fill="currentColor" />
      <path d="M20 85 L20 60 C20 52, 26 48, 35 48 C44 48, 50 52, 50 60 L50 85 Z" fill="currentColor" />

      <circle cx="65" cy="28" r="11" fill="currentColor" opacity="0.85" />
      <path d="M52 85 L52 62 C52 55, 57 51, 65 51 C73 51, 78 55, 78 62 L78 85 Z" fill="currentColor" opacity="0.85" />

      <circle cx="35" cy="65" r="8" fill="#FCD34D" />
      <path d="M25 95 L25 82 C25 78, 29 75, 35 75 C41 75, 45 78, 45 82 L45 95 Z" fill="#FCD34D" />

      <circle cx="60" cy="68" r="7" fill="#FCA5A5" />
      <path d="M52 95 L52 84 C52 81, 55 78, 60 78 C65 78, 68 81, 68 84 L68 95 Z" fill="#FCA5A5" />
    </svg>
  );
}
