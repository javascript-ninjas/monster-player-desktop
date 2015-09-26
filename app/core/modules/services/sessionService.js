class sessionService {
    user = {};
    isUserLoggedIn = false;

    /*@ngInject*/
    constructor($state, requestService) {
        this.fetchUser();

        if (!this.isUserLoggedIn) {
            $state.go('session');
        } else {
            $state.go('home');
        }
    }

    fetchUser() {
        this.user = {
            firstName: 'Koń',
            lastName: 'Rafał',
            isLoggedIn: this.isUserLoggedIn
        }
    }

};

export default sessionService;
