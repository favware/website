import { initializeGoogleAnalytics, logPageView } from '@Utils/google-analytics';
import React, { useEffect } from 'react';

export default () => {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initializeGoogleAnalytics();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <></>;
};

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}
