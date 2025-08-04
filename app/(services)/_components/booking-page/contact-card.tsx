import {Mail, Phone, User2} from "lucide-react";
import Link from "next/link";
import {usePathname, useSearchParams, useRouter} from "next/navigation";
import React from "react";

import {useUser} from "@/context/user";
import {PropertyOwner} from "@/@types/types";

function ContactCard({vendor}: {vendor: PropertyOwner}) {
  const {User} = useUser();
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const signIn = () => {
    const params = searchParams.toString();

    sessionStorage.setItem("redirectLink", `${pathName}?${params}`);
    router.push("/auth/client/signin");
  };

  return (
    <div className="property-book">
      <div className="">
        <h4 className=" text-grey font-medium text-lg mb-4">Contact Vendor</h4>
        {User ? (
          <ul className="text-blue space-y-2">
            <li className="flex gap-2">
              <User2 />
              <span className="capitalize">{vendor.fullname}</span>
            </li>
            <li className="flex gap-2">
              <Phone />
              <Link href={`tel:${vendor.phone}`}>{vendor.phone}</Link>
            </li>
            <li className="flex gap-2">
              <Mail />
              <Link href={`mailto:${vendor.email}`}>{vendor.email}</Link>
            </li>
          </ul>
        ) : (
          <div>
            <button className="text-blue hover:underline" onClick={signIn}>
              Sign In
            </button>{" "}
            to see vendor contacts
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactCard;
