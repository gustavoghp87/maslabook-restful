FROM node:14

WORKDIR /app

COPY ./build /app/build

COPY package.json /app
COPY yarn.lock /app

RUN npm install --only=prod

CMD ["node", "build/server.js"]
