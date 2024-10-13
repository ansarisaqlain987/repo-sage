import adjectives from "../data/adjectives.json";
import nouns from "../data/nouns.json";
import techTerms from "../data/tech-term.json";

const getRandomElement = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

export const generateRepoName = () => {
  const adj = getRandomElement(adjectives);
  const noun = getRandomElement(nouns);
  const tech = getRandomElement(techTerms);
  const randomNum = Math.floor(Math.random() * 1000);

  return `${adj}-${noun}-${tech}-${randomNum}`;
};
