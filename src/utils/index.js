function capitalize(string) {
  let words = string.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substring(0, 1).toUpperCase() +
      words[i].substring(1, words[i].length);
  }

  return words.join(" ");
}

function formatDashString(string) {
  let words = string.split("-");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].substring(0, 1).toUpperCase() +
      words[i].substring(1, words[i].length);
  }

  return words.join(" ");
}

function getMoves(array) {
  let arrayResult = [];
  if (!array) {
    return "";
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i]?.move) {
      arrayResult.push(capitalize(array[i]?.move?.name));
    }
  }

  return arrayResult.join(", ");
}

function getIdFromUrl(url) {
  let splittes = url.split("/");
  return splittes[splittes.length - 2];
}

function getHalfChances() {
  let chances = Math.random() < 0.5;

  return chances;
}

export { capitalize, getMoves, formatDashString, getIdFromUrl, getHalfChances };
