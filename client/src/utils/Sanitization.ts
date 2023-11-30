// TODO: Finish the sanitizeMessage function to mitigate XSS attacks

export const sanitizeMessage = (message: string): string => {
    return message.trim();
};
