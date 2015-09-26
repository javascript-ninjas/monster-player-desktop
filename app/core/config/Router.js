import HomeState from './../states/home/HomeState.js';
import SessionState from './../states/session/SessionState.js';
import RegisterState from './../states/sessionRegister/RegisterState.js';
import SignInState from './../states/sessionSignIn/SignInState.js';

let Router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state(HomeState.name, HomeState.state)
        .state(SessionState.name, SessionState.state)
        .state(RegisterState.name, RegisterState.state)
        .state(SignInState.name, SignInState.state)
    ;//END
};

export default Router;
