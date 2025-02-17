import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();
// async function insertUser(username: string, password: string, firstname: string, lastname: string) {
//   try{const res = await prisma.users.create({
//     data:{
//        username,
//        password,
//        firstname ,
//        lastname 
//     }
//   });
//   console.log(res)}
//   catch(error){
//     console.error("Error inserting user",error);
//   }
// }

// interface UpdateParams{
//   firstname:string
//   lastname :string
// }

// async function UpdateUser(username:string,{
//   firstname,
//   lastname
// }:UpdateParams){
//  const res = await prisma.users.update({
//     where:{username:username},
//     data:{
//       firstname,
//       lastname
//     }
//   })
//   console.log(res);

// }

async function getUser(username:string){
  const res = await prisma.users.findFirst({
    where:{
      username:username
    }
  })
  console.log(res)

}

// insertUser("Hames%7","password","JAmes","Hanks")
// UpdateUser("Hames%7",{
//   firstname:"Aakriti",
//   lastname:"Dubey"
// })

getUser("Hames%7");