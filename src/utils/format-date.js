// eslint-disable-next-line
export default date => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(date).toLocaleDateString([], options)
}
