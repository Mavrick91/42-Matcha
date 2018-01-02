import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes/route';

ReactDOM.render(routes, document.getElementById('root'));

registerServiceWorker();
