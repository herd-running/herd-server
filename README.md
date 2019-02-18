# Herd
  * An easy to use application to find your perfect running group

### Deployed backend

### Deployed frontend


## Tech/framework used

* Frontend : React Native / Redux / JavaScript / HTML / CSS
* Backend : Node.js / Express / PostgreSQL / Knex.js


## To Install

```
npm install
```
### Create SQL DataBase
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
* GET ONE
  <!-- * `/users/:userId`  -->
* POST
  <!-- * `/users` -->
* GET ALL USERS ON A RUN
  <!-- * `/runs/:runId/users` -->
* POST USER TO A RUN
  <!-- * `/runs/:runId/users/:userId` -->
* DELETE USER FROM A RUN
  <!-- * `/runs/:runId/users/:userId` -->
* GET ALL USERS IN A GROUP
  <!-- * `/groups/:groupId/users` -->
* GET LEADER OF A GROUP
  <!-- * `/groups/:groupId/users?leader=true` -->
* POST USER TO A GROUP
  <!-- * `/groups/:groupId/users/:userId` -->
* DELETE USER FROM A GROUP
  <!-- * `/groups/:groupId/users/:userId` -->

### Groups
* GET ALL GROUPS A USER DOESNT HAVE
  <!-- * `users/:userId/groups?member=false` -->
* GET ALL OF A USER'S GROUPS
  <!-- * `/users/:userId/groups?member=true` -->
* GET ONE
  <!-- * `/groups/:groupId` -->
* POST
  <!-- * `users/:userId/groups` -->
* DELETE
  <!-- * `/groups/:groupId` -->
* PUT
  * `/groups/:groupId`

### Group Comments
* GET ALL COMMENTS FOR A GROUP
  * `/groups/:groupId/comments`
* POST
  * `/groups/:groupId/comments`
* DELETE
  * `/groups/:groupId/comments/:commentId`
* PUT
  * `/groups/:groupId/comments/:commentId`

### Runs
* GET ALL RUNS A USER DOESNT HAVE
  <!-- * `users/:userId/runs?running=false` -->
* GET ALL OF A USER'S RUNS
  <!-- * `/users/:userId/runs?running=true` --> -->
 * GET ALL OF A GROUP'S RUNS
  <!-- * `/groups/:groupId/runs` --> -->
 * GET ONE
  <!-- * `runs/:runId` -->
* POST
  <!-- * `/runs` -->
* DELETE
  <!-- * `/runs/:runId` -->
* PUT
  * `/runs/:runId`

### Run Comments
* GET ALL COMMENTS FOR A RUN
  * `/runs/:runId/comments`
* POST
  * `/runs/:runId/comments`
* DELETE
  * `/runs/:runId/comments/:commentId`
* PUT
  * `/runs/:runId/comments/:commentId`

