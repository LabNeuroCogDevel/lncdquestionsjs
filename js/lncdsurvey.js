/* PouchDB */
	var db = new PouchDB('questioneers');
	var remoteCouch = false;

/* Angular */
	var lncdquestModule = angular.module('lncdquest', ['ngRoute']);
	
	lncdquestModule.config(function($routeProvider,$locationProvider){
		$routeProvider
		  .when('/:RA/:ID/:first/:last/:surveys', 
			{templateUrl: 'survey.html', 
			controller: SurveyWrap})
		  .otherwise(
		  	{templateUrl: 'initial.html', 
			controller: Start });
     });

    /* Where we start (initial.html) */
	Start = function($scope,$location) {
		$scope.env = {};
		$scope.env.qnames = questioneers.map(function(x){return {name: x.name,value: true} } ); //TODO:  use only checked surveys
		//$scope.env.qidxs = {1: true,2:true,};
		console.log($scope.env.qnames);
		
		$scope.StartSurveys = function() { 
            /* ugly way to get survey index numbers
               we are doing this so we can pass surveys to use via url (get)
            
              This might be a questionable design decision 
              (who's going to know the numbers to be able to enter the url by hand)
            */
            var survenum=[];
            var checked=_.pluck($scope.env.qnames,'value');
            for(var i=0;i<checked.length;i++){
            	if(checked[i]) { survenum.push(i) }
            }
            console.log(survenum);
			$location.path('/' + $scope.env.RA +'/'+$scope.env.ID + '/' + $scope.env.First + '/' + $scope.env.Last + '/' + survenum.join('+') )	
		};
	}


	/*  Meat and Potatoes: the survey controller -- template is survey.html  */
	SurveyWrap =	function($scope,$routeParams) {
			var env = {};
			/* we can do something here to select which questioneers to use */
			survenum = $routeParams.surveys.split('+')
			env.questioneers = survenum.map(function(i){return questioneers[i]});

            //define params the verbose way
            env.RA        = $routeParams.RA;
			env.ID        = $routeParams.ID;
			env.firstname = $routeParams.first;
			env.lastname  = $routeParams.last;
			env.date      = new Date();
			env.Subj      = env.firstname + " " + env.lastname;

			// put env in scope
			$scope.env = env;


            // TODO: SHOULD UPDATE MORE!
			$scope.$watch('env',function(){
	     	   $scope.envencode = 'data:text/html;charset=utf-8,' + encodeURIComponent(JSON.stringify($scope.env));
	     	   console.log('update!');
	        })
    };
    //lncdquestModule.controller('SurveyWrap', SurveyWrap);
	

	lncdquestModule.controller('CheckBoxCtrl',function($scope,$filter){

        $scope.checkedbox = function() {
           
          $scope.q.value = $filter('filter')($scope.q.options, {value: true}).map(function(a){
            return a.label;
          })
          console.log($scope.q.value)
        }
    })

	