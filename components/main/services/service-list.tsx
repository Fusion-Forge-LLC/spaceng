import React from "react";

import workspaceImage from "../../../public/services/workspace.png";
import spacesImage from "../../../public/services/spaces.png";
import shortletImage from "../../../public/services/shortlet.png";

import Card from "./card";

function ServiceList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      <Card
        image={spacesImage}
        note="Book professional meeting rooms and event spaces to impress clients and host successful gatherings."
        title="Corporate Spaces"
      />
      <Card
        image={shortletImage}
        note="Find the perfect short-term rental for your stay, from cozy apartments to stylish homes."
        title="Short-lets"
      />
      <Card
        image={workspaceImage}
        note="Discover inspiring workspaces designed to boost productivity, whether you need a hot desk or a private office."
        title="Work-spaces"
      />
    </ul>
  );
}

export default ServiceList;
