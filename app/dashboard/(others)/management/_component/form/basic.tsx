"use client";

import React from "react";
import ReactQuill from "react-quill";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {FormField, FormItem, FormMessage, FormControl} from "@/components/ui/form";
import FormInput from "@/app/dashboard/(others)/_components/form-control/form-input";
import "react-quill/dist/quill.snow.css";

function Basic({form}: {form: any}) {
  return (
    <div className="space-y-5">
      <FormField
        control={form.control}
        name="property_title"
        render={({field}) => (
          <FormItem>
            <FormControl>
              <FormInput id="property_title" label="Property Title" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="h-80 p-5 relative space-y-2 z-10">
        <div className='bg-[url("/dummymap.png")] bg-center opacity-40 h-full w-full absolute top-0 left-0 -z-10' />
        <FormField
          control={form.control}
          name="property_address"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput id="property_address" label="Property Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <Button className="bg-blue">Find Address</Button> */}
      </div>

      <div>
        <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
          Property Description
        </label>
        <FormField
          control={form.control}
          name="property_description"
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

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        <FormField
          control={form.control}
          name="price"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput id="price" label="Price" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="old_price"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput
                  id="old_price"
                  label="Old Price"
                  labelExample={"{ if any }"}
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price_prefix"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput
                  id="price_prefix"
                  label="Price Prefix"
                  labelExample="Example: Starting Form"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price_postfix"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput
                  id="price_postfix"
                  label="Price Postfix"
                  labelExample="Example: Per Month"
                  type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <label className="text-grey-200 block mb-2 text-left" htmlFor={"type"}>
            Type
          </label>
          <FormField
            control={form.control}
            name="type"
            render={({field}) => (
              <FormItem>
                <FormControl>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="rounded-md bg-white border border-grey-200 h-12  focus-visible:ring-blue">
                      <SelectValue className="capitalize" placeholder={"Select Type"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="workspace">Workspace</SelectItem>
                      <SelectItem value="shortlet">Shortlet</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="location"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput id="location" label="Location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="neighborhood"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput id="neighborhood" label="Neighborhood" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bedroom"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <FormInput id="bedroom" label="Bedroom" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

export default Basic;
