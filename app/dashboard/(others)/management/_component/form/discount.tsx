import React from "react";
import {UseFormReturn} from "react-hook-form";

import {FormControl, FormDescription, FormField, FormItem, FormMessage} from "@/components/ui/form";
import FormInput from "@/app/dashboard/(others)/_components/form-control/form-input";

import {PropertySchemaType} from "./schema";

function Discount({form}: {form: UseFormReturn<PropertySchemaType, any, undefined>}) {
  const isDiscountEnabled = form.watch("enableDiscount");

  return (
    <div>
      <div className="flex items-center gap-4">
        <FormField
          control={form.control}
          name="enableDiscount"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <input
                  checked={field.value}
                  className="data-[state=checked]:border-blue data-[state=checked]:bg-blue data-[state=checked]:text-white dark:data-[state=checked]:border-blue dark:data-[state=checked]:bg-blue-blue"
                  id="enableDiscount"
                  type="checkbox"
                  onInput={() => field.onChange(!field.value)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <label htmlFor="enableDiscount">Enable discount for this property</label>
      </div>
      <div className="pt-10">
        {isDiscountEnabled && (
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="minimum_duration"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      id="minimum_duration"
                      label="Minimum Duration"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Inser the minimum duration for user to qualify for discount
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="percentage"
              render={({field}) => (
                <FormItem>
                  <FormControl>
                    <FormInput
                      id="percentage"
                      label="Percentage Discount"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Discount;
