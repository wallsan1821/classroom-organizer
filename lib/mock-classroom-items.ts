export type ClassroomItemType = "COURSE_WORK" | "MATERIAL";

export type ClassroomItemStatus = "PENDING" | "DOING" | "DONE" | "ARCHIVED";

export type MockClassroomItem = {
  id: string;
  title: string;
  courseName: string;
  type: ClassroomItemType;
  status: ClassroomItemStatus;
  dueDate: string | null;
  alternateLink: string;
};

export const mockClassroomItems: MockClassroomItem[] = [
  {
    id: "1",
    title: "Lista 1 de SQL",
    courseName: "Banco de Dados",
    type: "COURSE_WORK",
    status: "PENDING",
    dueDate: "2026-08-15",
    alternateLink: "https://classroom.google.com/",
  },
  {
    id: "2",
    title: "Slides sobre Normalização",
    courseName: "Banco de Dados",
    type: "MATERIAL",
    status: "DOING",
    dueDate: null,
    alternateLink: "https://classroom.google.com/",
  },
  {
    id: "3",
    title: "Trabalho de Grafos",
    courseName: "Estruturas de Dados II",
    type: "COURSE_WORK",
    status: "DONE",
    dueDate: "2026-08-22",
    alternateLink: "https://classroom.google.com/",
  },
  {
    id: "4",
    title: "Texto sobre Autômatos Finitos",
    courseName: "Linguagens Formais e Autômatos",
    type: "MATERIAL",
    status: "ARCHIVED",
    dueDate: null,
    alternateLink: "https://classroom.google.com/",
  },
  {
    id: "5",
    title: "Prova antiga de Álgebra Linear",
    courseName: "Álgebra Linear",
    type: "MATERIAL",
    status: "PENDING",
    dueDate: null,
    alternateLink: "https://classroom.google.com/",
  },
  {
    id: "6",
    title: "Entrega do relatório do projeto",
    courseName: "Engenharia de Software",
    type: "COURSE_WORK",
    status: "DOING",
    dueDate: "2026-08-30",
    alternateLink: "https://classroom.google.com/",
  },
];