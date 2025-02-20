import React from "react";
import { cn } from "@/lib/utils";
import { ImgPropsType } from "@/components/propsTypes/ImgPropsType";

const ImgComponent: React.FC<ImgPropsType> = ({
  size,
  imageHeight,
  imageWidth,
  className,
  imageSrc,
  imgClassName,
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      {typeof imageSrc === "string" ? (
        <img
          src={imageSrc}
          alt="img"
          className={cn(
            // "object-cover object-center",
            imgClassName,
            !size && !imageHeight && !imageWidth
              ? "h-auto w-auto"
              : size
              ? `w-${size} h-${size}`
              : imageHeight && imageWidth
              ? `h-[${imageHeight}] w-[${imageWidth}]`
              : ""
          )}
        />
      ) : (
        imageSrc
      )}
    </div>
  );
};

export default ImgComponent;
