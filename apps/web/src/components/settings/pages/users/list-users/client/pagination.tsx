// "use client"

// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"

// type Props = {
//   currentPage: number
//   totalPages: number
// }

// import { setPagination } from "@/actions/server-actions"

// export function CountryPagination({ currentPage, totalPages }: Props) {
//   async function handlePageChange(page: number) {
//     await setPagination(page)
//   }

//   return (
//     <Pagination>
//     <PaginationContent>
//       {currentPage > 1 && (
//         <PaginationItem className="cursor-pointer">
//           <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
//         </PaginationItem>
//       )}

//       {[...Array(totalPages)].map((_, index) => {
//         const pageNum = index + 1
//         return (
//           <PaginationItem key={pageNum} className="rounded-lg cursor-pointer">
//             <PaginationLink
//               isActive={pageNum === currentPage}
//               onClick={() => handlePageChange(pageNum)}
//             >
//               <span>{pageNum}</span>
//             </PaginationLink>
//           </PaginationItem>
//         )
//       })}

//       {currentPage < totalPages && (
//         <PaginationItem className="cursor-pointer">
//           <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
//         </PaginationItem>
//       )}
//     </PaginationContent>
//   </Pagination>
//   )
// }
