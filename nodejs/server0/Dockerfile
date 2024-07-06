FROM node:18-alpine
RUN mkdir home/node-traefik
WORKDIR /home/node-traefik
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]

# FROM node:18-alpine
# RUN apk update
# RUN apk add git
# RUN npm install -g pnpm
# RUN cd /home && git clone -b korean --single-branch https://github.com/jakekwak/kit
# RUN cd /home/kit && pnpm install
# WORKDIR /home/kit/sites/kit.svelte.dev
# RUN pnpm install && pnpm build
# EXPOSE 4173
# # CMD [ "pnpm", "preview", "--host", "0.0.0.0"]
# CMD [ "pnpm", "preview", "--host"]