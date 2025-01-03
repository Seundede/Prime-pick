import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:flex w-1/2 bg-black">
       
      </div>
      <div className="lg:w-1/2 w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
