'use strict'

const month = function (date) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  let providedMonth = date.getMonth();
  return months[providedMonth];
}

module.exports = month;
