FROM node:18
ENV TZ Asia/Tokyo

RUN npm install -g npm@9.6.5
RUN npm install -g @angular/cli

WORKDIR /app
COPY ./ /app
WORKDIR /app/luigi_app

RUN npm install
