/**
* @NApiVersion 2.x
* @NModuleScope Public
*/
define([
        './ExtCase.Model.js','N/runtime'
    ],function (ExtCaseModel,runtime) {
    "use strict";
    function isLoggedIn () {
        var user = runtime.getCurrentUser();
        return user.id > 0 && user.role !== 17
    }   
    function service (context) {
        var response = {};
        if(isLoggedIn()){
            switch (context.request.method) {
                case 'POST':
                    response = ExtCaseModel.post(context.request)
                    break;
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
