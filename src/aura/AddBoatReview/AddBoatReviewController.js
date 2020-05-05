({
    /*doInit: function(component, event, helper){

        /*var boatId = component.get("v.boat").Id;
        component.set("v.boatReview.Boat__c", boatId);

        component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function () {
                var rec = component.get("v.boat");
                if (rec === null){
                    console.log('var rec is null');
                }
                else {

                }
            }));
    },*/
    doInit: function(component, event, helper){
        helper.onInit(component, event);
    },

    onSave: function (component, event, helper) {

        component.find("service").saveRecord($A.getCallback(function (saveResult) {

            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT"){

                var toastEvent = $A.get("e.force:showToast");

                if(toastEvent) {
                    toastEvent.setParams({
                        "type": "success",
                        "title": "Success!",
                        "message": "The record has been saved successfully"
                    });
                    toastEvent.fire();
                }else{
                    alert("Record was saved");
                }

                var boatReviewAddedEvt = component.getEvent("boatReviewAdded");
                boatReviewAddedEvt.fire();

                helper.onInit(component, event, helper);
            }
            else if (saveResult.state === "ERROR"){
                console.log("error saveRecord: " + JSON.stringify(saveResult.error) + ", state: " + saveResult.state);
            }

            else{
                console.log("Unknown problem, state: " + saveResult.state + ", error: " +
                    JSON.stringify(saveResult.error));
            }
        }))

    },
    
    onRecordUpdated: function (component, event, helper) {

        var eventParams = event.getParams();

        if(eventParams.changeType === "CHANGED"){
            var changedFields = eventParams.changedFields;

            var saveResultToast = $A.get("e.force.showToast");

            if(saveResultToast !== undefined){
                saveResultToast.setParams({
                    "title": "Ssved",
                    "message": "Boat Review Saved"
                });
                saveResultToast.fire();

            }
            else{
                alert("Boat Review saved");
            }
        }
    }
});
