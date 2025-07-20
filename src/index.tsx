import { render } from 'react-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ErrorBoundary } from './features/AppErrorBoundary';
import './app/styles/main.scss';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from './app/providers/StoreProvider';
import { PageLoader } from './widgets/PageLoader';
import i18nMain from 'config/i18Next/config';

render(
    <ErrorBoundary>
        <ThemeProvider>
            <Suspense fallback={<PageLoader />}>
                <BrowserRouter basename="/">
                    <StoreProvider>
                        <I18nextProvider i18n={i18nMain}>
                            <App />
                        </I18nextProvider>
                    </StoreProvider>
                </BrowserRouter>
            </Suspense>
        </ThemeProvider>
    </ErrorBoundary>,
    document.getElementById('root')
);
