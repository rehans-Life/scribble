FROM node:20-alpine as builder

WORKDIR /usr/app

ARG NEXT_PUBLIC_PROD_SOCKET_URL

ENV NEXT_PUBLIC_PROD_SOCKET_URL=${NEXT_PUBLIC_PROD_SOCKET_URL}

COPY package.json .

RUN npm install --omit=dev

COPY . .

RUN npm run build

FROM gcr.io/distroless/nodejs20-debian11

WORKDIR /usr/app

ENV NODE_ENV=production

COPY --from=builder /usr/app.next/standlone .

COPY --from=builder /usr/app/public ./public
COPY --from=builder /usr/app.next/static ./.next/static

RUN ["node", "server.js"]