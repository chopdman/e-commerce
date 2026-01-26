import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("id", { header: "ID" }),
  columnHelper.accessor("title", { header: "Title" }),
  columnHelper.accessor("price", { header: "Price" }),
  columnHelper.accessor("category", { header: "Category" }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => `₹ ${info.getValue()}`,
  }),
];

export function ProductTable({ data }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <input
        value={globalFilter ?? ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search"
        className="border p-2 mb-3 w-full"
      />

      <table className="w-full border border-collapse">
        <thead>
          {table.getHeaderGroups().map((data) => (
            <tr key={data.id}>
              {data.headers.map((h) => (
                <th
                  key={h.id}
                  onClick={h.column.getToggleSortingHandler()}
                  className="p-2 cursor-pointer text-left border"
                >
                  {flexRender(h.column.columnDef.header, h.getContext())}
                  {h.column.getIsSorted() === "asc" && "^"}
                  {h.column.getIsSorted() === "asc" && "v"}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2 border">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-4 items-center ">
        <button
          className="border px-3 py-1"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          prev
        </button>
        <span>
          Page {table.getState().pagination.pageIndex + 1}of{" "}
          {table.getPageCount()}
        </span>
        <button
          className="border px-3 py-1"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          next
        </button>
      </div>
    </div>
  );
}
