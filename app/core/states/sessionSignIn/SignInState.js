import template from './SignInState.html';
import controller from './SignInController';

let SignInState = {
    name: 'session.signin',
    state: {
        url: '/session/signin',
        views: {
            'session': {
                template,
                controller
            }
        }
    }
}

export default SignInState;
