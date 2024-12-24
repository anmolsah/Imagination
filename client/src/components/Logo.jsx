import React from "react";

const Logo = () => {
  return (
    <div className="relative flex items-center p-4">
      <div className="relative">
        <div className="absolute -left-2 top-1/2 w-8 h-16 -translate-y-1/2">
          <div className="absolute w-full h-full bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute w-full h-full bg-purple-400/30 rounded-full blur-lg animate-pulse delay-75"></div>
        </div>

        <div className="absolute -right-2 top-1/2 w-8 h-16 -translate-y-1/2">
          <div className="absolute w-full h-full bg-teal-400/30 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute w-full h-full bg-indigo-400/30 rounded-full blur-lg animate-pulse delay-100"></div>
        </div>

        <h1 className="text-3xl font-bold tracking-wide">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            imagi
          </span>
          <span className="bg-gradient-to-r from-indigo-500 via-teal-500 to-blue-500 text-transparent bg-clip-text">
            NATION
          </span>
        </h1>

        <div className="absolute -bottom-2 left-0 w-full text-3xl font-bold tracking-wide text-gray-200 blur-sm opacity-60">
          imagiNATION
        </div>
      </div>
    </div>
  );
};

export default Logo;
