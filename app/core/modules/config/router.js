import homeState from './../states/home/home.js';
import sessionState from './../states/session/session.js';

let router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state(homeState.name, homeState.state)
        .state(sessionState.name, sessionState.state)
    ;//END
};

export default router;
