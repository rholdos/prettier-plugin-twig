const { concat } = require('prettier').doc.builders;

const p = (node, path, print) => {
  return concat([path.call(print, 'name'), ' as ', path.call(print, 'alias')]);
};

module.exports = {
  printAliasExpression: p,
};
