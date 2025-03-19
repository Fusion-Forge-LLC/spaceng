import React from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import NotFound from "@/components/not-found/not-found";

function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <NotFound />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
