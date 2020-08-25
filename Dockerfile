FROM node:12.18.3-alpine3.12

RUN apk add --no-cache \
  bash htop

ENTRYPOINT [ "/app/entrypoint.sh" ]

WORKDIR /app
COPY app/package*.json ./
RUN npm install
