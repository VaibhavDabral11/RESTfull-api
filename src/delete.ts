import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {

    const res = await prisma.youtube_channels.delete({
      where: {
        id: 9,
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