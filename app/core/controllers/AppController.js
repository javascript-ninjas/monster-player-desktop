class AppController {
    /*@ngInject*/
    constructor($scope, SessionService) {
        $scope.applicationName = 'Monster Player';
        $scope.user = SessionService.getUser();
        console.debug($scope.user);
    }
}

export default AppController;
