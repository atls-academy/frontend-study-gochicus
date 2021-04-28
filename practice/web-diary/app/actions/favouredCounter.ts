export const favouredCounter = (favoured, like) => {
  if (like) {
    console.log('yes')
    favoured += 1
  }
  return favoured
}
