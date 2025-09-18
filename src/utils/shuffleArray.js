// Random array shuffle

export default function shuffleArray(array) {
  const copy = [...array]; // Make copy so original is not mutated
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [copy[i], copy[j]] = [copy[j], copy[i]]; // swap i with j
  }
  return copy;
}
