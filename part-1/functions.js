const month = function (date) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  let providedMonth = date.getMonth();
  return months[providedMonth];
}

const reverseSentence = function (sentence) {
  return sentence.split(' ').reverse().join(' ');
}

const nameProps = function (object) {
  let keys = Object.keys(object);
  return keys.sort()
}

const filterBetween = function (array, min, max) {
  let filteredArray = array.filter(function (x){
    return x >= min && x <= max;
  })
  return filteredArray;
}

module.exports = month;
module.exports = reverseSentence;
module.exports = nameProps;
module.exports = filterBetween;
