const { concat, group, line, softline, indent, join } = require('prettier').doc.builders;
const { removeSurroundingWhitespace, printChildGroups, EXPRESSION_NEEDED, STRING_NEEDS_QUOTES } = require('../util');

const printOpeningTag = (node, path, print) => {
  const opener = '<' + node.name;
  const printedAttributes = printSeparatedList(path, print, '', 'attributes');
  const openingTagEnd = node.selfClosing ? concat([line, '/>']) : concat([softline, '>']);
  const hasAttributes = node.attributes && node.attributes.length > 0;
  if (hasAttributes) {
    return concat([opener, indent(concat([line, printedAttributes])), openingTagEnd]);
  }
  return concat([opener, openingTagEnd]);
};

const printSeparatedList = (path, print, separator, attrName) => {
  return join(concat([separator, line]), path.map(print, attrName));
};

const p = (node, path, print) => {
  node[EXPRESSION_NEEDED] = true;
  const openingGroup = group(printOpeningTag(node, path, print));
  node[EXPRESSION_NEEDED] = false;
  node[STRING_NEEDS_QUOTES] = false;
  if (!node.selfClosing) {
    node.children = removeSurroundingWhitespace(node.children);
    const childGroups = printChildGroups(node, path, print, 'children');
    const hasChildren = childGroups.length > 0;
    const closingTag = concat(['</', node.name, '>']);
    const result = [
      openingGroup,
      indent(concat([hasChildren ? softline : '', concat(childGroups)])),
      ...[hasChildren ? softline : ''],
      closingTag,
    ];
    return group(concat(result));
  }
  return openingGroup;
};

module.exports = {
  printElement: p,
};
