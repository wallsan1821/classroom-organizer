import type {
  ClassroomItemStatus,
  ClassroomItemType,
} from "@/lib/mock-classroom-items";

export const itemTypeLabels: Record<ClassroomItemType, string> = {
  COURSE_WORK: "Atividade",
  MATERIAL: "Material",
};

export const statusLabels: Record<ClassroomItemStatus, string> = {
  PENDING: "Pendente",
  DOING: "Fazendo",
  DONE: "Concluído",
  ARCHIVED: "Arquivado",
};