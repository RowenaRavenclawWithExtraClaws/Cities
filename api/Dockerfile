FROM node:20

WORKDIR /usr/src/app
COPY api/package*.json ./

RUN npm install

COPY api/ .

EXPOSE 4000
CMD ["npm", "start"]
