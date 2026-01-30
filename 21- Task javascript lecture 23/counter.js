const counter = () => {
  let count = 0
  const increaseCounter = () => {
    count++

    return count
  }
  return increaseCounter
}

const inc = counter()

export {inc}