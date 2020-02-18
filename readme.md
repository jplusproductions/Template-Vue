# Template-Vue
A Vue.js Starter Template

## Requirement:
* [npm](https://www.npmjs.com/) 
* [node](https://nodejs.org/en/)
* [vue.js](https://cli.vuejs.org/)

## Client Envs
* Rename `.envs` to `.env`
* Review  `vue.config.js` and replace `APP_NAME` to your domain; This only affects the build procedure.
* Review  `vue.config.js` and update the port in `http://localhost:3000` if you are running an express server for local development. 

## Client Execution
Inside the project directory run:
```console
$ npm install
$ npm run start 
```

## Client Production
To build the project, run any of the following depending on the build service. The build will create and be placed inside the `client-production` directory but will be ignored by the `GIT` stream. 
```console
$ npm run build:dev
$ npm run build:prod
$ npm run build:stage
```
