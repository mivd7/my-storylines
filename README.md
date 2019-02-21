This is a small app where you can start a story, write one line and then ask a friend to write the next line... build in React & utilizing a GraphQL server.

Bootstrapped with Create-React-App.

# HOW TO RUN CLIENT <br>
Clone this repo, run $ yarn install and $ yarn start <br>

# HOW TO RUN SERVER <br>
CD into server directory and run '$yarn install' <br>
Make sure you have Prisma installed globally (more info & docs: http://prisma.io/) <br>
Make sure you have Docker installed and running <br><br>
Then start the docker containers by running $ docker-compose up -d. This automatically starts 2 docker containers running GraphQL on a Postgres database image. These will run on ports 4466 (prisma entrypoint) & 5432 (actual postgres database)<br>
Finally run 'prisma deploy' inside the server directory. This will deploy the Prisma service and generate a GraphQL schema. <br>
Now run 'yarn dev' to start the server on localhost:4000<br >
You can now access the Prisma playground, which allows you to send queries and mutations directly to the database, by running '$ prisma playground'  <br>
Optional: To start with a set of selected opening storylines by a dummy user 'Joep Meloen' run $ ts-node src/data.ts inside server directory
