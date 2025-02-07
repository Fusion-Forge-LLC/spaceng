import Image from "next/image";
import Link from "next/link";
import React from "react";

import {cn} from "@/lib/utils";

interface Props {
  id: string;
  imageUrl: string;
  name: string;
  time: string;
  snippet: string;
  unreadCount: number;
  senderRole: "client" | "business";
  receiverRole: "client" | "business";
}

function ListCard({
  id,
  imageUrl,
  name,
  time,
  snippet,
  unreadCount,
  senderRole,
  receiverRole,
}: Props) {
  return (
    <li className="">
      <Link
        className="flex gap-4 py-2 hover:bg-grey-200/15 border-b border-b-[#D7D7D7]"
        href={`/account/messages/${id}`}
      >
        <div className="rounded-full relative overflow-hidden h-12 w-12 shrink-0">
          <Image fill alt={`${name} profile image`} src={imageUrl} />
        </div>
        <div className="flex-1 overflow-hidden">
          <h4 className="flex items-center gap-2">
            <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis font-semibold capitalize">
              {name}
            </span>
            <span>{time}</span>
          </h4>
          <div className="flex items-center gap-2">
            <span className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
              {snippet}
            </span>
            <span
              className={cn(
                "bg-[#D7D7D7] h-5 w-5 rounded-full grid text-xs font-semibold place-content-center",
                unreadCount === 0 && "invisible",
              )}
            >
              {unreadCount}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ListCard;
