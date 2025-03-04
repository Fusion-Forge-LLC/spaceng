import React, {ReactNode} from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Testimony from "@/components/main/testimonials/testimony";

function HomeLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Testimony />
      <Footer />
    </div>
  );
}

export default HomeLayout;
