import template from './Sidebar.html';

let Sidebar = () => {
    return {
        restrict: 'E',
        replace: true,
        template: template
    }
}

export default Sidebar;
