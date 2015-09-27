import template from './SessionState.html';

let SessionState = {
    name: 'session',
    state: {
    	abstract: true,
        views: {
            'app': {
                template
            }
        }
    }
}

export default SessionState;
