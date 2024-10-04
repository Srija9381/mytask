import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import App from './App';

// Create a root for the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component within the root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);