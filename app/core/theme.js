let theme = /*@ngInject*/ ($mdThemingProvider, $mdIconProvider) => {
   // Material - Icons
    $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "http://placehold.it/24x24", 24)
    ;//END

    // Material - Theme
    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('red')
    ;//END
};

export default theme;
