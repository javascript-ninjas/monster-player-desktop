import template from './SignInState.html';
import controller from './SignInController';

let SignInState = {
    name: 'app.signin',
    state: {
        url: '/signin',
        views: {
            'session': {
                template,
                controller
            }
        }
    }
}

export default SignInState;
