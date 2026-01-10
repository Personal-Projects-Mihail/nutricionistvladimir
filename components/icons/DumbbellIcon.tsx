export default function DumbbellIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="35" width="10" height="30" rx="2" fill="currentColor" />
      <rect x="80" y="35" width="10" height="30" rx="2" fill="currentColor" />

      <rect x="20" y="30" width="8" height="40" rx="2" fill="currentColor" />
      <rect x="72" y="30" width="8" height="40" rx="2" fill="currentColor" />

      <rect x="28" y="47" width="44" height="6" rx="3" fill="currentColor" />

      <circle cx="15" cy="50" r="2" fill="white" opacity="0.5" />
      <circle cx="85" cy="50" r="2" fill="white" opacity="0.5" />
    </svg>
  );
}
