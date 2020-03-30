({
    onFullDetails: function (component, event, helper) {

        var boatId = component.get("v.boat").Id;

        var navigate = $A.get("e.force:navigateToSObject");
        if (!navigate) {
            component.set("v.showButton", false);
        }
            navigate.setParams({
                "recordId": boatId
            });
            navigate.fire();

    }
});