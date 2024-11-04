import {Edit3, Eye} from "lucide-react";
import Link from "next/link";
import React from "react";

import DeleteDialog from "./delete-dialog";

function UpdateBtn({type, id}: {type: string; id: string}) {
  return (
    <>
      <Link href={`/dashboard/management/${id}/edit`}>
        <Edit3 size={16} />
      </Link>
      <Link
        className="hover:scale-105 active:scale-95 transition-all"
        href={`/${type}/${id}`}
        target="_blank"
      >
        <Eye size={16} />
      </Link>
      <DeleteDialog id={id} />
    </>
  );
}

export default UpdateBtn;
