import { ClassroomItemCard } from "@/components/classroom-item-card";
import { mockClassroomItems } from "@/lib/mock-classroom-items";

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
            <ClassroomItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}