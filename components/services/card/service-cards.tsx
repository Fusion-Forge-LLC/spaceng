import React from "react";

function Servicecards({note, title, Icon}: {note: string; title: string; Icon: React.FC}) {
  return (
    <li className="border border-grey-100 p-3 space-y-3">
      <span className="grid place-content-center h-8 md:h-12 w-8 md:w-12 bg-grey rounded-full text-base">
        <span className="max-sm:scale-75">
          <Icon />
        </span>
      </span>

      <h4 className="lg:text-xl font-medium">{title}</h4>

      <p className="text-sm">{note}</p>
    </li>
  );
}

export default Servicecards;
