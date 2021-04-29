export const filterData = (postData, status, searchValue) => {
  const filtered = postData.filter(item => {
    let result
    if (status === 'all') {
      result = true
    }
    if (status === 'like') {
      result = item.like
    }
    if (status === 'important') {
      result = item.important
    }
    if (status === 'search' && item.post.indexOf(searchValue) !== -1) {
      result = true
    }
    return result
  })
  return filtered
}
