import { h } from "vue";
import { ColumnDef } from "@tanstack/vue-table";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "id",
    header: () => h("div", { class: "text-right" }, "ID"),
    cell: ({ row }) => {
      const id = Number.parseFloat(row.getValue("id"));
      return h("div", { class: "text-right font-medium" }, id);
    },
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-right" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return h("div", { class: "text-right font-medium" }, formatted);
    },
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-right" }, "Status"),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return h("div", { class: "text-right font-medium" }, status);
    },
  },
];
