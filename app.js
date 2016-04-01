'use strict';

angular.module('app', ['ngMessages'])
    .controller('DynFormCtrl', function (formService,$timeout) {
        var formCtrl = this;
        formService.loadDesc().then(function (fields) {
            formCtrl.fields = fields;
        })
        formCtrl.data = {};
        
        formCtrl.save = function(){
          formCtrl.message="Enregistrement en cours";
          formService.saveData(formCtrl.data)
              .then(function(){
                  formCtrl.message= "Données sauvgardées.";
                  $timeout(function(){
                     formCtrl.message="";
                  },3000);
              });
        };
    })
    .factory('formService', function ($http) {
        var urlDesc = 'https://api.mongolab.com/api/1/databases/forms/collections/forms/51669d15e4b04a20de65fc58?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';
        var urlSave = 'https://api.mongolab.com/api/1/databases/forms/collections/data?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';


        return {
            loadDesc: function () {
                return $http.get(urlDesc)
                    .then(function (response) {
                            return response.data.fields;
                        }, function (response) {
                            throw "Could not load description";
                        }
                    )
            },
            saveData: function (data){
                return $http.post(urlSave,data)
                    .then(function(response){
                        return "save Ok";

                    }, function ( response){
                        throw "Save Error";
                    });
            }
        }
    })
;

