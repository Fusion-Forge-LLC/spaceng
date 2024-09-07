import React, {ReactNode} from "react";

function Wrapper({children}: {children: ReactNode}) {
  return (
    <div className="fixed top-0 left-0 w-full z-10 h-screen rounded-md p-4 flex items-center justify-center">
      <div className="h-full w-full absolute bg-black/30" />
      {children}
    </div>
  );
}

export default Wrapper;
