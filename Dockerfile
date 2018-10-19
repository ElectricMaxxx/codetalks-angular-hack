FROM node:8

# install chrome for protractor tests
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
 && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
 && apt-get update && apt-get install -yq google-chrome-stable


# set working directory
COPY ./cfp-app/ /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN npm install
RUN npm install -g @angular/cli
RUN npm rebuild node-sass

RUN npm run json-server &

# start app
CMD ng serve --host 0.0.0.0 --watch