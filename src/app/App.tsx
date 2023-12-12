import { BrowserRouter } from 'react-router-dom';
import './styles/main.scss';

import { RouterProvider } from './providers/RouterProvider';
import { NavBar } from 'src/widgets/Navbar';
import { useTheme } from 'src/shared/lib/theme';
import { Sidebar } from 'src/widgets/SideBar';
export default function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <BrowserRouter basename="/">
        <NavBar />
        <Sidebar />
        <div className="container">
          <RouterProvider />
        </div>
      </BrowserRouter>
    </div>
  );
}
