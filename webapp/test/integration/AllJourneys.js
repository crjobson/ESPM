jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Suppliers in the list
// * All 3 Suppliers have at least one Products

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
		"espm/test/integration/MasterJourney",
		"espm/test/integration/NavigationJourney",
		"espm/test/integration/NotFoundJourney",
		"espm/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});