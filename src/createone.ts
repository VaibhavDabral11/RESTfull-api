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

    const bool = { name: 'Adnan Halilovic 9', description: 'Software development things', subscribers: 600, link: 'https://www.youtube.com/c/AdnanHalilovicDev' }; 
   // const ch = { name: 'Adnan Halilovic 6', description: 'Software development things', subscribers: 555, link: 'https://www.youtube.com/c/AdnanHalilovicDev' }; 
    const res = await prisma.youtube_channels.create({
      data: bool  ,
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