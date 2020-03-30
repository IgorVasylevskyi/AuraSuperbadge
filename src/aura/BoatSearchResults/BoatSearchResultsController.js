/**
 * Created by Igor on 29.03.2020.
 */
({
    /*search: function (component, event, helper) {
        helper.onSearch(component, event);
    }*/
    
    doSearch: function (component, event, helper) {

        var param = event.getParam("arguments");

        if (param){
            var boatTypeId = param.formData;
            console.log('id indosearch: ' + boatTypeId);
            component.set("v.boatTypeId", boatTypeId);
        }
        helper.onSearch(component, event);
    }
});