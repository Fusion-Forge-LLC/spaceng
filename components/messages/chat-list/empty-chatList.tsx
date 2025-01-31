import {MessageCircleMore} from "lucide-react";
import React from "react";

function EmptyChatList() {
  return (
    <div>
      <MessageCircleMore size={32} />
      <article className="text-center">
        <h4 className="font-semibold">We couldn’t find any messages</h4>
        <p>Try removing or adjusting your filter.</p>
      </article>
      <button className="border border-grey-200 rounded-lg px-4 py-2 hover:bg-grey-200 hover:text-white">
        Clear all filter
      </button>
    </div>
  );
}

export default EmptyChatList;
