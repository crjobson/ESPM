jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"espm/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"espm/test/integration/pages/App",
	"espm/test/integration/pages/Browser",
	"espm/test/integration/pages/Master",
	"espm/test/integration/pages/Detail",
	"espm/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "espm.view."
	});

	sap.ui.require([
		"espm/test/integration/NavigationJourneyPhone",
		"espm/test/integration/NotFoundJourneyPhone",
		"espm/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});