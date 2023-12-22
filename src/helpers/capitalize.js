const capitalize = (text) => {
  if (typeof text === 'string' && text.length > 0) {
    const words = text.split(' ');
    const newString = words.map((word) => `${word[0].toUpperCase() + word.substr(1)}`);
    return newString.join(' ');
  }
  return text;
};
export default capitalize;
