import React, {useRef} from "react";
import {EllipsisVertical, Trash2} from "lucide-react";

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

function Dropdown({id}: {id: string}) {
  const deleteBtn = useRef<HTMLButtonElement>(null);

  const showDelete = () => {
    if (deleteBtn.current) {
      deleteBtn.current.click();
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
          <DropdownMenuItem>Edit</DropdownMenuItem>
          <DropdownMenuItem>
            <button className="flex items-center gap-2" onClick={showDelete}>
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
          <Button variant={"destructive"}>Delete</Button>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button className="w-full" type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </ModalWrapper>
    </>
  );
}

export default Dropdown;
