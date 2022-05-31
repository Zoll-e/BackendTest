# Backend Test

## Overview

---

This is a minimal backend test made to add and retrieve posts from a postgres DB with prisma ORM.

## Run the application

---
### Run Postgres server
>docker-compose up -d
### Download project
> git clone https://github.com/Zoll-e/BackendTest

### cd into project folder

### Start our express server 
> npm install && npm start

### Create schema in our DB
>npx prisma migrate dev

---

### Use postman to play around with it, here I provide a json snippet to try out(localhost:5000/posts):

---

`{ "author":"Troy Baker", "title":"Last of Us", "body":"The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus in the genus Cordyceps. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay." } `
