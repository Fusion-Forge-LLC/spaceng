import React from "react";

import MessageCard from "./message-card";

const messages = [
  {
    text: "Good Morning Adaramola, I saw your property on here, I’m interested in the Workspace you want to rent out. Please let me know if it’s still available",
    time: "10:59 PM",
    isRead: true,
    senderRole: "client",
  },
  {
    text: "Hi Akin, I’ve got to tell you that it’s still available and I’m also available tomorrow if you want to check the space out",
    time: "11:30 PM",
    isRead: true,
    senderRole: "business",
  },
];

function MessageArea() {
  return (
    <ul className="py-5 space-y-4 px-5">
      {messages.map((item, index) => {
        return <MessageCard key={index} {...item} />;
      })}
    </ul>
  );
}

export default MessageArea;
