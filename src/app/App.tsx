import { BrowserRouter } from 'react-router-dom';

import { RouterProvider } from './providers/RouterProvider';
import { NavBar } from 'src/widgets/Navbar';
import { useTheme } from 'src/shared/lib/theme';
import { Sidebar } from 'src/widgets/SideBar';
import '../../config/i18Next/config';
import { Suspense } from 'react';
import { PageLoader } from 'src/widgets/PageLoader';

export default function App() {
  const { theme } = useTheme();
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={`app ${theme}`}>
        <BrowserRouter basename="/">
          <NavBar />
          <div className="container">
            <Sidebar />
            <div className="pageContainer">
              <RouterProvider />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}
