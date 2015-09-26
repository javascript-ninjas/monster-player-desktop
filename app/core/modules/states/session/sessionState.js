import template from './sessionState.html'

let sessionState = {
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

export default sessionState;
