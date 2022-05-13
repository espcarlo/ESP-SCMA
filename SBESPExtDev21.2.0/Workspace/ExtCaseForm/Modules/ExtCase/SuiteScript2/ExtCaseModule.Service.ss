/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define([
        './ExtCaseModule.Model.js','N/runtime'
    ],function (ExtCaseModel,runtime) {
    "use strict";
    function service (context) {
        var response = {};
        function isLoggedIn () {
            var user = runtime.getCurrentUser();
            return user.id > 0 && user.role !== 17
        }  
        if(isLoggedIn()){
            switch (context.request.method) {
            
                case 'GET':
                    response = ExtCaseModel.get(context.request)
                    break;
    
            }   
        }else{
            response = {
                type: 'error',
                message: 'You must be logged in to use this service'
            }
        }
        

        context.response.write(JSON.stringify(response));
    }
    return {
        service: service
        
    };
});
