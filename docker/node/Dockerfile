FROM node:10

WORKDIR /app

RUN npm install -g nodemon

EXPOSE 8080

CMD ["nodemon", "--inspect=0.0.0.0", "server.js"]