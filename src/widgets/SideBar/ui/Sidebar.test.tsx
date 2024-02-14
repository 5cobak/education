import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { ButtonIds, SideBarIds } from '../../../../config/jest/utils/testIds';
import s from './index.scss';

test('Sidebar test', () => {
  const testMessage = 'Test Message';
  render(<Sidebar>{testMessage}</Sidebar>);
  const sidebarToggler = screen.getByTestId(ButtonIds.mainSideBarToggler);
  const sidebar = screen.getByTestId(SideBarIds.mainSidebar);
  sidebarToggler.click();

  expect(sidebar.classList).not.toHaveClass(s.collapsed);

  expect(screen.queryByText(testMessage)).toBeNull();
});
