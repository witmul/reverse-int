module.exports = function reverse (n) {
  n_string = String(n)
  n_array = n_string.split("")
  n_array_reverse = n_array.reverse()
  n_string_reverse = n_array_reverse.join("")
  n_reverse = parseInt(n_string_reverse)
  return n_reverse
}


