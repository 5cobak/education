import Button from 'src/shared/ui/Button';
import s from './index.scss';
import { useState } from 'react';
import classNames from 'classnames';
import ThemeSwitcher from 'src/features/ThemeSwitcher';

export const Sidebar: React.FC = () => {
  const [collapsed, setCollapse] = useState(true);

  return (
    <div className={classNames(s.sidebar, collapsed && s.collapsed)}>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <Button onClick={() => setCollapse(!collapsed)}>{collapsed ? 'show' : 'close'}</Button>
      </div>
    </div>
  );
};
