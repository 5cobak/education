import { Loader } from 'src/shared/ui/Loader';
import s from './PageLoader.scss';

export const PageLoader = () => {
  return (
    <div className={s.pageLoader}>
      <Loader />
    </div>
  );
};
