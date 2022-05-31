# Backend Test

## Overview

---

This is a minimal backend test made to add and retrieve posts from a postgres DB with prisma ORM.

&nbsp;
## Technologies used for the project

---

- ExpressJs
- Prisma
- Postgres
- Docker

&nbsp;
## Run the application

---

### Download project
> git clone https://github.com/Zoll-e/BackendTest

> cd into project folder
BackendTest
### Run Postgres server
>npm run db


### Start our express server and migrate schema to our DB
> npm install && npx prisma migrate dev --name init && npm start

---
&nbsp;

## Use postman to play around with it

### available routes:
#### health check
>localhost:5000/ 
#### Endpoint

>localhost:5000/posts
### methods:
#### GET - gets all posts ordered by author
#### POST - adds a new a post to the DB

---
#### Here I provide a sample JSON snippet to use:
`{ "author":"Troy Baker", "title":"Last of Us", "body":"The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective. Players use firearms and improvised weapons, and can use stealth to defend against hostile humans and cannibalistic creatures infected by a mutated fungus in the genus Cordyceps. In the online multiplayer mode, up to eight players engage in cooperative and competitive gameplay." } `
