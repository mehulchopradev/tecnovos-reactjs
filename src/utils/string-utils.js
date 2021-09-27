export function capitalize(text) {
  if (!text) {
    return text;
  }

  if (text.length === 1) {
    return text.toUpperCase();
  }

  return `${text[0].toUpperCase()}${text.substring(1).toLowerCase()}`;
}