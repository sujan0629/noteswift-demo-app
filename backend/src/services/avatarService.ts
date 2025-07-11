// backend/src/services/avatarService.ts
export function generateRandomEmoji(): string {
  const PEOPLE_EMOJIS = [
    '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🥲', '☺️',
    '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗',
    '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓',
    '😎', '🥸', '🤩', '🥳', '😏', '😒', '😞', '😔', '😟', '😕',
    '🙁', '☹️', '😣', '😖', '😫', '😩', '🥺', '😢', '😭', '😤'
  ];
  return PEOPLE_EMOJIS[Math.floor(Math.random() * PEOPLE_EMOJIS.length)];
}