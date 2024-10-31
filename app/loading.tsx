import type {Metadata} from "next";

import {Loader} from "lucide-react";

export const metadata: Metadata = {
  title: "SpaceNG",
  description: "",
};

export default function Loading() {
  return (
    <div className="loader w-full h-full centered">
      <div>
        <Loader className="mr-2 h-8 w-8 animate-spin" />
      </div>
    </div>
  );
}
