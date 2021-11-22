# Expense Tracker #
## Introduction ##
This is a code repository for an expense tracker. The expense tracker is an easy-to-use application that records all your monthly expenses which you can add, edit and delete them at anytime. Your expense costs are also displayed by charts using charts.js. The following is the application stack that was used to make this application:
* ReactJS
* Redux
* Node.js
* MongoDB (Cloud Atlas)

## Usage ##
* After downloading this project you will first want to install all the dependencies. You can do this by typing 'npm install' in both the /server and /client directories.
* Since MongoDB was used for making this application you will need a mongoDB account https://account.mongodb.com/account/register. Once logged into your MongoDB account you will then proceed with the following steps:
    * You will first need to create a cluster.
    * After the cluster is created, you will need to add a new database user which can be found under the security section in the Database Access tab. Here you can set your username and password for which you can access your cluster.
    * Next, still under the security tab you will want to go to Network Access and click Add you IP address. 
    * Lastly, you will want to go to the Databases tab under the Deployment section and click the 'connect' button. You will be prompted to connect to your cluster, and you will need to select the connect your application option. This will then give you a connection string which you can copy and paste into /server/server.js and set the CONNECTION_URL string to your copied connection url string. 

* Next you will need a .env file to be located in your /server directory. I have provided an example .env file titled .env.example with some instructions on what it should look like. 

* Once this all done you are ready to start up the Expense Tracker! Go to /server directory and type 'npm start' and then go to the /client direction and type 'npm start' as well. Your browser should automatically open to http://localhost:3000/ the font page of the Expense Tracker. If it, doesn't you can enter http://localhost:3000/ into your browser and you should be good to start tracking your expenses! 