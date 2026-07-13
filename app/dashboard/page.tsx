import { mockClassroomItems } from "@/lib/mock-classroom-items";

const itemTypeLabels = {
  COURSE_WORK: "Atividade",
  MATERIAL: "Material",
};

const statusLabels = {
  PENDING: "Pendente",
  DOING: "Fazendo",
  DONE: "Concluído",
  ARCHIVED: "Arquivado",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-6 py-10">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
            Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Seus itens do Classroom
          </h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Visualize atividades e materiais em uma lista única. Nesta versão,
            os dados ainda são mockados para validar a estrutura visual do MVP.
          </p>
        </div>

        <div className="grid gap-4">
          {mockClassroomItems.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
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
          ))}
        </div>
      </section>
    </main>
  );
}
