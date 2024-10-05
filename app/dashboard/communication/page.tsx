import {MessageSquare} from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="flex-1 max-[956px]:hidden">
      <div className="h-full grid place-content-center">
        <MessageSquare size={190} />
      </div>
    </div>
  );
}

export default Page;
