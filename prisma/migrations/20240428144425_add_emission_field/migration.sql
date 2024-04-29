/*
  Warnings:

  - You are about to alter the column `emission` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(4,1)`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "emission" SET DEFAULT 4.5,
ALTER COLUMN "emission" SET DATA TYPE DECIMAL(4,1);
