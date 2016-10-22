(function(){
"use strict";
var module = angular.module("public");
module.controller("signupcontroller", signupcontrollerfunction);

signupcontrollerfunction.$inject= ['profileservice'];
function signupcontrollerfunction(profileservice)
{
   var $ctrl = this;

   $ctrl.onsubmit = function(){
     var request = {
                      firstName:$ctrl.FirstName,
                      lastName:$ctrl.LastName,
                      eMail:$ctrl.eMail,
                      phoneNumber:$ctrl.PhoneNumber,
                      menuItemId:$ctrl.ItemId
                    };
     profileservice.setProfile(request);
     $ctrl.successMessage= true;
   }

  }
})();
