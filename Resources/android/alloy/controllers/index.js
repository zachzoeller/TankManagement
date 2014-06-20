function Controller() {
    function sendClicked() {
        var emailDialog = Ti.UI.createEmailDialog();
        emailDialog.subject = "Hello from Titanium";
        emailDialog.html = true;
        emailDialog.toRecipients = [ "zach.zoeller@gmail.com" ];
        emailDialog.messageBody = "<b>New Energy Tank Management</b><br /><p>Tank Number: " + $.tankNumber.value + "</p>" + "<p>From Location: " + $.fromLocation.value + "</p>" + "<p>To Location: " + $.toLocation.value + "</p>" + "<p>Customer: " + $.customer.value + "</p>" + "<p>Charge for Pickup: " + $.chargeForPickup.value + "</p>" + "<p>Charge for Delivery: " + $.chargeForDelivery.value + "</p>";
        emailDialog.open();
    }
    function closeKeyboard(e) {
        e.source.blur();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.tankNumber = Ti.UI.createTextField({
        top: "25dp",
        left: "10",
        right: "60",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "tankNumber",
        hintText: "Tank Number",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.index.add($.__views.tankNumber);
    closeKeyboard ? $.__views.tankNumber.addEventListener("return", closeKeyboard) : __defers["$.__views.tankNumber!return!closeKeyboard"] = true;
    $.__views.fromLocation = Ti.UI.createTextField({
        top: "25dp",
        left: "10",
        right: "60",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "fromLocation",
        hintText: "From Location",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.index.add($.__views.fromLocation);
    closeKeyboard ? $.__views.fromLocation.addEventListener("return", closeKeyboard) : __defers["$.__views.fromLocation!return!closeKeyboard"] = true;
    $.__views.toLocation = Ti.UI.createTextField({
        top: "25dp",
        left: "10",
        right: "60",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "toLocation",
        hintText: "To Location",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.index.add($.__views.toLocation);
    closeKeyboard ? $.__views.toLocation.addEventListener("return", closeKeyboard) : __defers["$.__views.toLocation!return!closeKeyboard"] = true;
    $.__views.customer = Ti.UI.createTextField({
        top: "25dp",
        left: "10",
        right: "60",
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        id: "customer",
        hintText: "Customer",
        height: "40",
        width: Ti.UI.FILL
    });
    $.__views.index.add($.__views.customer);
    closeKeyboard ? $.__views.customer.addEventListener("return", closeKeyboard) : __defers["$.__views.customer!return!closeKeyboard"] = true;
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "20dp",
        textAlign: "left",
        text: "Charge For Pickup",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    $.__views.chargeForPickup = Ti.UI.createSwitch({
        value: false,
        id: "chargeForPickup"
    });
    $.__views.index.add($.__views.chargeForPickup);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "20dp",
        textAlign: "left",
        text: "Charge For Delivery",
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.chargeForDelivery = Ti.UI.createSwitch({
        value: false,
        id: "chargeForDelivery"
    });
    $.__views.index.add($.__views.chargeForDelivery);
    $.__views.__alloyId2 = Ti.UI.createButton({
        title: "Send",
        height: "40",
        width: Ti.UI.FILL,
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    sendClicked ? $.__views.__alloyId2.addEventListener("click", sendClicked) : __defers["$.__views.__alloyId2!click!sendClicked"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.tankNumber!return!closeKeyboard"] && $.__views.tankNumber.addEventListener("return", closeKeyboard);
    __defers["$.__views.fromLocation!return!closeKeyboard"] && $.__views.fromLocation.addEventListener("return", closeKeyboard);
    __defers["$.__views.toLocation!return!closeKeyboard"] && $.__views.toLocation.addEventListener("return", closeKeyboard);
    __defers["$.__views.customer!return!closeKeyboard"] && $.__views.customer.addEventListener("return", closeKeyboard);
    __defers["$.__views.__alloyId2!click!sendClicked"] && $.__views.__alloyId2.addEventListener("click", sendClicked);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;