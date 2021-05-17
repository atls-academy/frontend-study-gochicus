export const clearPost = postData => {
  return [...postData.splice(0, -1)]
}
