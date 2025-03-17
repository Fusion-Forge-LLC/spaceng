import {MessageSquare} from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="flex-1 max-[956px]:hidden bg-grey-100/20">
      <div className="h-full grid place-content-center">
        <div className="flex items-center flex-col">
          <MessageSquare size={50} />
          <h4 className="text-center">No message selected yet</h4>
        </div>
      </div>
    </div>
  );
}

export default Page;
