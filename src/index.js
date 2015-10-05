export default (str) => {
  const p = 33
  let hash = 5381
  
  for (let i = str.length; i; i--) {
    hash = (hash * p) ^ str.charCodeAt(i)
  }

  return hash
}
