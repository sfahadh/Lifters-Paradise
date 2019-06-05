import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

