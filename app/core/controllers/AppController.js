import EVENTS from './../events/events';

class AppController {
    /*@ngInject*/
    constructor($rootScope, $scope, SessionService) {
        $scope.applicationName = 'Monster Player';
        $scope.user = SessionService.getUser();

        $rootScope.$on(EVENTS.REFRESH_AUTHDATA, ($event, authData) => {
            $scope.user = authData;
        })
    }
}

export default AppController;
