export const favouredCounter = postData => {
  let result = 0
  postData.forEach(item => {
    if (item.like) {
      result += 1
    }
  })
  return result
}
