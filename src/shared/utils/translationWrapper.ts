export type MessageParams = {
  [key: string]: string | number;
};

export type Message = { key: string; params?: MessageParams };
