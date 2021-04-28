export const importantItem = (postData, id, value) => {
  const index = postData.findIndex((customElements) => customElements.id === id)
  const currentPost = postData[index]
  let newPost
  newPost = { ...currentPost, important: value }
  console.log(newPost.important)

  return [...postData.slice(0, index), newPost, ...postData.slice(index + 1)]
}
