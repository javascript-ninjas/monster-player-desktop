import AppState from './../states/app/AppState.js';
import HomeState from './../states/home/HomeState.js';
import RegisterState from './../states/sessionRegister/RegisterState.js';
import SignInState from './../states/sessionSignIn/SignInState.js';

let Router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        .state(AppState.name, AppState.state)
        .state(HomeState.name, HomeState.state)
        .state(RegisterState.name, RegisterState.state)
        .state(SignInState.name, SignInState.state)
    ;//END
};

export default Router;
