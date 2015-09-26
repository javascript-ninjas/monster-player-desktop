class SessionService {
    user = {};

    /*@ngInject*/
    constructor($state, RequestService) {
        this.RequestService = RequestService;
        this.$state = $state;

        if (this.user && this.user.login) {
            $state.go('home');
        } else {
            $state.go('session.signin');
        }
    }

    signIn(authData) {
        let successHandler = (response) => {
            if (response.data.status === 'success' && response.data.login) { 
                // TODO: lack of service - pass user data.
                this.setUser(authData);
                this.$state.go('home');
            }
        };
        // TODO: error handler.
        let errorHandler = (response) => { console.debug(response) };

        this.RequestService.ask('signin', authData).then(successHandler, errorHandler);
    }

    signUp(authData) {
        let successHandler = (response) => { 
            if (response.data.status === 'success' && response.data.login) {
                this.setUser(authData);
                this.$state.go('home');
            }
        };
        // TODO: error handler.
        let errorHandler = (response) => { console.debug(response) };

        this.RequestService.ask('signup', authData).then(successHandler, errorHandler);
    }

    setUser(authData) {
        if (authData) {
            this.user = authData;
        } else {
            // MOCK
            this.user = {
                "status": "success",
                "login": true,
                "user": {
                    "_id": "5606e30b3f3601ec0514fcd7",
                    "name": "rendfall",
                    "email": "rendfall@gmail.com",
                    "password": "dwa",
                    "avatar": "http://placehold.it/32x32",
                    "token": "ff166d597646843d935dab9042fc0375"
                }
            };
        }
    }

    getUser() {
        return this.user;
    }
};

export default SessionService;
