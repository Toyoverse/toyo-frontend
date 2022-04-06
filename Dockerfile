FROM node:14.19.1-bullseye

EXPOSE 3000

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./
RUN apt update
RUN apt-get -y install python
RUN npm install
RUN npm install react-scripts@4.0.3

COPY . ./

CMD ["npm", "start"]