import Ember from "ember";
import windowProxy from "window-location-example/utilities/window-proxy";

export default Ember.Controller.extend({
    actions: {
        logout: function() {
            var url = "http://www.google.com";
            windowProxy.changeLocation(url);
            //window.location = url;
        }
    }
});
