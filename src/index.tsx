import { render } from 'react-dom';
import App from './app/App';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ErrorBoundary } from './features/AppErrorBoundary';
import './app/styles/main.scss';

render(
  <ErrorBoundary>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root')
);
