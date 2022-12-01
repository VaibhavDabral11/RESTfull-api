import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
      const res = await prisma.youtube_channels.findMany(
          {
              where: { 
                  subscribers: {
                      gt: 517
                  }
              }
          }
      );
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
//gt
//sl