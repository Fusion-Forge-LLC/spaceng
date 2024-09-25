import React from "react";

function Title({title}: {title: string}) {
  return (
    <h2 className="bg-grey text-4xl text-white font-medium p-2 rounded w-fit mb-8">{title}</h2>
  );
}

export default Title;
