import HomeState from './../states/home/HomeState.js';
import SessionState from './../states/session/SessionState.js';

let Router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state(HomeState.name, HomeState.state)
        .state(SessionState.name, SessionState.state)
    ;//END
};

export default Router;
