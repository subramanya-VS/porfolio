import "./GradientText.css";

import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"],
  animationSpeed = 5,
  showBorder = false,
}: GradientTextProps) {
const gradientStyle = {
  backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
  animationDuration: `${animationSpeed}s`,
};

return (
  <div className={`animated-gradient-text ${className}`}>
    {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
    <div className="text-content" style={gradientStyle}>{children}</div>
  </div>
);
}