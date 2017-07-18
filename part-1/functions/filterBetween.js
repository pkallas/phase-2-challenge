'use strict'

const filterBetween = function (array, min, max) {
  let filteredArray = array.filter(function (x){
    return x >= min && x <= max;
  })
  return filteredArray;
}

module.exports = filterBetween;
