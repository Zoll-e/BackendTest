const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const jasonbourne = await prisma.author.upsert({
      where: { name: "some fancy ndame" },
      update: {},
      create: {
        name: "Tomi Hanks",
        posts: {
          create: [
            {
              title: "first",
              body: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            },
            {
              title: "second",
              body: `I'm not a great programmer; I'm just a good programmer with great habits.`,
            },
          ],
        },
      },
    });

    console.log("Create 1 author with 2 quotes: ", jasonbourne);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
