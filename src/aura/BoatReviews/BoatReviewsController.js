({
    doInit: function (component, event, helper) {

        helper.onInit(component, event);
    },

    onUserInfoClick: function (component, event, helper) {

        var targetSource = event.currentTarget;

        var userId = targetSource.dataset.userid;

        var navEvt = $A.get("e.force:navigateToSObject");
        if (navEvt){
            navEvt.setParams({
                "recordId": userId
            });

            navEvt.fire();
        }
    }
});