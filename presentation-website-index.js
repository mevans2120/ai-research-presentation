// File: src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// File: public/index.html
// This would be in a separate file in the public directory
/*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#2563eb" />
    <meta
      name="description"
      content="AI Research Findings Presentation"
    />
    <meta property="og:title" content="AI Research Findings" />
    <meta property="og:description" content="Research findings on AI adoption and perspectives" />
    <meta property="og:image" content="%PUBLIC_URL%/og-image.jpg" />
    <meta property="og:url" content="https://ai-research-findings.example.com" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <title>AI Research Findings</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
*/
