export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="mx-auto flex max-w-3xl flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
          Classroom Organizer
        </p>

        <h1 className="text-4xl font-bold tracking-tight">
          Organize suas atividades e materiais do Google Classroom em uma única tela.
        </h1>

        <p className="text-lg text-gray-600">
          Um organizador pessoal para estudantes acompanharem turmas, materiais,
          atividades e prazos com status próprios como pendente, fazendo,
          concluído e arquivado.
        </p>

        <div className="rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold">MVP inicial</h2>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
            <li>Login com Google</li>
            <li>Seleção de turmas do Google Classroom</li>
            <li>Dashboard com atividades e materiais</li>
            <li>Status pessoal salvo para cada item</li>
          </ul>
        </div>
      </section>
    </main>
  );
}