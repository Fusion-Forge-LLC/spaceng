declare module "emoji-dictionary" {
  export function getUnicode(emojiName: string): string;
  export function getName(emojiUnicode: string): string;
  export const emojis: {[key: string]: string};
}
