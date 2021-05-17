export const addItem = (postData, text) => {
  const newItem = {
    post: text,
    important: false,
    like: false,
    id: Date.now(),
  }
  return [...postData, newItem]
}
