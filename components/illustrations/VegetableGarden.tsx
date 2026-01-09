export function VegetableGarden() {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Carrot */}
      <g className="animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
        <path
          d="M80 150 L85 200 L75 200 Z"
          className="fill-orange-500"
        />
        <path
          d="M80 145 L75 150 L77 147 L80 150 L83 147 L85 150 Z"
          className="fill-green-600"
        />
        <circle cx="78" cy="170" r="1" className="fill-orange-700" />
        <circle cx="82" cy="180" r="1" className="fill-orange-700" />
        <circle cx="77" cy="190" r="1" className="fill-orange-700" />
      </g>

      {/* Tomato */}
      <g className="animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '2.5s' }}>
        <circle cx="150" cy="170" r="25" className="fill-red-500" />
        <path
          d="M145 150 L150 145 L155 150 L153 155 L147 155 Z"
          className="fill-green-600"
        />
        <ellipse cx="155" cy="165" rx="3" ry="5" className="fill-red-400 opacity-50" />
      </g>

      {/* Bell Pepper */}
      <g className="animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '2.8s' }}>
        <path
          d="M220 160 Q215 180 220 200 L240 200 Q245 180 240 160 Z"
          className="fill-yellow-400"
        />
        <rect x="227" y="155" width="6" height="10" className="fill-green-600" rx="2" />
        <ellipse cx="235" cy="175" rx="4" ry="8" className="fill-yellow-300 opacity-50" />
      </g>

      {/* Broccoli */}
      <g className="animate-bounce" style={{ animationDelay: '0.9s', animationDuration: '3.2s' }}>
        <circle cx="310" cy="160" r="12" className="fill-green-600" />
        <circle cx="300" cy="165" r="10" className="fill-green-600" />
        <circle cx="320" cy="165" r="10" className="fill-green-600" />
        <circle cx="310" cy="172" r="9" className="fill-green-600" />
        <rect x="307" y="175" width="6" height="25" className="fill-green-700" rx="2" />
      </g>

      {/* Leaves floating around */}
      <g className="animate-pulse" style={{ animationDuration: '4s' }}>
        <path
          d="M50 80 Q55 75 60 80 Q55 85 50 80"
          className="fill-green-500 opacity-60"
        />
        <path
          d="M350 100 Q355 95 360 100 Q355 105 350 100"
          className="fill-green-500 opacity-60"
        />
        <path
          d="M180 50 Q185 45 190 50 Q185 55 180 50"
          className="fill-green-400 opacity-50"
        />
      </g>

      {/* Ground */}
      <ellipse cx="200" cy="220" rx="180" ry="20" className="fill-primary/20" />
    </svg>
  );
}
