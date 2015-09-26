import template from './SessionState.html';

let SessionState = {
    name: 'app.session',
    state: {
        abstract: true,
        views: {
            'session@': {
                template
            }
        }
    }
}

export default SessionState;
