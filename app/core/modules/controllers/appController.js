class appController {
    /*@ngInject*/
    constructor($scope, sessionService) {
        $scope.applicationName = 'Monster Player';
        $scope.user = sessionService.user;
    }
}

export default appController;
