import React from "react";

function Title({title}: {title: string}) {
  return (
    <h2 className="bg-grey text-2xl sm:text-3xl md:text-4xl text-white font-medium p-2 rounded text-center sm:w-fit mb-8">
      {title}
    </h2>
  );
}

export default Title;
