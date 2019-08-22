function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  return str.replace(/[&<>"']/g, char => {
    return entities[char];
  });
}

module.exports = { convertHTML };
