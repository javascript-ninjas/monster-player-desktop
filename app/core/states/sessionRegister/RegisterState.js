import template from './RegisterState.html';
import controller from './RegisterController';

let RegisterState = {
    name: 'app.register',
    state: {
        url: '/register',
        views: {
            'session': {
                template,
                controller
            }
        }
    }
}

export default RegisterState;
