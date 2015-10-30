var appTopStory=angular.module('topStoryApp',[]);

appTopStory.controller('topStoryCtrl',function TopStory($scope,$http){
	$http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
	    .success(function (data){
	    	$scope.storyID=data[0];
	    	var URL='https://hacker-news.firebaseio.com/v0/item/'+$scope.storyID+'.json?print=pretty';
	    	$http.get(URL)
	    	.success(function(storyData){
	    	    $scope.storyInfo=storyData;
	    	});
	    });
});