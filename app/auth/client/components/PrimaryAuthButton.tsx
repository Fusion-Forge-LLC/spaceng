import React from "react";

interface PrimaryAuthButtonProps {
  buttonName: string;
  className?: string;
  onClick: () => void;
}

const PrimaryAuthButton: React.FC<PrimaryAuthButtonProps> = ({buttonName, className, onClick}) => {
  return (
    <button
      className={` ${className} text-white font-medium bg-blue rounded-lg py-3 w-full`}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

export default PrimaryAuthButton;
