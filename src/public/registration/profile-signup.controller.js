(function(){
"use strict";
var module = angular.module("public");
module.controller("signupcontroller", signupcontrollerfunction);

signupcontrollerfunction.$inject= ['profileservice'];
function signupcontrollerfunction(profileservice)
{
   var $ctrl = this;

   // ON CLICKING SUBMIT
   $ctrl.onsubmit = function(){
     //POPULATE THE REQUEST OBJECT
     var request = { firstName:$ctrl.FirstName,lastName:$ctrl.LastName,eMail:$ctrl.eMail,phoneNumber:$ctrl.PhoneNumber,
                      menuItemId:$ctrl.ItemId };

     //SET PROFILE
     profileservice.setProfile(request);
     $ctrl.successMessage= true;
   }

  }
})();
