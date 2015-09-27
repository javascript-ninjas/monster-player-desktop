import template from './SignInState.html';
import controller from './SignInController';

let SignInState = {
    name: 'signin',
    state: {
        url: '/signin',
        views: {
            'app': {
                template,
                controller
            }
        }
    }
}

export default SignInState;
