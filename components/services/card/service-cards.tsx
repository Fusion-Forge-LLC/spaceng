import React from "react";

function Servicecards({note, title, Icon}: {note: string; title: string; Icon: React.FC}) {
  return (
    <li className="border border-grey-100 p-3 space-y-3">
      <span className="grid place-content-center h-14 w-14 bg-blue rounded-full">
        <Icon />
      </span>

      <h4 className="text-xl font-medium">{title}</h4>

      <p className="">{note}</p>
    </li>
  );
}

export default Servicecards;
