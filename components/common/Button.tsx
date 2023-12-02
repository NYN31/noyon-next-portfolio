import React from 'react';

const Button: React.FC<{ content: string }> = ({ content }) => {
  return (
    <button className="border border-gray-300 dark:border-gray-700 py-1.5 px-4 rounded-full bg-slate-700 dark:bg-[#083344] font-bold text-xs text-white dark:text-opacity-70 shadow-lg hover:scale-105">
      {content}
    </button>
  );
};

export default Button;
