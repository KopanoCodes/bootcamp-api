export default function processSentence(sentence) {
  // Trim the sentence and split it into words, filtering out any empty strings
  const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);

  // Handle the case where the sentence is empty or only contains whitespace
  if (words.length === 0) {
    return {
      longestWord: '',
      shortestWord: '',
      wordCount: 0
    };
  }

  let longestWord = words[0];
  let shortestWord = words[0];
  const wordCount = words.length;

  // Loop through the words to find the longest and shortest
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }

    if (currentWord.length < shortestWord.length) {
      shortestWord = currentWord;
    }
  }

  return {
    longestWord,
    shortestWord,
    wordCount
  };
}
