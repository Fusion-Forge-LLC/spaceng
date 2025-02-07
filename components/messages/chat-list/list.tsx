import React from "react";

import {ChatList} from "@/api/chat/get-chatlist";
import {formatDateString} from "@/lib/utils";

import ListCard from "./list-card";

function List({chatList}: {chatList: ChatList[]}) {
  return (
    <ul className="w-full space-y-3 border h-full overflow-y-scroll">
      {chatList.map((item) => {
        return (
          <ListCard
            key={item._id}
            id={item._id}
            imageUrl={item.data.avatar}
            name={item.data.fullname}
            receiverRole={item.data.snippet.receiverRole}
            senderRole={item.data.snippet.senderRole}
            snippet={item.data.snippet.message}
            time={formatDateString(item.data.snippet.createdAt)}
            unreadCount={item.data.snippet.senderRole === "business" ? item.data.unread : 0}
          />
        );
      })}
    </ul>
  );
}

export default List;
