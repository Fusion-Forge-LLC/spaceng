import React from "react";

import Loader from "@/components/loader/loader";

interface PrimaryAuthButtonProps {
  buttonName: string;
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const PrimaryAuthButton: React.FC<PrimaryAuthButtonProps> = ({
  buttonName,
  className,
  onClick,
  isLoading,
  isDisabled,
}) => {
  return (
    <button
      className={` ${className} text-white font-medium bg-blue rounded-lg py-3 w-full hover:opacity-85 active:scale-95 transition-all disabled:bg-muted`}
      disabled={isLoading || isDisabled}
      onClick={onClick}
    >
      {isLoading ? <Loader /> : buttonName}
    </button>
  );
};

export default PrimaryAuthButton;
