/**
 *
 */
var myapp=angular.module("myapp",["ionic"]);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("tour",{
            url:"/tour",
            templateUrl:"views/tour/tour.html"
        })
        .state("tabs",{
            url:"/tabs",
            abstract:true,  // 抽象的，意思是不直接实例化显示这个状态
            templateUrl:"views/tabs/tabs.html"
        })
        .state("tabs.home",{
            url:"/home",
            views:{"tab-home":{templateUrl:"views/home/home.html",controller:"homeCtrl"}}

        })
        .state("tabs.video",{
            url:"/video",
            views:{"tab-home":{templateUrl:"views/video/video.html"}}
        })
        .state("tabs.near",{
            url:"/near",
            views:{"tab-near":{templateUrl:"views/near/near.html"}}
        })
        .state("tabs.tantan",{
            url:"/tantan",
            views:{"tab-tantan":{templateUrl:"views/tantan/tantan.html"}}
        })
        .state("tabs.buy",{
            url:"/buy",
            views:{"tab-buy":{templateUrl:"views/buy/buy.html"}}
        })

    // 默认首页
    //$urlRouterProvider.otherwise("/tabs/home");
    $urlRouterProvider.otherwise("/tour");
});


