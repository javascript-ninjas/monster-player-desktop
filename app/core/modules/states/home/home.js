import template from './home.html';

let state = {
    name: 'home',
    state: {
        url: '/home',
        views: {
            'main': {
                template: template
            }
        }
    }
}

export default state;