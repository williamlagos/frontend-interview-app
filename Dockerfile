FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
COPY yarn.lock ./

RUN yarn install
# If you are building your code for production
# RUN yarn ci --omit=dev

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]
