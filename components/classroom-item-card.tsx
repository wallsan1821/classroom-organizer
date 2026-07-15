import { itemTypeLabels, statusLabels } from "@/lib/classroom-item-labels";
import type { MockClassroomItem } from "@/lib/mock-classroom-items";

type ClassroomItemCardProps = {
  item: MockClassroomItem;
};

export function ClassroomItemCard({ item }: ClassroomItemCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {itemTypeLabels[item.type]} • {item.courseName}
          </p>

          <h2 className="mt-1 text-xl font-semibold">{item.title}</h2>

          <p className="mt-2 text-sm text-gray-600">
            Prazo: {item.dueDate ?? "Sem prazo definido"}
          </p>
        </div>

        <span className="w-fit rounded-full border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
          {statusLabels[item.status]}
        </span>
      </div>

      <a
        href={item.alternateLink}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex text-sm font-medium text-blue-600 hover:underline"
      >
        Abrir no Classroom
      </a>
    </article>
  );
}