import React, {ReactNode} from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

function HomeLayout({children}: {children: ReactNode}) {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default HomeLayout;
