# Herd
Have you ever wanted to join a running group, but you weren't sure who else would be there? If your skill level would be a good match? Herd answers those questions and more. Every run that you will find on Herd has detailed information about who will be in attendance, what is the target pace of the run, what kind of terrain will you be running on, and a detailed map with the exact starting location. Herd also allows you to message groups and post messages on individual runs to get all your questions answered. Can't find a running group that meets your needs? You can also make your own! Invite your friends to run with you as you train for that marathon.

![View Run](/ViewRunScreenshot.png)

## Tech/framework used
* Frontend : React Native / Redux / JavaScript / HTML / CSS
* Backend : Node.js / Express / PostgreSQL / Knex.js

## To Install
```
npm install
```
### Create psql Database
```
createdb herd_dev
```
### Seed Knex Database
```
npm run knex migrate:latest
npm run knex seed:run
```
### Start Development Server
```
npm run dev
```
### Start Production Server
```
npm start
```
## Data Structure
![Data structure](/Database.png)

## Routes
### Authorization
* GET
  * `/login`
* POST
  * `/login`

### Users
* POST
  * `/users`
* GET ALL USERS ON A RUN
  * `/runs/:runId/users`
* POST USER TO A RUN
  * `/runs/:runId/users/:userId`
* DELETE USER FROM A RUN
  * `/runs/:runId/users/:userId`
* GET ALL USERS IN A GROUP
  * `/groups/:groupId/users`
* GET LEADER OF A GROUP
  * `/groups/:groupId/users?leader=true`
* POST USER TO A GROUP
  * `/groups/:groupId/users/:userId`
* DELETE USER FROM A GROUP
  * `/groups/:groupId/users/:userId`

### Groups
* GET ALL GROUPS A USER DOESN'T HAVE
  * `users/:userId/groups?member=false`
* GET ALL OF A USER'S GROUPS
  * `/users/:userId/groups?member=true`
* GET ONE
  * `/groups/:groupId`
* POST
  * `users/:userId/groups`
* DELETE
  * `/groups/:groupId`

### Group Comments
* GET ALL COMMENTS FOR A GROUP
  * `/groups/:groupId/comments`
* POST
  * `/groups/:groupId/comments`
* DELETE
  * `/groups/:groupId/comments/:commentId`

### Runs
* GET ALL RUNS A USER DOESNT HAVE
  * `users/:userId/runs?running=false`
* GET ALL OF A USER'S RUNS
  * `/users/:userId/runs?running=true`
* GET ALL OF A GROUP'S RUNS
  * `/groups/:groupId/runs`
* GET ONE
  * `runs/:runId`
* POST
  * `/runs`
* DELETE
  * `/runs/:runId`

### Run Comments
* GET ALL COMMENTS FOR A RUN
  * `/runs/:runId/comments`
* POST
  * `/runs/:runId/comments`
* DELETE
  * `/runs/:runId/comments/:commentId`


