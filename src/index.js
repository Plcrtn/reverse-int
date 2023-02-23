module.exports = function reverse (n) {
    n = Math.abs(n)
    n = String(n)
  let num = Array.from(n)
  let str = num.reverse().toString()
  let result = ''
  for (let i = 0;i < str.length;i++) {
    if(str[i] !== ',') {
      result += str[i]
    }
  }
  return result
}
