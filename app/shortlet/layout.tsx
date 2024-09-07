import React from "react";

import Footer from "@/components/footer/footer";

import Header from "./components/header/header";

function ShortletLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default ShortletLayout;
