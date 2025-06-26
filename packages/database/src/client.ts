import { PrismaClient as PrismaClientSplitoise } from "../generated/splitoise";
import { PrismaClient as PrismaClientIntended } from "../generated/intended";

declare global {
  var splitoisePrisma: PrismaClientSplitoise | undefined;
  var intendedPrisma: PrismaClientIntended | undefined;
}

// Create or reuse the Prisma clients for both databases
export const splitoisePrisma =
  global.splitoisePrisma ||
  new PrismaClientSplitoise({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

export const intendedPrisma =
  global.intendedPrisma ||
  new PrismaClientIntended({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// Make the Prisma clients available globally in development mode to avoid multiple instances
if (process.env.NODE_ENV !== "production") {
  global.splitoisePrisma = splitoisePrisma;
  global.intendedPrisma = intendedPrisma;
}
