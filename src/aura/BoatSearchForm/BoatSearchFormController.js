/**
 * Created by Igor on 28.03.2020.
 */
({
    doInit: function (component, event, helper) {

        helper.loadBoatTypes(component, event);
        var isCreateRecordEnabled = $A.get("e.force:createRecord");

        if(isCreateRecordEnabled){
            component.set("v.showNewButton", true);
        }
    },

    createRecord: function (component, event, helper) {

        var boatType = component.find("selectBoatType").get("v.value");

        var createBoat = $A.get("e.force:createRecord");

        if(boatType !== "") {
            createBoat.setParams({
                entityApiName: "Boat__c",
                defaultFieldValues: {BoatType__c: boatType}
            });
        }else if(boatType === ""){
            createBoat.setParams({
                entityApiName: "Boat__c"
            });
        }

        createBoat.fire();
    },

    onFormSubmit: function (component, event, helper) {

        var boatTypeId = component.find("selectBoatType").get("v.value");

        var formSubmitEvent = component.getEvent("formSubmit");

        formSubmitEvent.setParams({
           "formData":
               {"boatTypeId" : boatTypeId}
        });
        formSubmitEvent.fire();
    }
});