/*
  Warnings:

  - Added the required column `categoria` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `categoria` ENUM('Ropa', 'Zapatillas', 'Collares', 'Maquillaje') NOT NULL;
