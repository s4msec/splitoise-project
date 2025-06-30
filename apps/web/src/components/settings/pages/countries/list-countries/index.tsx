import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MoreInfo } from "./client/more-info";
import { CountryPagination } from "./client/pagination";

// Extrai o tipo de um item retornado por prisma.app.country.findMany()
type CountryItem = Awaited<ReturnType<typeof prisma.app.country.findMany>>[number];

export async function ListCountry() {
  const cookieStore = await cookies();
  const pageCookie = cookieStore.get("countryPage");
  const currentPage = pageCookie ? Number(pageCookie.value) : 1;

  const pageSize = 10;

  const totalCount = await prisma.app.country.count();
  const totalPages = Math.ceil(totalCount / pageSize);

  // Tipagem explícita de `countries` e carregando apenas os campos necessários
  const countries: CountryItem[] = await prisma.app.country.findMany({
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
    select: {
      id: true,
      name: true,
      redirectMessage: true,
      icon: true,
    },
  });

  return (
    <div className="h-[calc(100vh-180px)] w-full flex flex-col">
      <div className="h-full">
        <div className="rounded-lg mt-5">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px] font-bold">País</TableHead>
                <TableHead className="font-bold">Mensagem de Redirect</TableHead>
                <TableHead className="text-center font-bold">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {countries.map((country, index) => (
                <TableRow
                  key={country.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-neutral-200 dark:bg-neutral-900"
                      : "bg-neutral-300 dark:bg-transparent"
                  }`}>
                  <TableCell className="border-b dark:border-none w-[300px]">
                    <div className="flex items-center space-x-3">
                      {/* Uncomment to display icon */}
                      {/*
                      <Image
                        className="bg-neutral-800 rounded-full"
                        width={35}
                        height={35}
                        src={`/api/v1/images/${country.icon}?directory=locales`}
                        alt={country.name}
                      />
                      */}
                      <span className="text-md truncate font-bold">
                        {country.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="border-b dark:border-none">
                    <span>{country.redirectMessage}</span>
                  </TableCell>
                  <TableCell className="border-b dark:border-none w-[190px] text-center">
                    <MoreInfo />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div>
        <CountryPagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
