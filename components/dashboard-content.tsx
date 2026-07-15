"use client";

import { useMemo, useState } from "react";

import { ClassroomItemCard } from "@/components/classroom-item-card";
import { itemTypeLabels, statusLabels } from "@/lib/classroom-item-labels";
import type {
  ClassroomItemStatus,
  ClassroomItemType,
  MockClassroomItem,
} from "@/lib/mock-classroom-items";

type DashboardContentProps = {
  items: MockClassroomItem[];
};

type StatusFilter = ClassroomItemStatus | "ALL";
type TypeFilter = ClassroomItemType | "ALL";

const statusFilterOptions: { value: StatusFilter; label: string }[] = [
  { value: "ALL", label: "Todos os status" },
  { value: "PENDING", label: statusLabels.PENDING },
  { value: "DOING", label: statusLabels.DOING },
  { value: "DONE", label: statusLabels.DONE },
  { value: "ARCHIVED", label: statusLabels.ARCHIVED },
];

const typeFilterOptions: { value: TypeFilter; label: string }[] = [
  { value: "ALL", label: "Todos os tipos" },
  { value: "COURSE_WORK", label: itemTypeLabels.COURSE_WORK },
  { value: "MATERIAL", label: itemTypeLabels.MATERIAL },
];

export function DashboardContent({ items }: DashboardContentProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("ALL");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("ALL");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesStatus =
        statusFilter === "ALL" || item.status === statusFilter;

      const matchesType = typeFilter === "ALL" || item.type === typeFilter;

      return matchesStatus && matchesType;
    });
  }, [items, statusFilter, typeFilter]);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Status
          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as StatusFilter)
            }
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {statusFilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-medium text-gray-700">
          Tipo
          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value as TypeFilter)}
            className="rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            {typeFilterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="text-sm text-gray-600">
        {filteredItems.length} item(ns) encontrado(s)
      </p>

      {filteredItems.length > 0 ? (
        <div className="grid gap-4">
          {filteredItems.map((item) => (
            <ClassroomItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-gray-600">
          Nenhum item encontrado com os filtros selecionados.
        </div>
      )}
    </div>
  );
}