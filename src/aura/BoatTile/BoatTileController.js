/**
 * Created by Igor on 30.03.2020.
 */
({
    onBoatClick: function (component, event, helper) {

        var boat = component.get("v.boat");
        var boatId = component.get("v.boat").Id;
        var boatSelect = component.getEvent("boatSelect");

        boatSelect.setParams({
            "boatId": boatId
        });
        boatSelect.fire();

        var boatSelected = $A.get("e.c:BoatSelected");
        boatSelected.setParams({
           "boat": boat
        });
        boatSelected.fire();

        var plotMapMarkerEvt = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvt.setParams({
            'sObjectId': boatId,
            'lat': boat.Geolocation__Latitude__s,
            'long': boat.Geolocation__Longtitude__s,
            'label': boat.Name
        });
        plotMapMarkerEvt.fire();
    }
});