FROM node:20-alpine as builder

WORKDIR /usr/app

COPY package.json .

RUN npm install --omit-dev

COPY . .

CMD [ "node", "server.js" ]

FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /usr/app

ENV NODE_ENV=production

COPY --from=builder /usr/app .

CMD [ "node", "server.js" ]