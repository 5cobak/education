import { Link, LinkProps } from 'react-router-dom';
import cn from 'classnames';
import s from './index.scss';
interface Props extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

const AppLink: React.FC<Props> = (props: Props) => {
  const { className, children, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link className={cn(s.link, className, s[theme])} {...otherProps}>
      {children}
    </Link>
  );
};

export default AppLink;
