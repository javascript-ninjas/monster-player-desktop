import template from './RegisterState.html';
import controller from './RegisterController';

let RegisterState = {
    name: 'session.register',
    state: {
        url: '/session/register',
        views: {
            'session': {
                template,
                controller
            }
        }
    }
}

export default RegisterState;
