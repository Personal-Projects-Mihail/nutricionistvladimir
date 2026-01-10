export default function CarrotIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="rotate(45 50 50)">
        <path
          d="M50 20 L45 10 L48 5 L50 8 L52 5 L55 10 L50 20 Z"
          fill="#22C55E"
        />
        <path
          d="M48 20 L42 12 L40 15 L43 18 Z"
          fill="#16A34A"
        />
        <path
          d="M50 25 C45 25, 40 30, 38 40 C36 50, 35 65, 37 75 C38 82, 42 88, 50 90 C58 88, 62 82, 63 75 C65 65, 64 50, 62 40 C60 30, 55 25, 50 25 Z"
          fill="currentColor"
        />
        <path d="M45 40 Q48 38, 51 40" stroke="#F97316" strokeWidth="1.5" fill="none" />
        <path d="M44 50 Q48 48, 52 50" stroke="#F97316" strokeWidth="1.5" fill="none" />
        <path d="M43 60 Q48 58, 53 60" stroke="#F97316" strokeWidth="1.5" fill="none" />
      </g>
    </svg>
  );
}
