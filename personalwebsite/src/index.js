import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import styles from './index.css'


render((
		<App />
), document.getElementById('root'));

registerServiceWorker();
