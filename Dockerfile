FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY .env ./
COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 5000
CMD npm start


