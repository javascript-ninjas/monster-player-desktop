import template from './AppState.html';

let AppState = {
    name: 'app',
    state: {
    	url: '/',
        views: {
            'app': {
                template
            }
        }
    }
}

export default AppState;
