const combinations = (input) => {
  const characters = input.split("");
  return _generateCombinations(characters);
};

const palindrome = (input) => {
  const items = combinations(input);
  return [
    ...new Set(
      items.filter((word) => word === word.split("").reverse().join(""))
    ),
  ];
};

const _generateCombinations = (characters, current = "") => {
  let result = [];
  characters.forEach((character, index) => {
    const newCurrent = current + character;
    result.push(newCurrent);
    const otherCharacters = [...characters];
    otherCharacters.splice(index, 1);
    _generateCombinations(otherCharacters, newCurrent).forEach((word) =>
      result.push(word)
    );
  });
  return result;
};

export { combinations, palindrome };
