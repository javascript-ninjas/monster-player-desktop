import appController from './controllers/appController';

// Configs
import theme from './config/theme';
import router from './config/router';
import errorHandler from './config/errorHandler';

// Services
import sessionService from './services/sessionService';
import requestService from './services/requestService';

// Directives
import userbarDirective from './directives/userbar/userbar';
import sidebarDirective from './directives/sidebar/sidebar';

// Module dependencies
let moduleName = 'MonsterPlayer';
let moduleDependencies = ['ui.router', 'ngMaterial'];

// Attach module
angular.module(moduleName, moduleDependencies)
    .controller('appController', appController)
    .directive('mpUserbar', userbarDirective)
    .directive('mpSidebar', sidebarDirective)
    .service('sessionService', sessionService)
    .service('requestService', requestService)
    .config(theme)
    .config(router)
    .config(errorHandler)
;//END

export default moduleName;
