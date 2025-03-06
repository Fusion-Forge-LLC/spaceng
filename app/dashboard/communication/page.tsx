import {MessageSquare} from "lucide-react";
import React from "react";

function Page() {
  return (
    <div className="flex-1 max-[956px]:hidden">
      <div className="h-full grid place-content-center">
        <div>
          <MessageSquare size={140} />
          <h4 className="text-center">No message selected yet</h4>
        </div>
      </div>
    </div>
  );
}

export default Page;
