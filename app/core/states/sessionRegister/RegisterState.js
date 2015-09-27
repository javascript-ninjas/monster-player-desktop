import template from './RegisterState.html';
import controller from './RegisterController';

let RegisterState = {
    name: 'register',
    state: {
        url: '/register',
        views: {
            'app': {
                template,
                controller
            }
        }
    }
}

export default RegisterState;
