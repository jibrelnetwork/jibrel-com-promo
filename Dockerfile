FROM node:10 AS build

RUN mkdir /app
WORKDIR /app

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: this installs the necessary libs to make the bundled version of Chromium that Puppeteer
# installs, work.
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -yq google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst ttf-freefont \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_CHROMIUM_EXECUTABLE_PATH 'google-chrome-stable'
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
COPY package.json .
RUN npm install --loglevel warn && npm cache clean --force
COPY . .

RUN npm run build

FROM nginx:alpine

ENV MAILERLITE_API_KEY=undefined
ENV MAILERLITE_API_DOMAIN='api.mailerlite.com'

RUN wget https://github.com/jibrelnetwork/dockerize/releases/latest/download/dockerize-alpine-linux-amd64-latest.tar.gz \
 && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-latest.tar.gz \
 && rm dockerize-alpine-linux-amd64-latest.tar.gz

COPY --from=build /app/dist/. /app/
COPY version.txt /app/
COPY nginx/. /etc/nginx/

COPY run.sh /bin/run.sh

RUN ["run.sh", "check"]
CMD ["run.sh", "start"]
