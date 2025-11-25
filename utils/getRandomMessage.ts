const getRandomMessage = (messages: readonly string[]): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};

export default getRandomMessage;