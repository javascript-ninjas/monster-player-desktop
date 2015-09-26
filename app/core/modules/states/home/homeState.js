import template from './homeState.html';

let homeState = {
    name: 'home',
    state: {
        url: '/home',
        views: {
            'main': {
                template
            }
        }
    }
}

export default homeState;
