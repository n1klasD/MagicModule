/* global Module */

/* Magic Mirror
 * Module: MagicModule
 *
 * By Niklas Drössler, Simon Stauss.
 */

var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
    start: function() {
        // Create a new route triggering the refresh
        const self = this;
        Log.log("Creating refresh route...");
        this.expressApp.post("/refresh", function (req, res) {
            self.sendSocketNotification("refresh", req);
            res.statusCode = 200;
            res.send("POST request to MagicModule");
        });
        Log.log("Refresh route created!");
    },

    socketNotificationReceived: function (notification, payload) {
        Log.log("Notification received: " + notification + ", " + payload);
    }
});