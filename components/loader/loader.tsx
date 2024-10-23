import React from "react";

import {cn} from "@/lib/utils";

function Loader({className}: {className?: string}) {
  return (
    <span
      className={cn(
        "h-5 w-5 block rounded-full border-2 border-white border-t-blue mx-auto animate-spin",
        className,
      )}
    />
  );
}

export default Loader;
