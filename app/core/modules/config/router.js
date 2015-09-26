let router = /*@ngInject*/ ($stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/home',
            views: {
                'main': {
                    template: 'test'
                }
            }
        })
    ;//END
};

export default router;
