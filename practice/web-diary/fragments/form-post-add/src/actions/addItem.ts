import { nanoid } from 'nanoid'

export const addItem = (postData, text) => {
  const newItem = {
    post: text,
    important: false,
    like: false,
    id: nanoid(),
  }
  return [...postData, newItem]
}
