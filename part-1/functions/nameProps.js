'use strict'

const nameProps = function (object) {
  let keys = Object.keys(object);
  return keys.sort()
}

module.exports = nameProps;
