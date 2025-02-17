import react, { ReactNode } from "react";

type Props = {
  left: ReactNode;
  right: ReactNode;
};

export const Layout = ({left, right}: Props) => {
  return (
    <div className="flex h-screen">
      {/* Left side */}
      <div className="w-1/4 max-h-screen overflow-y-auto">
        {left}
      </div>
      {/* Right side */}
      <div className="w-3/4">
        {right}
      </div>
    </div>
  );
};
