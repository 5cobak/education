import { BrowserRouter } from 'react-router-dom';

import { RouterProvider } from './providers/RouterProvider';
import { NavBar } from 'src/widgets/Navbar';

import { Sidebar } from 'src/widgets/SideBar';
import i18n from '../../config/i18Next/config';
import { Suspense } from 'react';
import { PageLoader } from 'src/widgets/PageLoader';
import { StoreProvider } from './providers/StoreProvider/ui/StoreProvider';
import { I18nextProvider } from 'react-i18next';

export default function App() {
  return (
    <StoreProvider>
      <Suspense fallback={<PageLoader />}>
        <I18nextProvider i18n={i18n}>
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
        </I18nextProvider>
      </Suspense>
    </StoreProvider>
  );
}
