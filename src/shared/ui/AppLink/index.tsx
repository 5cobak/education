import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import s from './index.scss';
interface Props extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
}

const AppLink: React.FC<Props> = (props: Props) => {
  const { className, children, theme = AppLinkTheme.Primary, ...otherProps } = props;

  return (
    <Link className={cn(s.link, className, s[theme])} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
