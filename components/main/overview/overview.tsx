import Image from "next/image";
import React from "react";

interface List {
  note?: string;
  image: string;
  showPrefix?: boolean;
}

function Overview({lists}: {lists: List[]}) {
  return (
    <div className="shadow-[0px_4px_5px_rgba(0,0,0,0.25)] bg-white p-4">
      <ul className="grid grid-cols-3 gap-8 items-end">
        {lists.map((item, index) => {
          if (item.note) {
            return <Card key={index} image={item.image} note={item?.note} />;
          } else {
            return (
              <li key={index}>
                <div className="relative aspect-[377/372]">
                  <Image fill alt="sample Image" src={item.image} />
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

function OverviewWithLabel({label, lists}: {label: string; lists: List[]}) {
  return (
    <div className="shadow-[0px_0px_5px_rgba(0,0,0,0.25)] p-4">
      <h4 className="px-8 py-2.5 bg-blue rounded-lg w-fit text-white font-semibold text-xl mb-4">
        {label}
      </h4>
      <ul className="grid grid-cols-3 gap-8">
        {lists.map((item, index) => {
          return <Card key={index} image={item.image} note={item?.note} />;
        })}
      </ul>
    </div>
  );
}

function Card({showPrefix, note, image}: List) {
  return (
    <li>
      <p className="bg-blue pt-5 text-center pb-2 px-10 text-white text-xl">
        {showPrefix && <span className="font-bold">Ideal for</span>} {note}
      </p>
      <div className="relative aspect-[377/210]">
        <Image
          fill
          alt="sample Image"
          className="drop-shadow-[0px_0px_10px_rgba(0,0,0,0.4)]"
          src={image}
        />
      </div>
    </li>
  );
}

export {Overview};
export default OverviewWithLabel;