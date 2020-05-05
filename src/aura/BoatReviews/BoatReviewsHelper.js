({
    onInit: function (component, event) {

        var boatId = component.get("v.boat").Id;
        console.log('boatId: ' + boatId);

        var action = component.get("c.getAll");

        action.setParams({
            "boatId": boatId
        });

        action.setCallback(this, function (response) {

            var state= response.getState();

            if (state === "SUCCESS"){

                var boatReviews = response.getReturnValue();

                if(boatReviews.length > 0){
                    component.set("v.reviewsExists", true);
                }
                component.set("v.boatReviews", boatReviews);
            }
            else if(state === "ERROR"){

                console.log('error in onInit');
            }
        });
        $A.enqueueAction(action);
    }
});