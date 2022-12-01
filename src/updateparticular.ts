import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const channel = { name: 'Adnan Halilovic 6', description: 'Software development things', subscribers: 601, link: 'https://www.youtube.com/c/AdnanHalilovicDev' };

    const res = await prisma.youtube_channels.update({
      where: {
        id: 23
      },
      data: {
        name: 'New channel name',
        subscribers: 2000
      },
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