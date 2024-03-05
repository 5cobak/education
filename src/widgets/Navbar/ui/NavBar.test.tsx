import { render } from 'src/shared/utils/test-utils';
import { NavBar } from './NavBar';

const navBar = render(<NavBar />);

describe('first test', () => {
  expect(navBar).toBeInTheDocument();
});
