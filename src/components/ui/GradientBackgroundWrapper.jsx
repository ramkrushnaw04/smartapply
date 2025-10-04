import React from 'react';

export const GradientBackgroundWrapper = ({ children }) => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #f1f5f9, #ffffff, #e2e8f0, #cbd5e1, #f8fafc)'
      }}
    >
      {children}
    </div>
  );
};
