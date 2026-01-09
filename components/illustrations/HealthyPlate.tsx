export function HealthyPlate() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <circle cx="200" cy="200" r="150" className="fill-white stroke-gray-300" strokeWidth="4" />
      <circle cx="200" cy="200" r="145" className="fill-gray-50" />

      {/* Plate sections - visual guide */}
      <path
        d="M 200 200 L 200 50 A 150 150 0 0 1 329.9 275 Z"
        className="fill-primary/20"
      />
      <text x="250" y="140" className="fill-primary text-xs font-semibold">
        Vegetables
      </text>

      <path
        d="M 200 200 L 329.9 275 A 150 150 0 0 1 200 350 Z"
        className="fill-green-200/40"
      />
      <text x="240" y="290" className="fill-green-700 text-xs font-semibold">
        Protein
      </text>

      <path
        d="M 200 200 L 200 350 A 150 150 0 0 1 70.1 275 Z"
        className="fill-amber-100/60"
      />
      <text x="100" y="290" className="fill-amber-700 text-xs font-semibold">
        Grains
      </text>

      <path
        d="M 200 200 L 70.1 275 A 150 150 0 0 1 200 50 Z"
        className="fill-blue-100/40"
      />
      <text x="100" y="140" className="fill-blue-700 text-xs font-semibold">
        Dairy
      </text>

      {/* Food items */}
      {/* Vegetables - Broccoli */}
      <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0s' }}>
        <circle cx="250" cy="100" r="8" className="fill-green-600" />
        <circle cx="245" cy="105" r="6" className="fill-green-600" />
        <circle cx="255" cy="105" r="6" className="fill-green-600" />
        <rect x="248" y="108" width="4" height="12" className="fill-green-700" rx="1" />
      </g>

      {/* Vegetables - Tomato slice */}
      <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
        <circle cx="280" cy="160" r="15" className="fill-red-400" />
        <circle cx="280" cy="160" r="10" className="fill-red-300" />
        <circle cx="278" cy="155" r="2" className="fill-red-200" />
        <circle cx="283" cy="158" r="2" className="fill-red-200" />
        <circle cx="278" cy="163" r="2" className="fill-red-200" />
      </g>

      {/* Protein - Salmon */}
      <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}>
        <ellipse cx="270" cy="280" rx="30" ry="20" className="fill-orange-300" />
        <path d="M 250 275 L 290 275 L 288 280 L 252 280 Z" className="fill-orange-400 opacity-50" />
        <path d="M 254 285 L 286 285" className="stroke-orange-400" strokeWidth="1" />
      </g>

      {/* Grains - Rice */}
      <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '1.5s' }}>
        <ellipse cx="150" cy="280" rx="35" ry="25" className="fill-amber-50" />
        <rect x="140" y="270" width="3" height="6" className="fill-amber-100" rx="1" />
        <rect x="148" y="275" width="3" height="6" className="fill-amber-100" rx="1" />
        <rect x="155" y="272" width="3" height="6" className="fill-amber-100" rx="1" />
        <rect x="145" y="280" width="3" height="6" className="fill-amber-100" rx="1" />
        <rect x="158" y="282" width="3" height="6" className="fill-amber-100" rx="1" />
      </g>

      {/* Dairy - Cheese */}
      <g className="animate-pulse" style={{ animationDuration: '3s', animationDelay: '2s' }}>
        <path
          d="M 120 140 L 140 130 L 150 150 L 130 160 Z"
          className="fill-yellow-200"
        />
        <circle cx="130" cy="142" r="3" className="fill-yellow-300" />
        <circle cx="138" cy="148" r="4" className="fill-yellow-300" />
        <circle cx="143" cy="142" r="2.5" className="fill-yellow-300" />
      </g>

      {/* Fork on the side */}
      <g transform="translate(360, 200)">
        <rect x="-2" y="-40" width="4" height="80" className="fill-gray-400" rx="2" />
        <rect x="-10" y="-50" width="4" height="15" className="fill-gray-400" rx="1" />
        <rect x="-3" y="-50" width="4" height="15" className="fill-gray-400" rx="1" />
        <rect x="4" y="-50" width="4" height="15" className="fill-gray-400" rx="1" />
      </g>
    </svg>
  );
}
