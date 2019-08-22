function convertHTML(str) {
  if (str.length === 0) return "";
  return str.replace(/&/g, "&amp;");
}

module.exports = { convertHTML };
