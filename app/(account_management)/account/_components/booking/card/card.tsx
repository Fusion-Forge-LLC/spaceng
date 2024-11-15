import Image from "next/image";
import React from "react";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {TableCell, TableRow} from "@/components/ui/table";
import {cn} from "@/lib/utils";

interface Props {
  image: string;
  title: string;
  bedroom: number;
  checkin: Date;
  checkout: Date;
  duration: number;
  address: string;
  property_type: "workspace" | "shortlet";
  status: "pending" | "active" | "completed";
  location: string;
  total_paid: number;
}

function Card({
  image,
  title,
  total_paid,
  bedroom,
  checkin,
  checkout,
  duration,
  property_type,
  status,
  location,
}: Props) {
  return (
    <>
      <TableRow>
        <TableCell>
          <div className="w-[100px] overflow-hidden h-[100px] relative">
            <Image fill alt="Property image" className="object-cover" src={image} />
          </div>
        </TableCell>
        <TableCell>
          <p>{checkin.toLocaleDateString()}</p>
          <p>{checkout.toLocaleDateString()}</p>
        </TableCell>
        <TableCell>
          <div className="flex flex-col justify-between gap-4">
            <h4 className="w-full whitespace-nowrap text-ellipsis overflow-hidden">{title}</h4>
          </div>
        </TableCell>
        <TableCell className="text-center">{property_type}</TableCell>
        <TableCell className="text-center">{duration}</TableCell>
        <TableCell className="text-center">{total_paid}</TableCell>
        <TableCell className="text-center">{location}</TableCell>
        <TableCell>
          <Badge
            className={cn(
              status === "pending"
                ? "bg-yellow/10 text-yellow"
                : status === "completed"
                  ? "bg-emerald-800/10 text-emerald-800"
                  : "bg-blue/10 text-blue",
            )}
          >
            {status}
          </Badge>
        </TableCell>
        {status === "completed" && (
          <TableCell>
            <Button>Review</Button>
          </TableCell>
        )}
      </TableRow>
    </>
  );
}

export default Card;
