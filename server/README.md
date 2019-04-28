## GIT THIS THANG RUNNING
- Make sure to have prisma installed.<br> 
  -> if not: $ npm i -g prisma (info & docs: http://prisma.io/docs)
- Make sure to have Docker installed.<br>
  -> if not: http://docs.docker.com

- Navigate to server folder inside project folder: $ cd server<br>
- Run $ docker-compose up -d <br>
  -> starts the necessary docker containers based on 'docker-compose.yml' file <br>
- Run $ prisma deploy <br>
  -> deploys the prisma service and generates schema based on 'datamodel.prisma' file <br>
<br>
Congratulations, the server is now running on localhost:4466 and can be accessed through the prisma playground <br>
<br>
## START WITH DUMMY DATA
Again inside the server folder, run '$ yarn generate' to start the story app with a hard-coded set of 20 opening lines by a dummy user 'Joep Meloen'.