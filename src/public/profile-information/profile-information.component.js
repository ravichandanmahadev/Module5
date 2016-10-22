(function(){
"use strict";

var module = angular.module("common");

module.component("profileInformation",{
  templateUrl:"src/public/profile-information/profileInformation.html",
  bindings : {
    profileData:"<",
  },
})
})();
