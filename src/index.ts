import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res = await prisma.users.create({
    data:{
       username,
       password,
       firstname ,
       lastname 
    }
  })
  console.log(res)
}

insertUser("Hames%7","password","JAmes","Hanks")