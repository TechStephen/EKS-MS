FROM node:18-alpine

WORKDIR /app/microservice.js

COPY /app/microservice.js .

CMD ["node", "microservice.js"]