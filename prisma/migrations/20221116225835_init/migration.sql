-- CreateTable
CREATE TABLE "project" (
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "modifyPassword" TEXT NOT NULL,

    CONSTRAINT "project_pkey" PRIMARY KEY ("slug")
);

-- CreateIndex
CREATE UNIQUE INDEX "project_slug_key" ON "project"("slug");
