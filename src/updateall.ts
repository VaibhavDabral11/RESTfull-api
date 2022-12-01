import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    try {
        const channel = {name: 'Adnan Halilovic 5', description: 'Software development things', subscribers: 601, link: 'https://www.youtube.com/c/AdnanHalilovicDev'}
        
        const res = await prisma.youtube_channels.updateMany({
            where: {
              subscribers: {
                lte: 517,
              },
            },
            data: {
                 subscribers: 1000
            }
        });

        console.log(res);
    } catch (error) {
        console.log(error);
    } finally{
       async () => {
        await prisma.$disconnect();   
       };
    }
}
main()