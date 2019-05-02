export default {
  author,
  additions,
}

function author(root, args, context) {
  return context.db.story({
    id: root.id
  }).author()
}

function additions(root, args, context) {
  return context.db.story({
    id: root.id
  }).additions()
}