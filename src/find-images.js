export default (pageText, regexString) => {
  const regex = new RegExp(regexString, 'giu')

  const result = []
  let array
  while ((array = regex.exec(pageText)) !== null) {
    result.push(array[1])
  }
  return result
}
