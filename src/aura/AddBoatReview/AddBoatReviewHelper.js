({
    onInit: function (component, event) {

        var boatId = component.get("v.boat").Id;

        component.find("service").getNewRecord(
            "BoatReview__c",
            null,
            false,
            $A.getCallback(function () {

                //var boat = component.get("v.boat");
                var record = component.get("v.boatReview");
                var error = component.get("v.recordError");

                if (error || (record === null)){
                    console.log('record error addBoatReviewHelper.getNewRecord: ' + error);
                }
                else {
                    console.log("boat.Id: " + boatId);

                    record.Boat__c = component.get("v.boat").Id;
                    component.set("v.boatReview.Boat__c", component.get("v.boat").Id);
                    //component.set("v.newBoatReview.Boat__c", boatId);

                    console.log('boatReview: ' + JSON.stringify(component.get('v.boatReview')));
                    console.log('record template is initialized ' + record.sobjectType);
                }
            }));
    }
});