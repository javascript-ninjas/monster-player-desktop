class SignInController {
    /*@ngInject*/
    constructor($scope, SessionService) {
        $scope.signIn = () => {
            let email = $scope.email;
            let password = $scope.password;
            
            // TODO: Validate
            if (email && password) {
                SessionService.signIn({ email, password });
            }
        };
    }
}

export default SignInController;
