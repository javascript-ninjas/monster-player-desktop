import EVENTS from './../events/events';

class AppController {
    /*@ngInject*/
    constructor($rootScope, $scope, $state, SessionService) {
        $scope.applicationName = 'Monster Player';
        $scope.user = SessionService.getUser();

        $scope.sidemenu = [
		    {
		      link : '',
		      title: 'Strona Główna',
		      icon: 'dashboard'
		    },
		    {
		      link : '',
		      title: 'Friends',
		      icon: 'group'
		    },
		    {
		      link : '',
		      title: 'Messages',
		      icon: 'message'
		    }
	  	];

	  	$scope.activity = [
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			},
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			},
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			},
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			},
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			},
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			},
			{
				title: 'Lorem ipsum',
				subtitle: 'Dolor sit amet.',
				time: '3:08PM',
				content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget sagittis nisl. Ut vulputate lectus eu risus porta, maximus varius nisl fringilla. Morbi bibendum libero vel tempor cursus. Phasellus sapien tortor, semper vel ultrices nec, faucibus ut neque. Donec in rutrum justo. Nulla facilisi. Duis placerat congue consequat. Maecenas at mauris accumsan, feugiat arcu vitae, pharetra nisl. Praesent ultrices suscipit purus sit amet aliquam. Pellentesque interdum sem ante, a ultricies massa sollicitudin sit amet. Duis ac leo cursus, euismod sem at, viverra est. Vestibulum quis pharetra felis."
			}
	    ];

        $rootScope.$on(EVENTS.REFRESH_AUTHDATA, ($event, authData) => {
            $scope.user = authData;
        });

        $rootScope.$on('$stateChangeStart', (event, toState, toParams, fromState, fromParams) => {
        	console.debug({ toState, toParams, fromState, fromParams });
        });

        console.debug('Current state: ', $state.current);
    }
}

export default AppController;
