import React, {ReactNode} from "react";

import ChatList from "../_components/chat/list";

const messages = [
  {
    image: "/reviews/image1.jpg",
    name: "Femi Andrew",
    text: "Hi, I need a work space for a team of 10 on the 10th of September",
  },
  {
    image: "/reviews/image2.png",
    name: "Sarah Thomas",
    text: "Where can I get the Key",
  },
  {
    image: "/reviews/image3.jpg",
    name: "Femi Andrew",
    text: "Hi, I need a work space for a team of 10 on the 10th of September",
  },
  {
    image: "/reviews/image4.jpg",
    name: "Abigail Jack",
    text: "Where can I get the Key",
  },
  {
    image: "/reviews/image5.png",
    name: "George Emmanuel",
    text: "Hi, I need a work space for a team of 10 on the 10th of September",
  },
  {
    image: "/reviews/image6.png",
    name: "Femi Andrew",
    text: "Hi, I need a work space for a team of 10 on the 10th of September",
  },
];

function Layout({children}: {children: ReactNode}) {
  return (
    <div className="h-full overflow-hidden flex no-scrollbar gap-2 lg:gap-5 min-[1200px]:gap-20">
      <ChatList messages={messages} />
      {children}
    </div>
  );
}

export default Layout;
