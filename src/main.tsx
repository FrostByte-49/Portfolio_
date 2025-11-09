import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initGA, trackPageView } from './lib/ga';

initGA(); 

function Root() {
  useEffect(() => {
    // Track The First Pageview
    trackPageView(window.location.pathname + window.location.search);

    const handleRouteChange = () => {
      trackPageView(window.location.pathname + window.location.search);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
