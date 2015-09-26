import template from './SessionState.html';

let SessionState = {
    name: 'session',
    state: {
        views: {
            'main': {
                abstract: true,
                url: '/session',
                template
            }
        }
    }
}

export default SessionState;
