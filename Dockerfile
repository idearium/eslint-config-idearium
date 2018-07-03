FROM node:6-alpine

# Setup dockerize.
ENV DOCKERIZE_VERSION v0.6.0
RUN apk add --no-cache curl openssl && \
    curl -sSL https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar -C /usr/local/bin -xzvf - && \
    apk del curl openssl

# Only install packages if there is an update.
COPY /package.json /yarn.lock /app/
WORKDIR /app
RUN yarn global add idearium/greenkeeper-lockfile#e0537a07b90465e8c915890d1e726df76bceecd1 && \
    greenkeeper-lockfile-update && \
    yarn --production && \
    greenkeeper-lockfile-upload

COPY / /app
