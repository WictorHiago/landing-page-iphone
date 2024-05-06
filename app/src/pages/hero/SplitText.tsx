export default function SplitText(string: string): string[] {
  const characters: string[] = [];

  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(string)) !== null) {
    characters.push(match[0]);
  }
  return characters;
}
