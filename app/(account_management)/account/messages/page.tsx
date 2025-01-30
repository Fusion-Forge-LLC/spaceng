import React from "react";

import Header from "../(others)/_components/header/header";

function AccountManagementLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      <Header />
      <div className={`mx-auto relative `}>{children}</div>
    </div>
  );
}

export default AccountManagementLayout;
