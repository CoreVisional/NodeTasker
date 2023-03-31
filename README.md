## Note
This web application currently does not have a view since it is just created for backend uses, but page views will be implemented

## Setup
1. Clone the repository\
`git clone https://github.com/CoreVisional/NodeTasker.git`

2. Change directory into the project\
`cd NodeTasker`

3. Run the command below to install the depedencies\
`npm install`

4. Run the copy to have your own .env file\
`cp .env.example .env`

5. Create your database in MongoDB and connect to your application.

6. In your .env file, paste your connection string after the "=" symbol\
`MONGO_URI=`

## TODO
- [ ] Update controller to allow for task editing and update
- [ ] Create views for the application
- [ ] Create authentication system so each user will have their own defined tasks to manage instead