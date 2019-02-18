import { prisma } from '../generated/prisma-client'

//OPTIONAL HARD-CODED DATA
//ADD TO GRAPHQL-DB BY RUNNING $ ts-node data.ts INSIDE 'src' FOLDER
const openingLines = ['It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife...',
'There was no possibility of taking a walk that day...',`You don't know about me but...`, 'I write this sitting in the kitchen sink...',`It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn't know what I was doing in New York.`, 
`The snow in the mountains was melting and Bunny had been dead for several weeks before we came to understand the gravity of our situation.`,`The rest of these gentlemen have asked me to write down the whole particulars about Treasure Island.`, 
`Let me go back to the time when my father still kept the inn and the brown old seaman first took up his lodging under our roof.`,
`The war began over a pack of cigarettes.`, `Many years later, as I faced the firing squad, I was to remember that distant afternoon when my father took me to discover ice.`,
`I first met him not long after my wife and I split up. I had just gotten over a serious illness that I won't bother to talk about, except it had something to do with the miserably weary split-up and my feeling that everything was dead.`,
`Mother died today. Or maybe yesterday; I can't be sure.`,`It was a bright cold day in April, and the clocks were striking thirteen`,`You, light of my life, fire of my loins. My sin, my soul.`,
`Everyone had always said that John would be a preacher when he grew up, just like his father. It had been said so often that John, without ever thinking about it, had come to believe it himself.`, `Lydia is dead. But they don't know this yet.`,
`The Man in Black fled across the desert, and the Gunslinger followed.`,`In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since...`,"I lost an arm on my last trip home. My left arm.",
"As I awoke one morning from uneasy dreams I found myself transformed in bed into an enormous insect." ]

const content = openingLines.map((line) => { 
  return { 
    content: line
  }; 
});

async function main() {
  //ADDS NEW USER 'JOEP' WITH STORIES BASED ON OPENINGLINES ARRAY
  const newUserWithStory = await prisma.createUser({
    name: 'Joep', 
    email:'joep.meloen@euronet.nl',
    accessRole: 'USER',
    stories: {
      create: content
    }
  })

  console.log(`Created new user with stories: ${newUserWithStory.name} (ID: ${newUserWithStory.id})`) 

  const allStories = await prisma.stories()
  console.log(allStories)

  const allUsers = await prisma.users()
  console.log(allUsers)
}

main().catch(e => console.error(e))