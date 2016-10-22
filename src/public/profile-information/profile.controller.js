(function() {
  "use strict";
  var module = angular.module("common");
  module.controller("profilecontroller", profilecontrollerfunction);

  profilecontrollerfunction.$inject = ['profileInformation','MenuService'];
  function profilecontrollerfunction(profileInformation,MenuService)
  {
      var $ctrl = this ;
      // console.log(profileInformation);
      if(profileInformation)
      {
          $ctrl.profileInformation = profileInformation;
          console.log(profileInformation);
          MenuService.getMenuItem($ctrl.profileInformation.menuId).then(function(response){
          $ctrl.menuItem = response.data;
        });
      }

  }
})();
