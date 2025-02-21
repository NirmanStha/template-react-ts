import { cn } from "@/lib/utils";
import React from "react";
interface ContainerProps {
  classNames?: string;
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ classNames, children }) => {
  return (
    <div
      className={cn(
        "px-4 lg:px-5 xl:px-6 mx-auto w-full bg-red-600",
        classNames
      )}
    >
      {children}
    </div>
  );
};

export default Container;
