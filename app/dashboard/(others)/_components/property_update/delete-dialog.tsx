"use client";

import {Trash2} from "lucide-react";
import React, {useState} from "react";

import {useDeleteProperty} from "@/api/property/delete-property";
import Wrapper from "@/app/(services)/_components/modal/wrapper";
import Loader from "@/components/loader/loader";
import {Button} from "@/components/ui/button";

function DeleteDialog({id}: {id: string}) {
  const {mutate, isPending} = useDeleteProperty();
  const [showDialog, setShowDialog] = useState(false);
  const closeDialog = () => setShowDialog(false);

  const confirmDelete = async () => {
    mutate(id);
  };

  return (
    <>
      <button onClick={() => setShowDialog(true)}>
        <Trash2 size={16} />
      </button>
      {showDialog && (
        <Wrapper>
          <div className="bg-white px-8 py-10 max-w-full rounded-md z-10 space-y-5">
            <h3 className="text-xl text-center font-medium text-black">
              This Action Cannot be undone
            </h3>
            <div className="flex flex-col gap-3">
              <Button className="bg-red" onClick={confirmDelete}>
                {isPending ? <Loader /> : "Confirm Delete"}
              </Button>
              <Button onClick={closeDialog}>Cancel</Button>
            </div>
          </div>
        </Wrapper>
      )}
    </>
  );
}

export default DeleteDialog;
