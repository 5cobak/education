import { fireEvent, renderComponent, waitFor, screen } from 'src/shared/utils/test-utils';
import { Counter } from './Counter';

describe('test Counter.test', () => {
  const counter = renderComponent(<Counter />, undefined);

  waitFor(async () => expect(counter).toBeInTheDocument());

  test('test increment', () => {
    waitFor(async () => {
      const incrementButton = screen.getByTestId('incrementButtonTest');
      expect(incrementButton).toBeInTheDocument();

      fireEvent.click(incrementButton);

      const value = screen.queryByTestId('counterValueTest');

      expect(value).toBe(1);
    });
  });

  test('test decrement', () => {
    waitFor(async () => {
      const incrementButton = screen.getByTestId('incrementButtonTest');
      expect(incrementButton).toBeInTheDocument();

      fireEvent.click(incrementButton);

      const value = screen.queryByTestId('counterValueTest');

      expect(value).toBe(0);
    });
  });
});
