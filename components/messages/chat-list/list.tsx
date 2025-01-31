import React from "react";

import ListCard from "./list-card";

const chatList = [
  {
    name: "Adaramola Lookman",
    snippet: "Hi Akin, I’ve got to tell you that t...",
    unreadCount: 2,
    time: "10:59 PM",
    profileImage: "/reviews/image1.jpg",
  },
  {
    name: "Angelina Precios",
    snippet: "Hi Akin, are you still interested in...",
    unreadCount: 1,
    time: "08:00 PM",
    profileImage: "/reviews/image4.jpg",
  },
  {
    name: "Godswill Elijah",
    snippet: "Yes, it’s still available. Please let...",
    unreadCount: 2,
    time: "11:20 AM",
    profileImage: "/reviews/image3.jpg",
  },
  {
    name: "Elona Jessica",
    snippet: "Okay, great! I’m available tomorr..",
    unreadCount: 2,
    time: "Yesterday",
    profileImage: "/reviews/image6.jpg",
  },
];

function List() {
  return (
    <ul className="w-full space-y-3">
      {chatList.map((item, index) => {
        return (
          <ListCard
            key={index}
            imageUrl={item.profileImage}
            name={item.name}
            receiverRole="client"
            senderRole="business"
            snippet={item.snippet}
            time={item.time}
            unreadCount={item.unreadCount}
          />
        );
      })}
    </ul>
  );
}

export default List;
