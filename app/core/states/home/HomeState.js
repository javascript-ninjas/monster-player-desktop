import template from './HomeState.html';

let HomeState = {
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

export default HomeState;
