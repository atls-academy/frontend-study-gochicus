export const importantItem = (postData, id, value) => {
  const index = postData.findIndex(customElements => customElements.id === id)
  const currentPost = postData[index]
  let newPost
  if (postData.id === id) {
    newPost = { ...currentPost, important: value }
  }
  return [...postData.slice(0, index), newPost, ...postData.slice(index)]
}
