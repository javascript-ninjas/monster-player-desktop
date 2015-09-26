let errorHandler = /*@ngInject*/ ($httpProvider, $stateProvider, $urlRouterProvider) => {
    // Globalna obsługa błędu 401 - koniec sesji.
    $httpProvider.interceptors.push(($q, $window, $document) => {
        return {
            // TODO: Ogarnąć jak będzie usługa.
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

export default errorHandler;
