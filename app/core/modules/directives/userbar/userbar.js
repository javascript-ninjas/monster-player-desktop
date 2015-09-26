import template from './userbar.html';

let userbar = () => {
    return {
        restrict: 'E',
        replace: true,
        template: template
    }
}

export default userbar;
