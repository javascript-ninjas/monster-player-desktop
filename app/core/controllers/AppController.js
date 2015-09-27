import EVENTS from './../events/events';

class AppController {
    /*@ngInject*/
    constructor($rootScope, $scope, SessionService) {
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
				what: 'Brunch this weekend?',
				who: 'Ali Conners',
				when: '3:08PM',
				notes: " I'll be in your neighborhood doing errands"
			},
			{
				what: 'Summer BBQ',
				who: 'to Alex, Scott, Jennifer',
				when: '3:08PM',
				notes: "Wish I could come out but I'm out of town this weekend"
			},
			{
				what: 'Oui Oui',
				who: 'Sandra Adams',
				when: '3:08PM',
				notes: "Do you have Paris recommendations? Have you ever been?"
			},
			{
				what: 'Birthday Gift',
				who: 'Trevor Hansen',
				when: '3:08PM',
				notes: "Have any ideas of what we should get Heidi for her birthday?"
			},
			{
				what: 'Recipe to try',
				who: 'Brian Holt',
				when: '3:08PM',
				notes: "We should eat this: Grapefruit, Squash, Corn, and Tomatillo tacos"
			}
	    ];

        $rootScope.$on(EVENTS.REFRESH_AUTHDATA, ($event, authData) => {
            $scope.user = authData;
        })
    }
}

export default AppController;
