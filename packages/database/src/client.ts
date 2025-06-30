import { PrismaClient as PrismaClientSplitoise } from "../generated/splitoise";

declare global {
  var splitoisePrisma: PrismaClientSplitoise | undefined;
}

export const splitoisePrisma =
  global.splitoisePrisma ||
  new PrismaClientSplitoise({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });
  
if (process.env.NODE_ENV !== "production") {
  global.splitoisePrisma = splitoisePrisma;
}
