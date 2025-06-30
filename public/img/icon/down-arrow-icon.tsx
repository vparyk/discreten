import React from "react";

const DownArrowIcon: React.FC = () => {
  return (
    <svg
      className="w-8 h-8 text-white group-hover:scale-110 transition"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
};

export default DownArrowIcon;
