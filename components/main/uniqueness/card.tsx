import React, {FC} from "react";

function DifferentCard({Icon, title, note}: {Icon: FC; title: string; note: string}) {
  return (
    <li className="space-y-2 md:space-y-5">
      <div className="bg-[#2387C0]/30 h-20 sm:h-24 w-20 sm:w-24 rounded-full p-2 max-sm:mx-auto">
        <div className="h-full w-full rounded-full grid place-content-center bg-[#2387C0]">
          <Icon />
        </div>
      </div>
      <h4 className="font-semibold text-xl sm:text-2xl text-[#242527]">{title}</h4>
      <p className="text-[#707070] max-sm:text-sm">
        <span className="leading-loose">{note}</span>
      </p>
    </li>
  );
}

export default DifferentCard;
