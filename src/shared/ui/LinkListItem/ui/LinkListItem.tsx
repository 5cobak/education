import React, { memo, ReactNode } from 'react';
import AppLink from 'src/shared/ui/AppLink';

export interface LinkListItemProps {
  icon: ReactNode;
  path: string;
  children: ReactNode;
  collapsed: boolean;
}

export const LinkListItem: React.FC<LinkListItemProps> = memo((props: LinkListItemProps) => {
  const { icon, path, collapsed, children } = props;
  return <AppLink to={path}>{collapsed ? icon : children}</AppLink>;
});

LinkListItem.displayName = 'LinkListItem';
