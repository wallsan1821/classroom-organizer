# Classroom Organizer

Organizador pessoal de atividades e materiais do Google Classroom para estudantes.

## Problema

Estudantes que usam Google Classroom muitas vezes precisam acompanhar atividades, materiais e prazos espalhados em várias turmas, dependendo da organização de cada professor. Isso dificulta saber o que está pendente, o que já foi feito e o que deve ser arquivado.

## Solução

O Classroom Organizer centraliza atividades e materiais do Google Classroom em uma interface única, permitindo que o estudante organize cada item com status pessoais.

## Público-alvo

Estudantes que usam Google Classroom como plataforma principal para acompanhar disciplinas, atividades, materiais e prazos.

## MVP inicial

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
- submissão de atividades pelo sistema.

## Stack planejada

- Next.js
- TypeScript
- PostgreSQL
- Prisma
- Google OAuth
- Google Classroom API

## Status do projeto

Projeto em fase inicial de planejamento e estruturação.

## Como rodar localmente

Clone o repositório:

```bash
git clone https://github.com/wallsan1821/classroom-organizer.git
cd classroom-organizer

## Documentação

- [Escopo do produto](docs/product-scope.md)
- [Checkpoints do projeto](docs/checkpoints.md)
- [Decisões do projeto](docs/decisions.md)