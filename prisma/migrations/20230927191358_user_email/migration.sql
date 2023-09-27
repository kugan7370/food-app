/*
  Warnings:

  - You are about to drop the column `email` on the `Order` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_email_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "email",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
