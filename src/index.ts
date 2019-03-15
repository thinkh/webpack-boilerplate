import { SimpleComponent } from './components/SimpleComponent';
import { JsonComponent } from './components/JsonComponent';

import './assets/scss/style.scss';

const simple = new SimpleComponent('h1', 'Hello, Webpack!', 'simple-demo', 'main-heading').build();
const json = new JsonComponent('h1', 'json-demo', 'code').build();

const root = document.getElementById('root');
root!.appendChild(simple);
root!.appendChild(json);
