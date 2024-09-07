import {Search} from "lucide-react";
import React from "react";

import {Input} from "@/components/ui/input";

function SearchProperties() {
  return (
    <div className="bg-[#FDFDFD] relative rounded-md w-full max-w-80">
      <Input
        className="border-none shadow-none rounded-md py-4 focus-visible:ring-blue w-full h-12"
        defaultValue={"Lagos, Nigeria"}
      />
      <span className="grid place-content-center h-7 w-7 rounded-full bg-blue absolute top-1/2 right-2 -translate-y-1/2">
        <Search color="#FFF" size={14} />
      </span>
    </div>
  );
}

export default SearchProperties;
