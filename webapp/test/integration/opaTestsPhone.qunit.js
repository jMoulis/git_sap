/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"exo/ExoTest/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});