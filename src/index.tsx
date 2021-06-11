import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { About } from './components/ui/About';
import { Contact } from './components/ui/Contact';
import { Todo } from './components/container/Todo';
import { Menu } from './components/ui/Menu';
import "./index.scss";
import App from './components/ui/App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
		<Provider store={store}>
		<Router>
			<div className="ui container">
				{ <Menu menuItems={["","Home","About","Contact"]} /> }
				<Route exact  path="/" component={App} />
				<Route exact  path="/Home" component={Todo} />
				<Route exact path="/About" component={About} />
				<Route exact path="/Contact" component={Contact} />
			</div>
		</Router>
		</Provider>,	
	document.getElementById('root')
	);
	reportWebVitals();
	