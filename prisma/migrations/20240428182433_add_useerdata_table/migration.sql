-- CreateTable
CREATE TABLE "Userdata" (
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "vehicles" TEXT[],

    CONSTRAINT "Userdata_pkey" PRIMARY KEY ("email")
);

-- AddForeignKey
ALTER TABLE "Userdata" ADD CONSTRAINT "Userdata_email_fkey" FOREIGN KEY ("email") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
