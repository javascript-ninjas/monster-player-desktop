
// Configs
import Theme from './../config/Theme';
import Router from './../config/Router';
import ErrorHandler from './../config/ErrorHandler';

// Services
import SessionService from './../services/SessionService';
import RequestService from './../services/RequestService';

// Controllers
import AppController from './../controllers/AppController';

// Directives
import UserbarDirective from './../directives/userbar/Userbar';
import SidebarDirective from './../directives/sidebar/Sidebar';

// Module dependencies
let moduleName = 'MonsterPlayer';
let moduleDependencies = ['ui.router', 'ngMaterial', 'ngAnimate'];

// Attach module
angular.module(moduleName, moduleDependencies)
    .controller('AppController', AppController)

    .directive('mpUserbar', UserbarDirective)
    .directive('mpSidebar', SidebarDirective)

    .service('SessionService', SessionService)
    .service('RequestService', RequestService)

    .config(Theme)
    .config(Router)
    .config(ErrorHandler)

    .run(['$rootScope', '$state', 'SessionService', function ($rootScope, $state, SessionService) {
    	$rootScope.$on("$stateChangeStart", (event, toState, toParams, fromState, fromParams) => {
    		let user = SessionService.getUser();

            if (user && user.login) {
                $state.go('signin');
                event.preventDefault();
            }
        });
    }]);
;//END

export default moduleName;
