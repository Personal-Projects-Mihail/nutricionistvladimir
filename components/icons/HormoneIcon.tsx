export default function HormoneIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" />

      <circle cx="50" cy="50" r="8" fill="currentColor" />

      <g transform="rotate(0 50 50)">
        <circle cx="50" cy="20" r="6" fill="#EC4899" />
      </g>
      <g transform="rotate(120 50 50)">
        <circle cx="50" cy="20" r="6" fill="#8B5CF6" />
      </g>
      <g transform="rotate(240 50 50)">
        <circle cx="50" cy="20" r="6" fill="#06B6D4" />
      </g>

      <g className="animate-pulse" opacity="0.6">
        <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.1" />
      </g>
    </svg>
  );
}
