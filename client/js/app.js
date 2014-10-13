//Main App Module
window.app = angular.module('app', ['ui.router','lakes.controllers', 'lakes.services', 'lakes.directives']);

//Register Controllers
window.angular.module('lakes.controllers', ['lakes.controllers.lakesCTRL']);
//Register Services
window.angular.module('lakes.services', []);