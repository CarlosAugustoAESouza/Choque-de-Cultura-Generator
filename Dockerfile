FROM node:4.3.2

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install --global npm@3.7.5

ENV HOME=/home/app

RUN npm install -g nodemon@1.11.0
COPY package.json $HOME/choque-de-cultura-generator/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/choque-de-cultura-generator
RUN npm cache clean && npm install --silent --progress=false

USER root
COPY . $HOME/choque-de-cultura-generator
RUN chown -R app:app $HOME/*

USER app
CMD ["npm", "start"]