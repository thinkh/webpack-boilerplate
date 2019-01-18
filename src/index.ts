import { SimpleComponent } from './components/SimpleComponent';
import './assets/scss/style.scss';

const hello = new SimpleComponent('h1', 'Hello, Webpack!', 'demo', 'main-heading');
const root = document.getElementById('root');

root.appendChild(hello.build());
