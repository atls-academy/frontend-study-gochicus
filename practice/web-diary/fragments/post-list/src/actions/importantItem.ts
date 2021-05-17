export const importantItem = (postData, id, value) => {
  const index = postData.findIndex(customElements => customElements.id === id)
  const currentPost = postData[index]
  const newPost = { ...currentPost, important: value }

  return [...postData.slice(0, index), newPost, ...postData.slice(index + 1)]
}
