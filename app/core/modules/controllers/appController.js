class appController {
    /*@ngInject*/
    constructor($scope) {
        $scope.applicationName = 'Monster Player';
        $scope.user = {
            firstName: 'Koń',
            lastName: 'Rafał'
        }
    }
}

export default appController;
