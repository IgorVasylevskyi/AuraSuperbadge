/**
 * Created by Igor on 30.03.2020.
 */
({
    onFormSubmit: function (component, event, helper) {

        var formData = event.getParam("formData");
        var boatTypeId = formData.boatTypeId;

        var boatSearchResultsCmp = component.find("results");

        var result = boatSearchResultsCmp.search(boatTypeId);
    }
});
