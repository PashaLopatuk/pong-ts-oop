export function randomColor(): string {
  return (
    "hsl(" +
    360 * Math.random() +
    "," +
    (225 + 70 * Math.random()) +
    "%," +
    (85 + 10 * Math.random()) +
    "%)"
  );
}