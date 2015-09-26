import homeState from './../states/home/home.js';

let router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state(homeState.name, homeState.state)
    ;//END
};

export default router;
