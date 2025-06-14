import { Sidebar } from './Sidebar';
import s from './index.scss';
import { cleanup, renderWithProviders, screen, waitFor } from 'src/shared/utils/test-utils';
import { ButtonIds, SideBarIds } from 'config/jest/utils/testIds';

afterEach(cleanup);

test('Sidebar test', () => {
  const testMessage = 'Test Message';

  renderWithProviders(<Sidebar>{testMessage}</Sidebar>);

  const sidebar = screen.queryByTestId(SideBarIds.mainSidebar);
  waitFor(async () => expect(sidebar).toBeInTheDocument());

  const sidebarToggler = screen.queryByTestId(ButtonIds.MainSideBarToggler);
  waitFor(async () => {
    expect(sidebarToggler).toBeInTheDocument();
    sidebarToggler.click();
    expect(sidebar.classList).not.toHaveClass(s.collapsed);
    expect(screen.queryByText(testMessage)).toBeNull();
  });
});
