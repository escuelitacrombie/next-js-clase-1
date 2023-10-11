/*
  Warnings:

  - You are about to drop the column `email` on the `seller` table. All the data in the column will be lost.
  - You are about to drop the column `hashPassword` on the `seller` table. All the data in the column will be lost.
  - You are about to drop the column `rol` on the `seller` table. All the data in the column will be lost.
  - You are about to drop the column `rol` on the `users` table. All the data in the column will be lost.
  - Added the required column `userId` to the `seller` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `seller_email_key` ON `seller`;

-- AlterTable
ALTER TABLE `seller` DROP COLUMN `email`,
    DROP COLUMN `hashPassword`,
    DROP COLUMN `rol`,
    ADD COLUMN `roleName` VARCHAR(191) NULL DEFAULT 'USER',
    ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `rol`;

-- AddForeignKey
ALTER TABLE `seller` ADD CONSTRAINT `seller_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
