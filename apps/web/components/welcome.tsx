"use client";

import { Button } from "@repo/ui/components/button";
import HelloWorld from "@/components/hello-world";
import Image from "next/image";
import CreateUser from "@/components/create-user";
import ListUsers from "@/components/list-users";

export function Welcome() {
  return (
    <div className="max-w-4xl w-full space-y-12 text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
            Turbo Nest Prisma
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern, full-stack starter kit built with Turborepo, Next.js,
          TailwindCSS, Shadcn, NestJS, and Prisma
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Next.js",
            description: "Fast, modern React framework with hybrid rendering",
            icon: "/nextjs.svg",
          },
          {
            title: "NestJS",
            description: "Progressive Node.js framework for scalable backends",
            icon: "/nestjs.svg",
          },
          {
            title: "Prisma",
            description: "Next-generation ORM for type-safe database access",
            icon: "/prisma-dark.svg",
          },
          {
            title: "TailwindCSS",
            description: "Utility-first CSS framework for rapid UI development",
            icon: "/tailwindcss.svg",
          },
          {
            title: "Shadcn",
            description:
              "Beautiful, accessible UI components built with Radix UI",
            icon: "/shadcn-dark.svg",
          },
          {
            title: "Turborepo",
            description:
              "High-performance build system for JavaScript/TypeScript codebases",
            icon: "/turborepo.svg",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="border rounded-lg p-6 flex flex-col items-center bg-card hover:shadow-md transition-shadow"
          >
            <div className="mb-4">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={32}
                height={32}
                priority
              />
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://github.com/bernardogazola/turbo-nest-prisma"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="lg">
            View on GitHub
          </Button>
        </a>
        <HelloWorld />
        <CreateUser />
        <ListUsers />
      </div>
    </div>
  );
}
