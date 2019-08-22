function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  if (str.length === 0) return "";
  return str.replace(/[&<]/g, char => {
    return entities[char];
  });
}

module.exports = { convertHTML };
