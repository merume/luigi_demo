FROM node:18
ENV TZ Asia/Tokyo

Run npm install -g npm@9.6.5

WORKDIR /app
COPY ./ /app/

