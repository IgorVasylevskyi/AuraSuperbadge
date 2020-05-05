({
    onBoatSelected: function (component, event, helper) {

        var boat = event.getParam("boat");

        component.set("v.Id", boat.Id);
        component.find("service").reloadRecord();

    },

    onRecordUpdated: function (component, event, helper) {

        var reviews = component.find("reviews");

        if (reviews){
            reviews.refresh();
        }
    },

    onBoatReviewAdded: function (component, event, helper) {

        component.find("tabs").set("v.selectedTabId", "boatreviewtab");

        var reviews = component.find("reviews");

        if (reviews){
            reviews.refresh();
        }
    }
});