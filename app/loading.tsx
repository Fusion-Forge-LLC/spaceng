import type {Metadata} from "next";

import Loader from "@/components/loader/loader";

export const metadata: Metadata = {
  title: "SpaceNG",
  description: "",
};

export default function Loading() {
  return (
    <div className="loader w-full h-screen flex items-center justify-center">
      <div>
        {/* <Loader className="mr-2 h-8 w-8 animate-spin" /> */}
        <Loader />
      </div>
    </div>
  );
}
