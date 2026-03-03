import cenderroIcon from "@/assets/cenderro-icon.png";

interface CenderroLogoProps {
  size?: number;
  className?: string;
}

const CenderroLogo = ({ size = 32, className = "" }: CenderroLogoProps) => (
  <img
    src={cenderroIcon}
    alt="Cenderro logo"
    width={size}
    height={size}
    className={className}
  />
);

export default CenderroLogo;
