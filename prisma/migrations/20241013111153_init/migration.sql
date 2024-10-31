-- CreateEnum
CREATE TYPE "UsersRoles" AS ENUM ('ADMIN', 'USER', 'CLIENT');

-- CreateTable
CREATE TABLE "users" (
    "id" STRING NOT NULL,
    "firebaseid" STRING NOT NULL,
    "phone" STRING NOT NULL,
    "role" "UsersRoles" NOT NULL,
    "email" STRING,
    "name" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_firebaseid_key" ON "users"("firebaseid");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
