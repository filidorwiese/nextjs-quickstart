FROM node:14-buster-slim
MAINTAINER Filidor Wiese <fili@fili.nl>

ARG NODE_ENV="production"
ENV NEXT_TELEMETRY_DISABLED 1

# Add timezone information
RUN echo "Europe/Amsterdam" > /etc/timezone
ENV TZ Europe/Amsterdam

# Install base dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
        curl wget git ncat nano less dnsutils ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /home/app/

COPY --chown=node:node package.json yarn.lock /home/app/
RUN yarn install --frozen-lockfile --production=false

# Copy files
COPY --chown=node:node . /home/app/

# Build nextjs project
RUN yarn run build

# Start nextjs project
CMD yarn run start

EXPOSE 3000
