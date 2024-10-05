"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

interface MessagesType {
  image: string;
  name: string;
  text: string;
}

function ChatList({messages}: {messages: MessagesType[]}) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "h-full flex flex-col overflow-hidden gap-3 px-3",
        pathname === "/dashboard/communication" ? "" : "max-[956px]:hidden",
      )}
    >
      <h3 className="text-lg font-medium">Inbox Overview</h3>

      <ul className="w-full min-[956px]:w-64 lg:w-96 flex-1 overflow-y-scroll no-scrollbar">
        {messages.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="px-3 py-2 hover:bg-grey-300/10 block rounded-lg "
                href={pathname + "/joy"}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-10 w-10 rounded-full relative overflow-hidden">
                    <Image
                      fill
                      alt="Reviewer image"
                      className="object-cover object-center"
                      src={item.image}
                    />
                  </div>
                  <h4 className="text-grey font-medium mr-auto">{item.name}</h4>
                </div>
                <p className=" text-grey-200 text-sm">{item.text}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChatList;
