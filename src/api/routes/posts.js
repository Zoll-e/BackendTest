const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//check if the site works
router.get("/", async (req, res) => {
  res.json({ message: "so far so good" });
});

//get posts
router.get("/posts", async (req, res) => {
  const allPosts = await prisma.author.findMany({
    select: {
      name: true,
      posts: {
        select: {
          title: true,
          body: true,
        },
      },
    },
  });

  res.json({
    data: allPosts,
  });
});

//add post
router.post("/posts", async (req, res) => {
  const authorName = req.body.author;
  const post = {
    title: req.body.title,
    body: req.body.body
  };
  
  if (!authorName || !post.title || !post.body) {
    return res.status(400).json({ message: "Author or post missing" });
  }

  try {
    const author = await prisma.author.findFirst({
      where: { name: authorName },
    });

    if (!author) {
        
      await prisma.author.create({
        data: {
          name: authorName,
          posts: {
            create: [{title:post.title,body:post.body}]
          },
        },
      });

      return res.json({message:"Author and post are created"});
    }

    await prisma.post.create({
      data: {
        title:post.title,body:post.body,
        author: { connect: { name: authorName } },
      },
    });
    
    return res.json({message:"Post added to existing author"});
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = router;
