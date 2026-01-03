import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This connects your Tailwind styles
import App from './App'; // This pulls in your shop design

// 1. Locate the "root" div from your index.html
const rootElement = document.getElementById('root');

// 2. Add a safety check for TypeScript (ensures the element exists)
if (!rootElement) {
  throw new Error("Could not find root element. Please check your index.html");
}

// 3. Create the React 18 root and render your shop!
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
