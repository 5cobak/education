import { Sidebar } from './Sidebar';
import s from './index.scss';
import { render, screen } from 'src/shared/utils/test-utils';
import { withTranslation } from 'react-i18next';
import { ButtonIds, SideBarIds } from 'config/jest/utils/testIds';

test('Sidebar test', () => {
  const testMessage = 'Test Message';
  const SidebarWithTranslation = withTranslation()(Sidebar);
  render(<SidebarWithTranslation>{testMessage}</SidebarWithTranslation>);
  const sidebarToggler = screen.getByTestId(ButtonIds.mainSideBarToggler);
  const sidebar = screen.getByTestId(SideBarIds.mainSidebar);
  sidebarToggler.click();

  expect(sidebar.classList).not.toHaveClass(s.collapsed);

  expect(screen.queryByText(testMessage)).toBeNull();
});
