/**
 * Created by Igor on 29.03.2020.
 */
({
    doSearch: function (component, event, helper) {

        var param = event.getParam("arguments");

        if (param){
            var boatTypeId = param.formData;
            component.set("v.boatTypeId", boatTypeId);
        }
        helper.onSearch(component, event);
    },
    
    onBoatSelect: function (component, event, helper) {

        var boatId = event.getParam("boatId");
        component.set("v.selectedBoatId", boatId);
    }
});