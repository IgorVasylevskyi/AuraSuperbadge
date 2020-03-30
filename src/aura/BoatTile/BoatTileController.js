/**
 * Created by Igor on 30.03.2020.
 */
({
    onBoatClick: function (component, event, helper) {

        var boatId = component.get("v.boat").Id;
        var boatSelect = component.getEvent("boatSelect");

        boatSelect.setParams({
            "boatId": boatId
        });
        boatSelect.fire();
    }
});