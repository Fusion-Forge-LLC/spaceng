import React from "react";
import ReactQuill from "react-quill";

import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import FormInput from "@/app/dashboard/(others)/_components/form-control/form-input";

function CautionFee({form}: {form: any}) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="caution_fee"
        render={({field}) => (
          <FormItem>
            <FormControl>
              <FormInput id="caution_fee" label="Caution Fee" type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div>
        <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
          Property Terms
        </label>
        <FormField
          control={form.control}
          name="property_terms"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <ReactQuill theme="snow" value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default CautionFee;
