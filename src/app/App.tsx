import { BrowserRouter } from 'react-router-dom';

import { RouterProvider } from './providers/RouterProvider';
import { NavBar } from 'src/widgets/Navbar';

import { Sidebar } from 'src/widgets/SideBar';
import '../../config/i18Next/config';
import { Suspense } from 'react';
import { PageLoader } from 'src/widgets/PageLoader';
import { StoreProvider } from './providers/StoreProvider/ui/StoreProvider';

export default function App() {
  return (
    <StoreProvider>
      <Suspense fallback={<PageLoader />}>
        <div className="app">
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
    </StoreProvider>
  );
}
