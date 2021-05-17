export const favouredCounter = postData =>
  postData.reduce((count, item) => (item.like === true ? count + 1 : count), 0)
