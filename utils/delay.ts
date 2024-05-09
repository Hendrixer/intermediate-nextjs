export const delay = () => {
  const randomDelayTime = Math.floor(Math.random() * (3000 - 500 + 1)) + 2000
  return new Promise((resolve) => setTimeout(resolve, randomDelayTime))
}
