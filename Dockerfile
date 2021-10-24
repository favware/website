FROM node:17-alpine

ENV NODE_ENV="production"
ENV PORT=2114
ENV CI=true

WORKDIR /workspace

RUN apk add --no-cache dumb-init

EXPOSE 2114

COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/
COPY --chown=node:node src/ src/

RUN yarn workspaces focus --all --production

USER node

ENTRYPOINT ["dumb-init", "--"]

CMD [ "yarn", "run", "start", "-p", "2114" ]