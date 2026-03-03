interface CenderroLogoProps {
  size?: number;
  className?: string;
}

const CenderroLogo = ({ size = 32, className = "" }: CenderroLogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Cenderro logo"
  >
    {/* Outer circle */}
    <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="10" fill="none" />
    {/* Inner circle (partial, top arc) */}
    <path
      d="M 40 100 A 60 60 0 0 1 160 100"
      stroke="currentColor"
      strokeWidth="10"
      fill="none"
    />
    {/* Inner circle (partial, bottom arc) */}
    <path
      d="M 40 100 A 60 60 0 0 0 160 100"
      stroke="currentColor"
      strokeWidth="10"
      fill="none"
    />
    {/* Zigzag / Mountain M shape */}
    <path
      d="M 35 130 L 70 70 L 100 110 L 130 70 L 165 130"
      stroke="currentColor"
      strokeWidth="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default CenderroLogo;
