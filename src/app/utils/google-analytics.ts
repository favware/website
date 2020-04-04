import ReactGA from 'react-ga';

export const initializeGoogleAnalytics = () => {
  ReactGA.initialize('UA-114064877-3');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export enum EVENTS {
  OUTBOUND_LINK = '@@analytics/OUTBOUND_LINK'
}
