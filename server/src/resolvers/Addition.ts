export default {
  story
}

function story(root, args, context) {
  return context.db.addition({
    id: root.id
  }).story()
}