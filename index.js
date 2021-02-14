require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

//CREATE project scaffold
//1. execute 'npm init -y' to start the project *
//2. create your index.js file *
//3. create your api and database directories *
//4. in your api directory, create server.js *
//5. in your api directory, create the users and auth directories *
//6. in your users directory, create your users-router.js file and users-model.js file *
//7. in your auth directory, create your auth-router.js file *
//8. in your database directory, create your connection.js file *
//9. build out your index.js file *
//10. build out your server.js file *
//11. connect your server.js and index.js file *
//12. in your server.js file, create your router variables and mount the routes. *
//13. create your users-model.js file and connect it to users-router.js file 
//14. connect users-model.js file to connection.js file
//15. create auth-router.js file and connect it to users-model.js file 
//16. test everything here, find and fix errors you see. 
//17. import dependencies 
//18. execute 'npx knex init' to add the knexfile.js file 
//19. update the knexfile.js file 
//20. build out the up and down stubs of the migration file
//21. create seed files 
//22. execute 'npx knex migrate:make create-tables'

//PROJECT 
//1. execute 'npm install' 
//2. execute 'npm install jsonwebtoken'
//3. import jwt at the top of your auth-router.js file, like the following
// const jwt = require('jsonwebtoken');
//4. execute 'npx knex migrate:latest'
//5. create generateToken() function and pass in the user object 
//6. create config directory under api
//7. in config directory, create secrets.js file 
//8. in secrets.js file, create the following: 
/**
 *  module.exports = {
    jwtSecret: process.env.JWT_SECRET ?? 'keep it secret'
}
 * */
//9. in auth-router file, create secrets variable that points to the secret file
//const secrets = require('../config/secrets.js');
//10. inside of the scope of the generateToken() function, add the following
/**
 * const payload = {}
 * const options = {}
 * const token = {} this one has the secret 
 * returns token
 */
//10. in auth-router.js, inside of the login method, in the try and in the first if statement, 
// add const token = generateToken(user);
//11. pass the token into the json message of the 200 status response 
// res.status(200).json({ message: `welcome ${user.username}`, token })
//12. create a .env file at the root
//13. inside of the .env file, add the following:
//JWT_SECRET=keep it secret, this can be anything you deem necessary
//14. in the auth directory, create the restricted-middleware.js file
//15. in the restricted-middleware.js file, add varialbes for the jssonwebtoken and the secret
/**
 * const jwt = require('jsonwebtoken');
    const secret = process.env.JWT_SECRET;
 */
//16. in the restricted-middleware.js file, build out the module.exports function 
// get the token from out of the requests of the header 
// const token = req.headers?.authorization?split(' ')[1] 
//17. next, build out the rest of the method to check for the token with a if statement and complete
// the try/catch
//18. in the auth directory, create the check-role-middleware.js file
//19. the check-role-middleware.js file should have a mathod that has role passed in and inside of the 
// method is returning a fuction that checks the decodedJToken for a "rolename" property
//20. padd check-role-middleware.js into the users-router.js file and add it to the get request 
// the same way you would as middleware. 
//21. 