# Fetch the last version of node
FROM node:17-alpine

RUN apk add g++ make py3-pip
# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install
RUN npm i @vue/cli-service

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]

