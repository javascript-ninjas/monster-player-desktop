class RegisterController {
    /*@ngInject*/
    constructor($scope, SessionService) {
        $scope.register = () => {
            let email = $scope.email;
            let name = $scope.username;
            let password = $scope.password;
            let password2 = $scope.password2;
            let isMatched = angular.equals(password, password2);

            // TODO: Validate
            if (name && email && password && isMatched) {
                SessionService.signUp({ name, email, password, password2 });
            }
        };

    }
}

export default RegisterController;
