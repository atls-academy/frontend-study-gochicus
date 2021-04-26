// import { idCount } from '../../../../app/actions/src'

export const addItem = (defaultData, text) => {
  const newItem = {
    note: text,
    important: false,
    liked: false,
    // id: idCount(),
  }
  return [...defaultData, newItem]
}
