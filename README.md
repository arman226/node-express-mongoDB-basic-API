# BASIC NODEJS x EXPRESS + MONGO DB RESTAPI PROJECT

## SET UP YOUR ENVIRONMENT

Before we get started, these items must be installed on your computer:

1. [Node JS](https://nodejs.org/en/)
2. [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)

After that, create a directory that will contain your project and follow the following steps:

1. Initialize a Node JS project by running this script: `npm init`
2. Install your project dependencies `npm install express nodemon cors dotenv mongoose body-parser`
3. In your package.json file, add a script that will run the webapi project with nodemon
```js
      "scripts": {
        "start": "nodemon app.js",
        "test": "echo \"Error: no test specified\" && exit 1"
     }

```
4. Create an `src` directory that will contain the following components:
```
   - Controller
   - Data
   - Repository
   - Routes
```
5. Create an .env file that will contain your environment variables

## RUNNING THE APP

To check if the project that you created is running properly, run the script below:

`npm run start`

and try to communicate with your server-side project using [postman](https://www.postman.com/)
