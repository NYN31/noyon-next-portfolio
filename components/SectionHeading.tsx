import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className="text-3xl font-medium uppercase text-center">
      {children}
    </div>
  );
};

export default SectionHeading;
