# 🚀 Full-Stack Turbocharged: Next.js, NestJS, Prisma Starter Kit

![turbo-nest-prisma](https://github.com/user-attachments/assets/a43e9b72-1a9b-4575-b54d-ab96565cff84)

[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444.svg?style=for-the-badge&logo=Turborepo&logoColor=white)](https://turbo.build/)
[![NextJS](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![NestJS](https://img.shields.io/badge/NestJS-E0234E.svg?style=for-the-badge&logo=NestJS&logoColor=white)](https://nestjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748.svg?style=for-the-badge&logo=Prisma&logoColor=white)](https://prisma.io/)
[![ShadCN](https://img.shields.io/badge/shadcn/ui-000000.svg?style=for-the-badge&logo=shadcn/ui&logoColor=white)](https://ui.shadcn.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)](https://tailwindcss.com/)

**Kickstart your full-stack application development with this batteries-included monorepo starter kit!**

This repository provides a solid foundation leveraging the power of **Turborepo** for optimized build and development workflows, combined with a modern tech stack:

- **Frontend:** [Next.js](https://nextjs.org/) (App Router) with [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Tailwind CSS](https://tailwindcss.com/), and [Shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [NestJS](https://nestjs.com/)
- **Database:** [Prisma ORM](https://www.prisma.io/)

---

## ✨ Features

- **🚀 Blazing Fast Development:** Turborepo's caching and optimized task execution significantly speed up build and development times.
- **💻 Full-Stack TypeScript:** End-to-end type safety for improved code quality and developer experience.
- **🎨 Modern UI:** Leverage the power of Next.js App Router, Tailwind CSS utility classes, and pre-built Shadcn/ui components (`packages/ui`).
- **🔧 Robust Backend:** Build scalable and maintainable APIs with the modular architecture of NestJS.
- **💾 Effortless Database Management:** Prisma ORM simplifies database access, migrations, and type generation (`packages/database`).
- **📦 Monorepo Ready:** Organized structure using `apps` and `packages` conventions.

---

## 🛠️ Tech Stack

- **Monorepo:** [Turborepo](https://turbo.build/repo), [pnpm](https://pnpm.io/)
- **Frontend (`apps/web`):**
  - Framework: [Next.js](https://nextjs.org/) (App Router)
  - Styling: [Tailwind CSS](https://tailwindcss.com/)
  - Components: [Shadcn/ui](https://ui.shadcn.com/) (via `@repo/ui`)
- **Backend (`apps/api`):**
  - Framework: [NestJS](https://nestjs.com/)
- **Database (`packages/database`):**
  - ORM: [Prisma](https://www.prisma.io/)
  - (Requires a database like PostgreSQL, MySQL, SQLite - configure in `schema.prisma`)
- **Shared Packages:**
  - `@repo/ui`: Shared React UI components (using Shadcn/ui).
  - `@repo/database`: Prisma client and schema definitions.
  - `@repo/eslint-config`: Shared ESLint configuration.
  - `@repo/typescript-config`: Shared TypeScript configurations.
- **Tooling:**
  - Linting: [ESLint](https://eslint.org/)
  - Formatting: [Prettier](https://prettier.io/)
  - Type Checking: [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```
turbo-nest-prisma/
├── apps/
│   ├── api/         # NestJS backend application
│   └── web/         # Next.js frontend application
├── packages/
│   ├── database/    # Prisma schema and client
│   ├── eslint-config/ # Shared ESLint config
│   ├── typescript-config/ # Shared TypeScript config
│   └── ui/          # Shared React components (Shadcn/ui)
├── pnpm-workspace.yaml
├── package.json
└── turbo.json       # Turborepo configuration
```

---

## 🚀 Getting Started

Follow these steps to get your development environment set up.

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (Version specified in root `package.json` -> `engines.node`, e.g., >=18)
- [pnpm](https://pnpm.io/) (Version specified in root `package.json` -> `packageManager`, e.g., pnpm@9.0.0)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/) (Recommended for running a local database instance)

### 2. Clone the Repository

```bash
git clone https://github.com/bernardogazola/turbo-nest-prisma
cd turbo-nest-prisma
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Set Up Environment Variables

Environment variables are crucial for configuring database connections, API endpoints, etc.

- **Database:**

  - Create a `.env` file in `packages/database`.
  - Add your `DATABASE_URL`. Example for PostgreSQL:
    ```env
    # packages/database/.env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    ```
    _(If using the provided Docker setup, adjust accordingly, e.g., `postgresql://postgres:postgres@localhost:5432/mydb?schema=public`)_

- **Backend (`apps/api`):**

  - Create a `.env` file in `apps/api`.
  - Define the `PORT` for the NestJS server (defaults to 3001 if not set).
  - You might need to add the `DATABASE_URL` here as well.
    ```env
    # apps/api/.env
    PORT=3001
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    ```

- **Frontend (`apps/web`):**

  - Create a `.env` file in `apps/web`.
  - Define the URL for your backend API:
    ```env
    # apps/web/.env.local
    NEXT_PUBLIC_API_URL=http://localhost:3001 # Adjust port if changed in apps/api/.env
    ```

**\*Note:** Remember to add `.env*` files to your `.gitignore` to avoid committing sensitive credentials.\*

### 5. Set Up the Database

- **Using Docker (Recommended):**

  - If you don't have a `docker-compose.yml` file, create one in the root directory:

    ```yaml
    # docker-compose.yml
    version: "3.8"
    services:
      db:
        image: postgres:15
        restart: always
        environment:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: mydb
        ports:
          - "5432:5432"
        volumes:
          - postgres_data:/var/lib/postgresql/data

    volumes:
      postgres_data:
    ```

  - Start the database container:
    ```bash
    docker compose up -d
    ```

- **Manual Setup:** Ensure your database server (PostgreSQL, MySQL, etc.) is running and accessible with the credentials specified in your `DATABASE_URL`.

### 6. Run Database Migrations

Generate the Prisma Client based on your schema.

```bash
pnpm turbo db:generate
```

Apply the Prisma schema to your database:

```bash
# This command reads schema.prisma and applies changes to the database
pnpm turbo db:migrate
```

---

## 💻 Development

Run the development servers for all applications simultaneously:

```bash
pnpm turbo dev
```

- **Frontend (`apps/web`):** Accessible at [http://localhost:3000](http://localhost:3000) (or the next available port).
- **Backend (`apps/api`):** Accessible at [http://localhost:3001](http://localhost:3001) (or the port specified in `apps/api/.env`).

Turborepo will manage the processes and cache results efficiently.

## ✨ Linting and Formatting

- **Lint:** Check code for style and potential errors using ESLint.
  ```bash
  pnpm turbo lint
  ```
- **Format:** Automatically format code using Prettier.
  ```bash
  pnpm format
  ```

---

## 🧪 Type Checking

Check for TypeScript errors across the entire monorepo:

```bash
pnpm turbo check-types
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.
