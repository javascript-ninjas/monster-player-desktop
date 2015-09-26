import appController from './controllers/appController';

import userbarDirective from './directives/userbar/userbar';
import sidebarDirective from './directives/sidebar/sidebar';

import theme from './config/theme';
import router from './config/router';

// Module dependencies
let moduleName = 'MonsterPlayer';
let moduleDependencies = ['ui.router', 'ngMaterial'];

// Attach module
angular.module(moduleName, moduleDependencies)
    .controller('appController', appController)
    .directive('mpUserbar', userbarDirective)
    .directive('mpSidebar', sidebarDirective)
    .config(theme)
    .config(router)
;//END

export default moduleName;
