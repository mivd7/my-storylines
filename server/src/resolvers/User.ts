export default {
  stories
}

function stories(root, args, context) {
  return context.db.user({
    id: root.id
  }).stories()
}
