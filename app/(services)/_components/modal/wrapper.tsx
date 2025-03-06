"use client";

import React, {ReactNode, useEffect} from "react";

function Wrapper({children}: {children: ReactNode}) {
  useEffect(() => {
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-20 h-screen rounded-md p-4 flex items-center justify-center">
      <div className="h-full w-full absolute bg-black/30" />
      {children}
    </div>
  );
}

export default Wrapper;
