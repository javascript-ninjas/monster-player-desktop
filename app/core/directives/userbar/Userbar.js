import template from './Userbar.html';

let Userbar = () => {
    return {
        restrict: 'E',
        replace: true,
        template: template
    }
}

export default Userbar;
