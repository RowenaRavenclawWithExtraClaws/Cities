import React from "react";

export const CityCardList = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto p-4 space-y-4 rounded-lg shadow-inner">
      {children}
    </div>
  );
};
