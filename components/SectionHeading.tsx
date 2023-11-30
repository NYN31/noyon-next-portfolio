import React from 'react';

type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-medium uppercase mb-8 text-center underline underline-offset-8">
      {children}
    </h2>
  );
};

export default SectionHeading;
