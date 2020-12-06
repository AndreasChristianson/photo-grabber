export default ({images, suffix, prefix}) =>
images.map((imageMatch) => `${prefix}${imageMatch}${suffix}`)
