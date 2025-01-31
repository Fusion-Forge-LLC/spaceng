import {CheckCheck} from "lucide-react";
import React from "react";

import {cn} from "@/lib/utils";

function MessageCard({
  time,
  text,
  isRead,
  senderRole,
}: {
  name?: string;
  time: string;
  text: string;
  isRead: boolean;
  senderRole: string;
  receiverRole?: "client" | "business";
}) {
  return (
    <li className={cn("flex", senderRole === "client" ? "justify-end" : "justify-start")}>
      <div className="w-full max-w-lg bg-grey-200/20 rounded-lg p-3">
        <p>{text}</p>
        <div className="flex items-center gap-2 justify-end">
          <span>{time}</span>
          {senderRole === "client" && isRead && <CheckCheck size={16} />}
        </div>
      </div>
    </li>
  );
}

export default MessageCard;
