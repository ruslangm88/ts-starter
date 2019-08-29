# ready-set-TS-Jest-Lint
> Ready set to be used for new projects from Cubik's Team.

## Includes

1. Typescript
2. Jest
3. TSLint
4. Dotenv
5. Nodemon

## Who to use

Every time that a new project needs to be created, follow the next steps:

1. Copy the url from this git repo.
2. Use this url to create a base project in your local machine, setting the name for the new project:
```
git clone https://github.ibm.com/Cubik/ready-set-TS-Jest-Lint.git $NEW_PROJECT_NAME
```
3. After the project has been clone, get inside the project folder
4. Once inside the project remove the `.git` folder with the follow command:
```
rm -rf .git
```
5. Now your project is not linked with any git repo
6. Open the 'packget.json' file and change the information to be related with yours new project, like:
``` 
    "name": "functional-es6",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "author": "",
    "license": "ISC",
```

## Basic npm commands to run you project

### npm run build
Removes the `dist` folder, runs the lint command and transpile the Typescript to javaScript

### npm run clean
Removes the `dist` folder

### npm start
Runs the javaScript file `app.js` inside de `/dist` folder, using `node` preloading the dotenv packet 

### npm test
Runs the jest set of tests, generating the coverage report

### npm run watch-test
Runs the jest set of tests, generating the coverage report with the `--watch` flag set

### npm run watch-ts
Runs the transpile form .ts file to .js in the `watch` mode

### npm run watch-node
Run the javaScript file `app.js` inside de `/dist` folder, using `nodemon` instead of `node`, preloading the dotenv packet 

> Important: To make the development easy, eu should run the commands `npm run watch-ts` and `npm run watch-node` simultaneously in different terminals

### npm run coverage
Opens the browser with de coverage report from yours last test with `jest`

### npm run lint
Runs the lint on your code

## Remember:
> You can fail, but fail fast