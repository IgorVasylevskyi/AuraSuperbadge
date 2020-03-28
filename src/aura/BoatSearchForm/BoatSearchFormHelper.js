/**
 * Created by Igor on 28.03.2020.
 */
({
    loadBoatTypes: function (component, event) {

        var action = component.get("c.getBoatTypes");

        action.setCallback(this, function (response) {

            component.set("v.picklistValues", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
});