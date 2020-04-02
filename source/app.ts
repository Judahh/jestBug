import { SimpleApp } from 'simple-api-ts';
import Router from './router/router';

class App extends SimpleApp {}

export default new App(Router.getInstance()).express;
