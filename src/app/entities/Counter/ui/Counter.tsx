import { useDispatch, useSelector } from 'react-redux';
import s from './index.scss';
import { selectorCounterValue } from '../model/selectors/selectorCounterValue/selectorCounterValue';
import { decrementCounter, incrementCounter } from '../model/slice/counterSlice';
import { Button, ButtonVariant } from 'src/shared/ui/Button';

export function Counter() {
  const value = useSelector(selectorCounterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Button
          data-testid="incrementButtonTest"
          size="xl"
          buttonVariant={ButtonVariant.Circle}
          onClick={() => dispatch(incrementCounter())}
        >
          +
        </Button>
        <span data-testid="counterValueTest" className={s.value}>
          {value}
        </span>
        <Button
          data-testid="decrementButtonTest"
          size="xl"
          buttonVariant={ButtonVariant.Circle}
          aria-label="Decrement value"
          onClick={() => dispatch(decrementCounter())}
        >
          -
        </Button>
      </div>
    </div>
  );
}
