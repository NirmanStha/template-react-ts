import React from "react";
import { cn } from "@/lib/utils";
interface LogoProps {
  size?: string;
  imageHeight?: string;
  imageWidth?: string;
  className?: string;
  imageSrc: string;
  imgClassName?: string;
}
const Logo: React.FC<LogoProps> = ({
  size,
  imageHeight,
  imageWidth,
  className,
  imageSrc,
  imgClassName,
}) => {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src={imageSrc}
        alt="Logo"
        style={{
          height: imageHeight || size || "auto",
          width: imageWidth || size || "auto",
        }}
        className={cn("object-cover object-center", imgClassName)}
      />
    </div>
  );
};

export default Logo;
