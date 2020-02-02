FROM node:12-alpine

WORKDIR /workspace

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc .

RUN yarn install --frozen-lockfile --link-duplicates

COPY src/ src/
COPY scripts/ scripts/

RUN yarn build

ENV PORT 2114
EXPOSE 2114

CMD [ "yarn", "start", "-p", "2114" ]