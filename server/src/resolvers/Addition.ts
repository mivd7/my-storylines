export default {
  story
}

function story(root, args, context) {
  return context.prisma.addition({
    id: root.id
  }).story()
}