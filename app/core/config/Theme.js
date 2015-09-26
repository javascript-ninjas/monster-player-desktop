let Theme = /*@ngInject*/ ($mdThemingProvider, $mdIconProvider) => {
   // Material - Icons
    $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128)
        .icon("menu", "http://placehold.it/24x24", 24)
    ;//END

    let palettes = [
        'red',
        'pink',
        'purple',
        'deep-purple',
        'indigo',
        'blue',
        'light-blue',
        'cyan',
        'teal',
        'green',
        'light-green',
        'lime',
        'yellow',
        'amber',
        'orange',
        'deep-orange',
        'brown',
        'grey',
        'blue-grey'
    ];
    let palette = _.sample(palettes);

    // Material - Theme
    $mdThemingProvider.theme('default')
        .primaryPalette(palette)
        .accentPalette('red')
    ;//END
};

export default Theme;
