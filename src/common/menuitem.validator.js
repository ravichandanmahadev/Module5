(function(){
  "use strict";
  var module = angular.module("common");
  module.directive('menuValidator', menutItemValidator);

  menutItemValidator.$inject = ['$http', '$q','MenuService'];
  function menutItemValidator($http,$q,MenuService){
    return {
        require: 'ngModel',
        link: function($scope, $elem, $attr, ctrl) {
            ctrl.$asyncValidators.menuValidator = function(value) {
              return MenuService.getMenuItem(value).then(function(response){
                  return true;
              }).catch(function(){
                return $q.reject("Please enter valid item id");
              });              
            }
        }
    };
  }

})();
