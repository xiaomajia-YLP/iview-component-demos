// 数组乱序
let shuffle = (arr) => {
  let len = arr.length
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i]
    let index = Math.floor(Math.random() * (len - i))
    let temp = arr[index]
    arr[index] = arr[len - i - 1]
    arr[len - i - 1] = temp
  }
  return arr
}

// 数组深拷贝
let deepCopyArr = (arr) => {
  return JSON.parse(JSON.stringify(arr))
}

export default {
  shuffle,
  deepCopyArr
}

