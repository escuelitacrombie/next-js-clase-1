/*
  Warnings:

  - Made the column `img` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `img` VARCHAR(191) NOT NULL;
