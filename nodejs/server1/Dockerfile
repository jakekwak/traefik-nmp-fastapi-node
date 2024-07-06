FROM node:18-alpine
RUN mkdir home/node-traefik
WORKDIR /home/node-traefik
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]

# # RUN apk add git
# FROM ubuntu:20.04

# # install nodejs
# RUN apt-get -qq update
# RUN apt-get -qq upgrade --yes
# RUN apt-get -qq install curl --yes
# RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
# RUN apt-get -qq install nodejs --yes
# RUN apt-get -qq install git
# ENV NODE_OPTIONS "--max-old-space-size=2048"
# ENV PNPM_HOME  /usr/local/bin
# RUN npm install --global pnpm@latest
# # RUN pnpm env use --global 18
# RUN cd /home && git clone -b korean --single-branch https://github.com/jakekwak/learn.svelte.dev
# WORKDIR /home/learn.svelte.dev
# RUN pnpm install && pnpm update
# RUN pnpm build
# EXPOSE 4173
# CMD [ "pnpm", "preview", "--host"]