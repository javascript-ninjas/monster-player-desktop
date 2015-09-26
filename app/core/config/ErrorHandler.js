let ErrorHandler = /*@ngInject*/ ($httpProvider, $stateProvider, $urlRouterProvider) => {
    // Global 401 handler - end session.
    $httpProvider.interceptors.push(($q, $window, $document) => {
        return {
            // TODO: Handle this if will be service.
            // 'responseError': (rejection) => {
            //     if (rejection.status === 401) {
            //         // Usunięcie ciasteczka sesji.
            //         $document[0].cookie = `session_id=; expires=${(new Date().toGMTString())}; path=/`;
            //         // Przekierowanie na stronę główną.
            //         $window.location = '/session';
            //     }
            //     return $q.reject(rejection);
            // }
        }
    })
};

export default ErrorHandler;
