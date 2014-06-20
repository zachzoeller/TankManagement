$.index.open();

function sendClicked(e) {
    //alert($.label.text);
    //alert($.chargeForPickup.value + ' ' + $.chargeForDelivery.value);
    var emailDialog = Ti.UI.createEmailDialog();
	emailDialog.subject = "Hello from Titanium";
	emailDialog.html = true;
	emailDialog.toRecipients = ['zach.zoeller@gmail.com'];
	emailDialog.messageBody = '<b>New Energy Tank Management</b><br />' +
								'<p>Tank Number: ' + $.tankNumber.value + '</p>' +
								'<p>From Location: ' + $.fromLocation.value + '</p>' +
								'<p>To Location: ' + $.toLocation.value + '</p>' +
								'<p>Customer: ' + $.customer.value + '</p>' +
								'<p>Charge for Pickup: ' + $.chargeForPickup.value + '</p>' +
								'<p>Charge for Delivery: ' + $.chargeForDelivery.value + '</p>';
	
	//var f = Ti.Filesystem.getFile('cricket.wav');
	//emailDialog.addAttachment(f);
	emailDialog.open();
}

function closeKeyboard(e) {
    e.source.blur();
}