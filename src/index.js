
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr2 = [];
  if (typeof matrix == 'undefined') {
    return arr2
  }
  matrix.forEach((val,idx) => {
    if (idx % 2 === 0) {
    arr2 = arr2.concat(val);
  } else {
    arr2 = arr2.concat(val.reverse());
  }
})
  return arr2;
}
