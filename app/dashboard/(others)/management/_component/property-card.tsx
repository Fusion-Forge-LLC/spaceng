import Image from "next/image";
import Link from "next/link";
import React from "react";

import UpdateBtn from "../../_components/property_update/update-btn";

interface Props {
  image: string;
  title: string;
  location: string;
  price: number;
  status: string; //"Active" | "Pending Approval" | "Inactive";
  post_fix: string;
  id: string;
  type: string;
}

function Card({image, title, location, price, status, post_fix, id, type}: Props) {
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

      <div className="flex items-center gap-2 text-blue pt-2 pb-1">
        <h4 className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis text-grey font-medium">
          <Link className="hover:underline hover:text-blue" href={`/dashboard/management/${id}`}>
            {title}
          </Link>
        </h4>

        <UpdateBtn id={id} type={type} />
      </div>

      <ul className="text-[#6D6E78] text-xs 2xl:text-sm space-y-1">
        <li className="text-nowrap overflow-hidden text-ellipsis">Location: {location}</li>
        <li>
          Price: ₦{price.toLocaleString()} {post_fix || "per night"}
        </li>
        <li className="flex items-center gap-1">Status: {status}</li>
      </ul>
    </li>
  );
}

export default Card;
