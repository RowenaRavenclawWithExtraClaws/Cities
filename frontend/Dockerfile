FROM node:20 AS build

WORKDIR /app
COPY frontend/package*.json ./

RUN npm install

COPY frontend/ .

EXPOSE 4000
CMD ["npm", "start"]
