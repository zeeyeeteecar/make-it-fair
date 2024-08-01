import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function fetch_answerList() {
  const prisma = new PrismaClient();
  const response = await prisma.tbl_MakeItFair_2024.findMany();
  revalidatePath("makeItFair");
  return response;
}

