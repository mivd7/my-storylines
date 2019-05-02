export default {
  stories
}

function stories(root, args, context) {
  return context.prisma.user({
    id: root.id
  }).stories()
}

