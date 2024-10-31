import {Edit3, Eye, Trash2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  location: string;
  price: number;
  status: string; //"Active" | "Pending Approval" | "Inactive";
  post_fix: string;
  id: string;
}

function Card({image, title, location, price, status, post_fix, id}: Props) {
  return (
    <li>
      <Link
        className="w-full aspect-[334/342] block relative overflow-hidden"
        href={`/dashboard/management/${id}`}
      >
        <Image
          fill
          alt="property image"
          className="object-cover object-center hover:scale-110 transition-all"
          src={image}
        />
      </Link>

      <div className="flex items-center gap-2 text-blue py-2">
        <h4 className="flex-1 text-lg overflow-hidden whitespace-nowrap text-ellipsis text-grey font-semibold">
          <Link className="hover:underline hover:text-blue" href={`/dashboard/management/${id}`}>
            {title}
          </Link>
        </h4>

        <button className="hover:scale-105 active:scale-90">
          <Edit3 size={16} />
        </button>
        <button className="hover:scale-105 active:scale-90">
          <Eye size={16} />
        </button>
        <button className="hover:scale-105 active:scale-90">
          <Trash2 size={16} />
        </button>
      </div>

      <ul className="text-[#6D6E78] text-sm space-y-2 md:space-y-1">
        <li>Location: {location}</li>
        <li>
          Price: ₦{price.toLocaleString()} {post_fix || "per night"}
        </li>
        <li className="flex items-center gap-1">Status: {status}</li>
      </ul>
    </li>
  );
}

export default Card;
