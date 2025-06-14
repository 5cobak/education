import { cleanup, renderWithProviders, screen, waitFor } from 'src/shared/utils/test-utils';
import { NavBar } from './NavBar';
import { NavbarIds } from 'config/jest/utils/testIds';

afterEach(cleanup);

test('Sidebar test', () => {
  renderWithProviders(<NavBar />);

  const sidebar = screen.queryByTestId(NavbarIds.Navbar);
  waitFor(async () => expect(sidebar).toBeInTheDocument());

  waitFor(async () => {
    const mainPageLink = screen.queryByTestId(NavbarIds.MainPageLink);
    const aboutPageLink = screen.queryByTestId(NavbarIds.AboutPageLink);

    expect(mainPageLink).toBeInTheDocument();
    expect(aboutPageLink).toBeInTheDocument();
  });
});
