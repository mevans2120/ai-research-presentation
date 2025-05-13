import { useEffect } from 'react';

const GoogleAnalyticsScript = () => {
  useEffect(() => {
    // Add the gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-FYPCL0Q8EH';
    document.head.appendChild(script1);

    // Add the gtag initialization script
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-FYPCL0Q8EH');
    `;
    document.head.appendChild(script2);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything
};

export default GoogleAnalyticsScript; 