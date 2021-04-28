export const likeItem = (postData, id, value) => {
  const index = postData.findIndex((customElements) => customElements.id === id)
  const currentPost = postData[index]
  let newPost
  newPost = { ...currentPost, like: value }
  console.log(newPost.like)

  return [...postData.slice(0, index), newPost, ...postData.slice(index + 1)]
}
