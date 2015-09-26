class AppController {
    /*@ngInject*/
    constructor($scope, SessionService) {
        $scope.applicationName = 'Monster Player';
        $scope.user = SessionService.user;
    }
}

export default AppController;
