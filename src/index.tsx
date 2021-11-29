//Default and needs imports
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Services
import './services/firebase'

//styles
import './styles/global.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
