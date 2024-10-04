import React from "react";
import Link from "next/link";

import Wrapper from "../wrapper/wrapper";

function Footer() {
  return (
    <footer className="bg-grey pt-28 pb-10 text-white">
      <Wrapper>
        <div className="flex gap-20">
          <article className="space-y-4 w-2/5">
            <span className="font-medium text-lg">SpacesNG</span>
            <p className="leading-loose max-w-96">
              Experience the freedom of flexible living and working with our curated selection of
              shortlets and workspaces.
            </p>
          </article>
          <div className="flex justify-between flex-1">
            <div>
              <h4 className="font-medium text-[17px] mb-6">Services</h4>
              <ul className="space-y-5">
                <li className="hover:underline">
                  <Link href={"/shortlet"}>Shortlets</Link>
                </li>
                <li className="hover:underline">
                  <Link href={"/workspace"}>Workspaces</Link>
                </li>
                <li>Pricing</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[17px] mb-6">Legal</h4>
              <ul className="space-y-5">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/privacy-policy#terms">Terms of Use</Link>
                </li>
                <li>Copyrights</li>
                <li>Trademarks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[17px] mb-6">About Us</h4>
              <ul className="space-y-5">
                <li>Terms</li>
                <li>Help Center</li>
                <li>Cancellation Policy</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-20 text-sm">&#169; SpaceNG2024 designed by George, All Rights Reserved.</p>
      </Wrapper>
    </footer>
  );
}

export default Footer;
