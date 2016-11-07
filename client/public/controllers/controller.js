/**
 * Author:  BangaruBabu
 * Date : 2-Feb-2015
 * Description:  Angular Script Controller for Displaying Data Points by hitting REST API
 * 
 * /

/* Initialize myApp angular app */
angular.module('myApp', []).controller('namesCtrl', function($scope,$http) {


/* Cona*/
var refresh = function(){	
		// Consume the API call.
	  	$http.get('http://localhost:8080/api/v1/persons').success(function(data) {
          $scope.names = data;
        });
};

/*Empty Form Controls*/
var clearSearch = function () {
        $scope.FullName = "";  $scope.Email = "";  $scope.MobileNumber = "";
};

refresh();

  
$scope.getPersonInfo = function(Person) {	  
        $scope.selected = Person;
}
	//This will hide the DIV by default.
            $scope.IsHidden = true;
            $scope.ShowHide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }

			$scope.submit = function() {
			var Persondata = {
			"FullName": $scope.FullName,
			"MobileNumber":$scope.MobileNumber,
			"Email":$scope.Email
			};
			
		  $http({
			          method  : 'POST',
			          url     : 'http://localhost:8080/api/v1/persons',
			          data    : Persondata, 
			          headers : {'Content-Type': 'application/json'} 
			          
         		}).success(function(data, status, headers, config){

		if(status = 200){
		 		$scope.IsHidden = true;		
		 		refresh();
		 		clearSearch();
		}
		
		
});
      };
	  
	  
   
});
