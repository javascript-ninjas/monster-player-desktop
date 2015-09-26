import template from './AppState.html';

let AppState = {
    name: 'app',
    state: {
        abstract: true,
        views: {
            'app': {
                template
            }
        }
    }
}

export default AppState;
