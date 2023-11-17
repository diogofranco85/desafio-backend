FROM node:18-alpine as base
WORKDIR /app
COPY package.json package-lock.json ./
COPY tsconfig.json ./
COPY jest.config.js ./
COPY nodemon.json ./
RUN npm install
ENV PATH=/app/node_modules/.bin:$PATH
COPY . .