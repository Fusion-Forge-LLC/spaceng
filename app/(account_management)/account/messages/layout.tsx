import React, {ReactNode} from "react";

import Header from "../(others)/_components/header/header";

function MessageLayout({children}: {children: ReactNode}) {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className={`mx-auto relative flex-1 w-full px-5 lg:px-24 pt-5`}>{children}</div>
    </div>
  );
}

export default MessageLayout;
