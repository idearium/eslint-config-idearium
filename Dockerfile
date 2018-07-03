FROM node:6-alpine

ARG CF_BRANCH
ARG CF_PULL_REQUEST_TARGET
ARG CF_REPO_NAME
ARG CODEFRESH
ARG IS_TAG

# Only install packages if there is an update.
COPY /package.json /yarn.lock /app/
WORKDIR /app
RUN yarn global add idearium/greenkeeper-lockfile#c0c207a45269d80e5565bda07e4bde391d5be45a && \
    greenkeeper-lockfile-update && \
    yarn --production && \
    greenkeeper-lockfile-upload

COPY / /app
