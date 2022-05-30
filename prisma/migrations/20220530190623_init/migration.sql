-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "authorName" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Author" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Author_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Author_name_key" ON "Author"("name");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorName_fkey" FOREIGN KEY ("authorName") REFERENCES "Author"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
