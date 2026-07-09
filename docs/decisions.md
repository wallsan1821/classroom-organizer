# Decisões do Projeto

Este documento registra decisões importantes tomadas durante o desenvolvimento do Classroom Organizer.

## Decisão 1 — Público inicial

O projeto será focado inicialmente em estudantes.

A aplicação será desenvolvida primeiro para uso pessoal, mas com estrutura pensada para futuramente atender outros estudantes.

## Decisão 2 — Seleção de turmas no MVP

A seleção de turmas fará parte do MVP.

Motivo: se o usuário tiver muitas turmas antigas ou irrelevantes, o dashboard pode ficar desorganizado. Como o objetivo do projeto é organização, permitir escolher turmas acompanhadas é essencial.

## Decisão 3 — Atividades e materiais

O MVP deve organizar atividades e materiais.

A implementação será incremental:

1. listar turmas;
2. listar atividades;
3. listar materiais;
4. unificar tudo em ClassroomItem.

## Decisão 4 — Status dos itens

Os status do MVP serão:

- Pendente
- Fazendo
- Concluído
- Arquivado

O status "arquivado" foi escolhido no lugar de "ignorado" por soar mais profissional e representar melhor itens que não são relevantes no momento, mas não devem ser apagados.

## Decisão 5 — Dashboard em lista com cards

O dashboard inicial será uma lista com cards simples.

Motivos:

- é mais simples de implementar;
- funciona melhor em telas menores;
- deixa cada item mais legível;
- combina com organização pessoal;
- pode evoluir para tabela ou kanban futuramente.

## Decisão 6 — Não alterar dados do Google Classroom

O Classroom Organizer não deve alterar atividades, materiais ou turmas no Google Classroom.

A aplicação deve funcionar como uma camada pessoal de organização, salvando apenas dados próprios, como turmas acompanhadas e status dos itens.