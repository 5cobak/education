import { BrowserRouter, Link } from 'react-router-dom';
import './styles/main.scss';

import { useTheme } from '../shared/lib/theme/useTheme';
import { RouterProvider } from './providers/RouterProvider';
import NavBar from 'src/widgets/ui/Navbar';
export default function App() {
  const { theme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <BrowserRouter basename="/">
        <NavBar />
        <div className="container">
          <RouterProvider />
        </div>
      </BrowserRouter>
    </div>
  );
}
