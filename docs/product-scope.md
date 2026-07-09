# Escopo do Produto — Classroom Organizer

## Nome

Classroom Organizer

## Problema

Estudantes que usam Google Classroom muitas vezes precisam acompanhar atividades, materiais e prazos espalhados em várias turmas, dependendo da organização de cada professor.

Essa fragmentação dificulta saber:

- o que está pendente;
- o que está em andamento;
- o que já foi concluído;
- o que pode ser arquivado.

## Solução proposta

O Classroom Organizer funciona como uma camada pessoal de organização sobre o Google Classroom.

A aplicação centraliza atividades e materiais em uma tela única e permite que o estudante atribua status próprios para cada item, sem alterar os dados originais do Classroom.

## Público-alvo

Estudantes que usam Google Classroom como plataforma principal para acompanhar disciplinas, atividades, materiais e prazos.

Inicialmente, o projeto será pensado para uso pessoal, mas com estrutura suficiente para futuramente atender outros estudantes.

## MVP

O MVP deve permitir que um estudante:

- faça login com Google;
- visualize suas turmas do Google Classroom;
- escolha quais turmas deseja acompanhar;
- veja atividades e materiais em uma tela única;
- marque cada item como pendente, fazendo, concluído ou arquivado;
- mantenha esses status salvos no banco de dados.

## Fora do MVP

Não fazem parte da primeira versão:

- notificações automáticas;
- integração com Google Calendar;
- IA para resumir materiais;
- planejamento automático de estudos;
- aplicativo mobile;
- área para professores;
- compartilhamento entre estudantes;
- sistema avançado de prioridade;
- submissão de atividades pelo sistema;
- deploy público completo para muitos usuários.

## Telas previstas no MVP

### Login

Tela inicial com explicação curta do projeto e botão de login com Google.

### Seleção de turmas

Tela para o usuário escolher quais turmas do Classroom deseja acompanhar.

### Dashboard

Tela principal com lista de atividades e materiais em cards simples.

Cada card deve mostrar:

- título;
- turma;
- tipo do item;
- prazo, quando existir;
- status pessoal;
- link para abrir no Classroom.

## Entidades principais

### User

Usuário autenticado com Google.

### Course

Turma importada do Google Classroom.

### TrackedCourse

Relação entre usuário e turmas que ele escolheu acompanhar.

### ClassroomItem

Item normalizado vindo do Classroom, podendo ser atividade ou material.

### UserItemStatus

Status pessoal definido pelo usuário para cada item.

## Status dos itens

- Pendente
- Fazendo
- Concluído
- Arquivado

## Ideia central

O Google Classroom continua sendo a fonte dos dados acadêmicos. O Classroom Organizer funciona como uma camada pessoal de organização, sem alterar as informações originais do Classroom.