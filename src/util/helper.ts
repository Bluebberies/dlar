export function cutSentence(sentence: string, length: number = 7) {
  const words = sentence.split(" ");
  if (words.length >= length) {
    return words.slice(0, 7).join(" ") + "...";
  } else {
    return sentence;
  }
}
