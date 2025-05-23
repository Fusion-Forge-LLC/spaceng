"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {ChevronDown} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Input} from "@/components/ui/input";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Loader from "@/components/loader/loader";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";
import {CouponResponse} from "@/@types/types";

import Dropdown from "./dropdown";

export const columns: ColumnDef<CouponResponse>[] = [
  {
    id: "select",
    header: ({table}) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({row}) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "createdAt",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created Date
        </Button>
      );
    },
    cell: ({row}) => {
      return (
        <div className="lowercase px-4">
          {new Date(row.getValue("createdAt")).toLocaleDateString("en-GB")}
        </div>
      );
    },
  },
  {
    accessorKey: "property",
    header: "Property",
    cell: ({row}) => {
      const property: {property_title: string} = row.getValue("property");

      return <span className="whitespace-nowrap">{property.property_title}</span>;
    },
  },
  {
    accessorKey: "code",
    header: () => <div className="whitespace-nowrap">Coupon Code</div>,
    cell: ({row}) => <span>{row.getValue("code")}</span>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="">Amount</div>,
    cell: ({row}) => {
      const amount = parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
      }).format(amount);

      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "minimum_duration",
    header: () => <div className="text-center whitespace-nowrap">Minimum Duration</div>,
    cell: ({row}) => (
      <div className="lowercase text-center">{row.getValue("minimum_duration")} Days</div>
    ),
  },
  {
    accessorKey: "expiry_date",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Expiry Date
        </Button>
      );
    },
    cell: ({row}) => {
      return (
        <div className="lowercase">
          {new Date(row.getValue("expiry_date")).toLocaleDateString("en-GB")}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({row}) => {
      const isExpired = row.getValue("is_expired");
      const isUsed = row.getValue("is_used");
      const statusText = isExpired ? "Expired" : isUsed ? "Used" : "Not Used";

      return (
        <div className="capitalize">
          <Badge
            className={cn(
              statusText === "Not Used"
                ? "bg-yellow/10 text-yellow"
                : statusText === "Used"
                  ? "bg-emerald-800/10 text-emerald-800"
                  : "bg-red/10 text-red",
              "font-medium py-1.5 shadow-none whitespace-nowrap",
            )}
          >
            {statusText}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: "menu",
    header: () => <div className="text-center">Menu</div>,
    cell: ({row}) => <Dropdown id={row.getValue("_id")} />,
  },
];

export function CouponList({
  data,
  isPending,
}: {
  data: CouponResponse[] | undefined;
  isPending: boolean;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: data || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  if (isPending) {
    return (
      <div className="py-16 grid place-content-center">
        <Loader />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="py-16 grid place-content-center">
        <span className="italic font-medium text-grey-200">Payout history empty</span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          className="max-w-sm"
          placeholder="Filter Status..."
          value={(table.getColumn("status")?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn("status")?.setFilterValue(event.target.value)}
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto" variant="outline">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    className="capitalize"
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="h-24 text-center" colSpan={columns.length}>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            size="sm"
            variant="outline"
            onClick={() => table.previousPage()}
          >
            Previous
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            size="sm"
            variant="outline"
            onClick={() => table.nextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
