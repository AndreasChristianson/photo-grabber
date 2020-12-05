export default (imageMatches, suffix) =>
  imageMatches.map((imageMatch) => `${imageMatch}${suffix}`)
