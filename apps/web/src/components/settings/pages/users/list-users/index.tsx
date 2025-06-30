// import { prisma } from "@/lib/prisma"
// import { cookies } from "next/headers"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import { MoreInfo } from "./client/more-info";

// import { CountryPagination } from "./client/pagination"

// export async function ListCountry() {
//   const cookieStore = await cookies()
//   const pageCookie = cookieStore.get("page")
//   const currentPage = pageCookie ? Number(pageCookie.value) : 1

//   const pageSize = 10

//   const totalCount = await prisma.app.country.count()
//   const totalPages = Math.ceil(totalCount / pageSize)

//   const countries = await prisma.app.country.findMany({
//     skip: (currentPage - 1) * pageSize,
//     take: pageSize,
//   })

//   return (
//     <div className="h-[calc(100vh-180px)] w-full flex flex-col">
//         <div className="h-full">
//             <div className="rounded-lg mt-5">
//                 <Table className="w-full">
//                     <TableHeader>
//                         <TableRow>
//                             <TableHead className="w-[200px] font-bold">País</TableHead>
//                             <TableHead className="font-bold">Mensagem de Redirect</TableHead>
//                             <TableHead className="text-center font-bold">Ações</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {countries.map((country, index) => (
//                             <TableRow key={country.id} className={`${index % 2 == 0 ? "bg-neutral-200 dark:bg-neutral-900" : "bg-neutral-300 dark:bg-transparent"}`}>
//                                 <TableCell className={`border-b dark:border-none w-[300px]`}>
//                                     <div className="flex flex-row items-center space-x-3">
//                                         <Image className="bg-neutral-800 rounded-full" width={35} height={35} src={`/api/v1/images/${country.icon}?directory=locales`} alt={country.name}/>
//                                         <span className="text-md truncate font-bold">{country.name}</span>
//                                     </div>
//                                 </TableCell>
//                                 <TableCell className={`border-b dark:border-none`}>
//                                     <span>{country.redirectMessage}</span>
//                                 </TableCell>
//                                 <TableCell className={`border-b dark:border-none w-[190px] text-center`}>
//                                     <MoreInfo />
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </div>
//         </div>
//         <div>
//             <CountryPagination currentPage={currentPage} totalPages={totalPages} />
//         </div>
//     </div>
//   )
// }
