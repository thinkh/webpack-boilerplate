import Component from './components/Component'
import './assets/scss/style.scss'

const hello = Component('h1', 'Hello, Webpack!', 'demo', 'main-heading')
const root = document.getElementById('root')

root.appendChild(hello)