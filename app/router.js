import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: HrefToProblemENV.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('contact',{path: '/contact'});
  this.route('about',{path: '/about'});
  this.route('error404', {path: '/*path'});
});

export default Router;
