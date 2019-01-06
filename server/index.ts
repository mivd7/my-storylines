import { prisma } from './generated/prisma-client'
import { userInfo } from 'os';

// A `main` function so that we can use async/await
async function main() {

  // Create a new user called `Alice`
  // const newUser = await prisma.createUser(
  //   { name: 'Alice', email:'alice@rabbit.com', accessRole: 'USER' }
  // )

  // console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  // Read all users from the database and print them to the console
  const allUsers = await prisma.users()
  console.log(allUsers)

  const newStory = await prisma.createStory(
  {title: 'storytime', content: 'once upon a time in a galaxy far away', published: true}
  )
  console.log(newStory)

}

main().catch(e => console.error(e))