import { addItem } from './addItem'

export const fetchInitialData = (mocks, postData) => {
  const result = []
  mocks.forEach((item: string) => {
    addItem(postData, item).forEach(element => {
      result.push(element)
    })
  })
  return postData.concat(result)
}
