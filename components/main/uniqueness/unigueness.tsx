import React from "react";

import {Check, Tag, Time, Variety} from "@/components/Icons/icons";

import DifferentCard from "./card";

function Uniqueness() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
      <DifferentCard
        Icon={Variety}
        note="Spacefinda offers the widest selection of flexible spaces to meet any need."
        title="Space Variety"
      />
      <DifferentCard
        Icon={Tag}
        note="Our intuitive platform make finding and booking spaces quick, easy, and stress-free."
        title="Ease of Use"
      />
      <DifferentCard
        Icon={Time}
        note="Spacefinda helps you discover the best spaces at competitive prices."
        title="Best Value"
      />
      <DifferentCard
        Icon={Check}
        note="Whether you're looking for a temporary home or workspace, Spacefinda is your one-stop shop."
        title="Space Solution"
      />
    </ul>
  );
}

export default Uniqueness;
