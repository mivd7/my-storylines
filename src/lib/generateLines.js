var array = [1,2,3,4,5]

export function getRandomLines(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export function getLastThree(arr) {
  var copyArr = [...arr]
  return copyArr.slice(Math.max(arr.length - 3, 1))
}