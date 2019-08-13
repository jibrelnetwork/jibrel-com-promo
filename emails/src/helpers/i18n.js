const _ = require('lodash')

module.exports = function (translation, id) {
  return _.get(translation, [id], '⚠️')
}
