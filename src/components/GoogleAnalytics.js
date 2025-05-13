import ReactGA from 'react-ga4';

// Initialize GA4 with your measurement ID
const initializeGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

// Track page views
const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
const trackEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};

export { initializeGA, trackPageView, trackEvent }; 