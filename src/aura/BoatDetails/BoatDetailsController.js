({
    onBoatSelected: function (component, event, helper) {

        var boat = event.getParam("boat");

        component.set("v.Id", boat.Id);
        component.find("service").reloadRecord();

    },

    onRecordUpdated: function (component, event, helper) {


    }
});