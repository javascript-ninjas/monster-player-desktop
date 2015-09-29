import template from './HomeState.html';

let HomeState = {
    name: 'app.home',
    state: {
        url: '/home',
        views: {
            'main@app': {
                template
            }
        }
    }
}

export default HomeState;
