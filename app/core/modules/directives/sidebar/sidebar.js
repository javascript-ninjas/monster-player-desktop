import template from './sidebar.html';

let sidebar = () => {
    return {
        restrict: 'E',
        replace: true,
        template: template
    }
}

export default sidebar;
