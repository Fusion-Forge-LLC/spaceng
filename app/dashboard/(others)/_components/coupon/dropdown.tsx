import React, {useRef} from "react";
import {Edit, EllipsisVertical, Trash2} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {DialogClose, DialogFooter} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import ModalWrapper from "@/components/ui/modals/modal-wrapper";
import {useDeleteCoupon} from "@/api/coupon/delete-coupon";
import Loader from "@/components/loader/loader";
import {CouponResponse} from "@/@types/types";

import {EditCoupon} from "./edit-coupon";

function Dropdown({data}: {data: CouponResponse}) {
  const editBtn = useRef<HTMLButtonElement>(null);
  const deleteBtn = useRef<HTMLButtonElement>(null);
  const cancelBtn = useRef<HTMLButtonElement>(null);
  const {mutateAsync: deleteCoupon, isPending} = useDeleteCoupon();

  const showDelete = () => {
    if (deleteBtn.current) {
      deleteBtn.current.click();
    }
  };

  const handleDelete = async () => {
    await deleteCoupon(data._id);
    if (cancelBtn.current) cancelBtn.current.click();
  };

  const showEdit = () => {
    if (editBtn.current) {
      editBtn.current.click();
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant={"ghost"}>
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Action</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button className="flex items-center gap-2" onClick={showEdit}>
              <Edit size={16} /> Edit
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <button className="flex items-center gap-2 text-red" onClick={showDelete}>
              <Trash2 size={16} /> Delete
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModalWrapper
        title="Delete Coupon"
        trigger={
          <Button ref={deleteBtn} className="hidden" variant={"destructive"}>
            Delete
          </Button>
        }
      >
        <div className="max-w-80 w-full mx-auto flex flex-col py-5 gap-4">
          <Button variant={"destructive"} onClick={handleDelete}>
            {isPending ? <Loader /> : "Delete"}
          </Button>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button ref={cancelBtn} className="w-full" type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </ModalWrapper>

      <EditCoupon data={data} editRef={editBtn} />
    </>
  );
}

export default Dropdown;
