import homeState from './../states/home/homeState.js';
import sessionState from './../states/session/sessionState.js';

let router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state(homeState.name, homeState.state)
        .state(sessionState.name, sessionState.state)
    ;//END
};

export default router;
