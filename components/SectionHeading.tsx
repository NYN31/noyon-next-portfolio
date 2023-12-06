import React from 'react';

const SectionHeading: React.FC<{ heading: string }> = ({ heading }) => {
  return (
    <div className="text-3xl font-medium uppercase text-center">{heading}</div>
  );
};

export default SectionHeading;
