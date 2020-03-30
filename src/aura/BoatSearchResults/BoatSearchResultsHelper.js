({
    onSearch: function (component, event) {

        //var boatTypeId = event.getParam("boatTypeId");
        var boatTypeId = component.get("v.boatTypeId");

        var action = component.get("c.getBoats");

        action.setParams({
            "boatTypeId": boatTypeId
        });

        action.setCallback(this, function (response) {
            var state = response.getState();

            if (state === "SUCCESS"){
                var boats = response.getReturnValue();
                if (boats.length !== 0) {
                    component.set("v.boatsNotEmpty", true);
                    component.set("v.boats", response.getReturnValue());
                }
                else if (boats.length === 0){
                    component.set("v.boatsNotEmpty", false);
                }
            }
            else {
                console.log('error in BoatSearchResultsController.onSearch');
            }
        });
        $A.enqueueAction(action);
    }
});