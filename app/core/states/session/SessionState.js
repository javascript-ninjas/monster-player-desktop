import template from './SessionState.html'

let SessionState = {
    name: 'session',
    state: {
        url: '/session',
        views: {
            'main': {
                template
            }
        }
    }
}

export default SessionState;
