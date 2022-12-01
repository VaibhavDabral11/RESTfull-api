app.post(`/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.json(result)
})


name , 
description,
subscribers,
link,

input ::
post
data::


import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      { name: 'Adnan Halilovic', description: 'Software development things', subscribers: 514, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
      { name: 'Adnan Halilovic 2', description: 'Software development things', subscribers: 515, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
      { name: 'Adnan Halilovic 3', description: 'Software development things', subscribers: 516, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
      { name: 'Adnan Halilovic 4', description: 'Software development things', subscribers: 517, link: 'https://www.youtube.com/c/AdnanHalilovicDev' },
    ];

    //const channel = { name: 'Adnan Halilovic 5', description: 'Software development things', subscribers: 601, link: 'https://www.youtube.com/c/AdnanHalilovicDev' }; 
    //const ch = { name: 'Adnan Halilovic 6', description: 'Software development things', subscribers: 555, link: 'https://www.youtube.com/c/AdnanHalilovicDev' }; 
    const res = await prisma.youtube_channels.createMany({
      data,
      skipDuplicates: true,
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();



const bool = { name: 'Adnan Halilovic 9', description: 'Software development things', subscribers: 600, link: 'https://www.youtube.com/c/AdnanHalilovicDev' }; 
   // const ch = { name: 'Adnan Halilovic 6', description: 'Software development things', subscribers: 555, link: 'https://www.youtube.com/c/AdnanHalilovicDev' }; 
    const res = await prisma.youtube_channels.create({
      data: bool  ,
    });




    app.get("/create", async(req, res) => {
      //  const { title, content, authorEmail } = req.body
      var bool = { name: 'VaibhavDabral', description: 'Software development things', subscribers: 1600, link: 'https://www.youtube.com/c/codewithvaibhav' };
      const one = await prisma.youtube_channels.create({
          data: bool,
  
      });
      res.json(one);
  })
  

  app.get("/users", async(req, res) => {
    const users = await prisma.youtube_channels.findMany();
    res.json(users)
});

app.get("/oneuser", async(req, res) => {
    var specificuser = await prisma.youtube_channels.findMany({
        where: {
            subscribers: {
                gt: 1000
            }

        }
    });

    res.json(specificuser);
});