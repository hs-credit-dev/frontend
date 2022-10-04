import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { ThemeProvider } from '@material-tailwind/react';
import JotaiNexus from 'jotai-nexus';

import App from './App';

import './index.css';

// Init axios
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = "true";
axios.defaults.withCredentials = true; // send cookies
axios.defaults.validateStatus = () => true; // don't throw errors on non-200 response

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ThemeProvider>
      <JotaiNexus />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
