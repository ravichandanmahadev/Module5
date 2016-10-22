(function(){
"use strict";
var module = angular.module("common");
module.service("profileservice", profileservicefunction);

profileservicefunction.$inject = [];
function profileservicefunction()
{
  var service = this ;
  var profileObject = null;

  service.getProfile = function()
  {
    return profileObject;
  }
  service.setProfile = function(request)
  {
    profileObject = {};
    profileObject.firstName =request.firstName;
    profileObject.lastName = request.lastName;
    profileObject.eMail =request.eMail;
    profileObject.phoneNumber = request.phoneNumber;
    profileObject.menuId = request.menuItemId;

  }
}

})();
