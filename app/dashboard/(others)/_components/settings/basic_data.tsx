import {Edit3} from "lucide-react";
import React, {FormEvent, useState} from "react";
import {toast} from "sonner";

import {Button} from "@/components/ui/button";
import {useUpdateProfile} from "@/api/profile/update-profile";
import Loader from "@/components/loader/loader";

import FormControl from "../form-control/form-input";

function BasicData({prevValue, objKey, label}: {prevValue: string; objKey: string; label: string}) {
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(prevValue);
  const {mutateAsync: profileUpdate, isPending: isUpdating} = useUpdateProfile();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    profileUpdate({[objKey]: value}).then(() => {
      toast.success("Profile updated successfully");
      setEdit(false);
    });
  };

  return (
    <li className="flex items-center justify-between">
      {!edit ? (
        <>
          <span className="capitalize">
            {label}: {value}
          </span>
          <button
            className="text-blue hover:scale-105 transition-all"
            onClick={() => setEdit(true)}
          >
            <Edit3 size={18} />
          </button>
        </>
      ) : (
        <form className="flex flex-col items-stretch gap-2 w-full" onSubmit={handleSubmit}>
          <FormControl
            id={objKey}
            label={objKey}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex gap-1 justify-end">
            <Button
              className="bg-blue hover:bg-blue/80 transition-all"
              disabled={prevValue === value || !value || isUpdating}
            >
              {isUpdating ? <Loader /> : "Update"}
            </Button>
            <Button
              className="bg-red transition-all"
              disabled={isUpdating}
              onClick={() => setEdit(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </li>
  );
}

export default BasicData;
