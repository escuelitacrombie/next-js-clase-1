-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('Admin', 'Customer') NOT NULL DEFAULT 'Customer';
