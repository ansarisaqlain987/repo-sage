import adjectives from "../data/adjectives.json";
import nouns from "../data/nouns.json";
import techTerms from "../data/tech-term.json";

const getRandomElement = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

type Option = {
  includeNumbers?: boolean;
  customName?: string;
  randomize?: boolean;
};
export const generateRepoName = (option: Option = {}) => {
  const nameArray = [];
  if (option.customName) {
    nameArray.push(option.customName);
  }
  nameArray.push(getRandomElement(adjectives));
  nameArray.push(getRandomElement(nouns));
  nameArray.push(getRandomElement(techTerms));
  if (option.includeNumbers) {
    nameArray.push(Math.floor(Math.random() * 1000));
  }

  const name = nameArray.join("-");
  if (option.randomize) {
    return createShuffledString(name.toLowerCase());
  }
  return name.toLowerCase();
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const createShuffledString = (str: string) => {
  const shuffledWords = shuffleArray(str.split("-"));
  return shuffledWords.join("-");
};
