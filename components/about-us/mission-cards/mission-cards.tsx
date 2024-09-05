import React, {ReactNode} from "react";

function MissionCards({title, children}: {title: string; children: ReactNode}) {
  return (
    <div className="p-4 flex flex-col bg-grey text-white gap-8 rounded-md">
      <h4 className="w-3/4 mx-auto bg-blue text-center rounded-md p-2.5 text-lg font-medium">
        {title}
      </h4>
      <div className="flex-1 flex flex-col font-medium text-lg">{children}</div>
    </div>
  );
}

export default MissionCards;
