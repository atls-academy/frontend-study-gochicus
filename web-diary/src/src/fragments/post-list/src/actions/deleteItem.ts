export const deleteItem = (postData, id) => {
  const index = postData.findIndex((customElements) => customElements.id === id)
  return [...postData.slice(0, index), ...postData.slice(index + 1)]
}
