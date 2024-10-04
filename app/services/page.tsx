import React from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Wrapper from "@/components/wrapper/wrapper";

import businessImage from "../../public/business.png";
import clientImage from "../../public/client.png";

function Page() {
  return (
    <div>
      <Header />
      <main className="pb-16">
        <section>
          <Wrapper className="py-10 pb-20">
            <article className="pb-24">
              <h1 className="font-medium text-lg mb-8">Welcome to SpacesNG!</h1>
              <p className="leading-loose">
                We&apos;re excited to help you find the perfect workspace or shortlet solution for
                your business. <br />
                Explore our suite of categories and experience the best of SpacesNG.
              </p>
            </article>
            <div className="grid grid-cols1 sm:grid-cols-2 gap-14 sm:gap-10 md:gap-16 lg:gap-20">
              <div className="relative drop-shadow-[0px_2px_24.23px_rgba(0,0,0,0.08)]">
                <Image alt="A woman smiling" className="w-full" src={businessImage} />
                <Link className="service-link" href="/auth/business">
                  Business
                </Link>
              </div>
              <div className="relative drop-shadow-[0px_2px_24.23px_rgba(0,0,0,0.08)]">
                <Image alt="A woman smiling" className="w-full" src={clientImage} />
                <Link className="service-link" href="/auth/client/signin">
                  Client
                </Link>
              </div>
            </div>
          </Wrapper>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
