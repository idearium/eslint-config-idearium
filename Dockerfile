FROM node:6-alpine

ARG CF_BRANCH
ARG CF_PULL_REQUEST_ACTION
ARG CF_PULL_REQUEST_TARGET
ARG CF_REPO_NAME
ARG CODEFRESH

# Only install packages if there is an update.
COPY /package.json /yarn.lock /app/
WORKDIR /app
RUN yarn global add idearium/greenkeeper-lockfile#e0537a07b90465e8c915890d1e726df76bceecd1 && \
    greenkeeper-lockfile-update && \
    yarn --production && \
    greenkeeper-lockfile-upload

COPY / /app
