import { prisma } from "@/lib/prisma"
import { cookies } from "next/headers"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { MoreInfo } from "./client/more-info";

import { CategoryPagination } from "./client/pagination"

export async function ListCategories() {
  const cookieStore = await cookies()
  const pageCookie = cookieStore.get("categoryPage")
  const currentPage = pageCookie ? Number(pageCookie.value) : 1

  const pageSize = 10

  const totalCount = await prisma.app.category.count()
  const totalPages = Math.ceil(totalCount / pageSize)

  const categories = await prisma.app.category.findMany({
    skip: (currentPage - 1) * pageSize,
    take: pageSize,
  })

  return (
    <div className="h-[calc(100vh-180px)] w-full flex flex-col">
        <div className="h-full">
            <div className="rounded-lg mt-5">
                <Table className="w-full">
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px] font-bold">Categoria</TableHead>
                            <TableHead className="font-bold">Descrição</TableHead>
                            <TableHead className="text-center font-bold">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {categories.map((category: Category, index: number) => (
                            <TableRow key={category.id} className={`${index % 2 == 0 ? "bg-neutral-200 dark:bg-neutral-900" : "bg-neutral-300 dark:bg-transparent"}`}>
                                <TableCell className={`border-b dark:border-none w-[300px]`}>
                                    <div className="flex flex-row items-center space-x-3">
                                        <span className="text-md truncate">{category.name}</span>
                                    </div>
                                </TableCell>
                                <TableCell className={`border-b dark:border-none`}>
                                    <span>{category.description}</span>
                                </TableCell>
                                <TableCell className={`border-b dark:border-none w-[190px] text-center`}>
                                    <MoreInfo />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
        <div>
            <CategoryPagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    </div>
  )
}
