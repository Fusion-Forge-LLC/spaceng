import React from "react";

import Footer from "@/components/footer/footer";

import Header from "./_components/header/header";

function AccountManagementLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      <div className={`mx-auto relative `}>{children}</div>
      <Footer />
    </>
  );
}

export default AccountManagementLayout;
