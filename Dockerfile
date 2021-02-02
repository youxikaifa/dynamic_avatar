FROM node:0.12.7-wheezy

MAINTAINER YeTing "me@yeting.info"

WORKDIR /dynamic_avatar

COPY ./package.json /dynamic_avatar/

RUN npm install

COPY . /dynamic_avatar/

EXPOSE 3000

CMD node bin/www