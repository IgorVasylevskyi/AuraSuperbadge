({
    onBoatSelected: function (component, event, helper) {

        var boat = event.getParam("boat");

        component.set("v.Id", boat.Id);
        component.find("service").reloadRecord();

    },

    onRecordUpdated: function (component, event, helper) {

    },

    onBoatReviewAdded: function (component, event, helper) {

        component.find("tabs").set("v.selectedTabId", "boatreviewtab");
    }
});