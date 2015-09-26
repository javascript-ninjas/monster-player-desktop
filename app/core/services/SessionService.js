class SessionService {
    user = {};
    isUserLoggedIn = false;

    /*@ngInject*/
    constructor($state, RequestService) {
        this.fetchUser();

        if (!this.isUserLoggedIn) {
            $state.go('session');
        } else {
            $state.go('home');
        }

        RequestService.ask('signin', {
            email: 'aaa',
            password: 'bbb'
        }).then(
            (response) => { console.debug(response) },
            (response) => { console.debug('#ERROR: ', response) }
        );
    }

    fetchUser() {
        this.user = {
            firstName: 'Koń',
            lastName: 'Rafał',
            isLoggedIn: this.isUserLoggedIn
        }
    }

};

export default SessionService;
