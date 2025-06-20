import { useDispatch, useSelector } from 'react-redux';
import s from './index.scss';
import { selectorCounterValue } from '../model/selectors/selectorCounterValue/selectorCounterValue';
import { decrement, increment } from '../model/counterSlice';
import { Button, ButtonVariant } from 'src/shared/ui/Button';

export function Counter() {
  const value = useSelector(selectorCounterValue());
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button size="xl" buttonVariant={ButtonVariant.Circle} onClick={() => dispatch(increment())}>
          +
        </Button>
        <span className={s.value}>{value}</span>
        <Button
          size="xl"
          buttonVariant={ButtonVariant.Circle}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
      </div>
    </div>
  );
}
