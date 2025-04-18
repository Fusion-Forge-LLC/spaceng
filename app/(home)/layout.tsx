import React, {ReactNode} from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Testimony from "@/components/main/testimonials/testimony";
import FloatingButton from "@/components/floating-button/floating-button";

function HomeLayout({children}: {children: ReactNode}) {
  return (
    <div className="relative">
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <FloatingButton />
      <Testimony />
      <Footer />
    </div>
  );
}

export default HomeLayout;
