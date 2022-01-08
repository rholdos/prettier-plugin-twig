const { concat } = require('prettier').doc.builders;

const p = (node, path, print) => {
  return concat([node.trimLeft ? '{%-' : '{%', ' do ', path.call(print, 'value'), node.trimRight ? ' -%}' : ' %}']);
};

module.exports = {
  printDoStatement: p,
};
