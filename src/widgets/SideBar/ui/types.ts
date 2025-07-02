import { ReactNode } from 'react';
import { Message } from 'src/shared/utils/translationUtils';

export type LinkListType = LinkListItemType[];

export interface LinkListItemType {
  icon: ReactNode;

  path: string;
  message: Message;
}
