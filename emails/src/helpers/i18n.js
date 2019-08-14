const _ = require('lodash')

const ICU_ESCAPE_RE = /'{(.+?)}'/g

module.exports = function (translation, id) {
  const message = _.get(translation, [id]) || '⚠️'
  return message.replace(ICU_ESCAPE_RE, (match, p) => `{${p}}`)
}
