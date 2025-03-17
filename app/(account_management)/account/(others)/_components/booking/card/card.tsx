import Image from "next/image";
import React from "react";
import Link from "next/link";

import {Badge} from "@/components/ui/badge";
import {TableCell, TableRow} from "@/components/ui/table";
import {cn} from "@/lib/utils";

import Review from "../review/review";

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
  property_id: string;
}

function Card({
  image,
  title,
  total_paid,
  checkin,
  checkout,
  duration,
  property_type,
  status,
  location,
  property_id,
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
            <h4 className="w-full whitespace-nowrap text-ellipsis overflow-hidden hover:underline">
              <Link href={`/${property_type}/${property_id}`}>{title}</Link>
            </h4>
          </div>
        </TableCell>
        <TableCell className="text-center">{property_type}</TableCell>
        <TableCell className="text-center">{duration}</TableCell>
        <TableCell className="text-center">₦{total_paid.toLocaleString()}</TableCell>
        <TableCell className="text-center whitespace-nowrap">{location}</TableCell>
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
            <Review property_id={property_id} thumbnail={image} title={title} />
          </TableCell>
        )}
      </TableRow>
    </>
  );
}

export default Card;
