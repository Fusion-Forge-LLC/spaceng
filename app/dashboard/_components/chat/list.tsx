"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";
import {useGetChatList} from "@/api/chat/get-chatlist";
import Loader from "@/components/loader/loader";

function ChatList() {
  const pathname = usePathname();
  const {data, isLoading} = useGetChatList();

  if (isLoading) {
    return (
      <div
        className={cn(
          "h-full grid place-content-center overflow-hidden gap-3 px-3",
          pathname === "/dashboard/communication" ? "" : "max-[956px]:hidden",
        )}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "h-full flex flex-col overflow-hidden gap-3 px-3",
        pathname === "/dashboard/communication" ? "" : "max-[956px]:hidden",
      )}
    >
      <h3 className="text-lg font-medium">Inbox Overview</h3>

      <ul className="w-full min-[956px]:w-64 lg:w-96 flex-1 overflow-y-scroll no-scrollbar">
        {data?.data.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="px-3 py-2 hover:bg-grey-300/10 block rounded-lg "
                href={pathname + "/" + item._id}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className="h-10 w-10 rounded-full relative overflow-hidden">
                    <Image
                      fill
                      alt="Reviewer image"
                      className="object-cover object-center"
                      src={item.data.avatar}
                    />
                  </div>
                  <h4 className="text-grey font-medium mr-auto capitalize">{item.data.fullname}</h4>
                </div>
                <p className=" text-grey-200 text-sm">{item.data.snippet.message}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ChatList;
