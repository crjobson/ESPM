sap.ui.define([
		"espm/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (BaseController, JSONModel) {
		"use strict";

		return BaseController.extend("espm.controller.App", {

			onInit : function () {
				var oViewModel,
					fnSetAppNotBusy,
					oListSelector = this.getOwnerComponent().oListSelector,
					iOriginalBusyDelay = this.getView().getBusyIndicatorDelay();

				oViewModel = new JSONModel({
					busy : true,
					delay : 0
				});
				this.setModel(oViewModel, "appView");

				fnSetAppNotBusy = function() {
					oViewModel.setProperty("/busy", false);
					oViewModel.setProperty("/delay", iOriginalBusyDelay);
				};

				this.getOwnerComponent().getModel().metadataLoaded()
						.then(fnSetAppNotBusy);

				// Makes sure that master view is hidden in split app
				// after a new list entry has been selected.
				oListSelector.attachListSelectionChange(function () {
					this.byId("idAppControl").hideMaster();
				}, this);

				// apply content density mode to root view
				this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
				
				var oModel = new sap.ui.model.json.JSONModel({"templateID": null /*"327F317A-CC24-4731-B2FE-1BB4810E14A6"*/});
				
				sap.ui.getCore().setModel(oModel, "global");
				
				jQuery.ajax({
					url : " /services/userapi/currentUser",
					async : false,
					type: "GET",
					headers: {
						'accept': 'application/json'
					},
					success : function(data, textStatus, xhr) {
						oModel.setProperty("/username", data.name);
					},
					error : function(xhr, textStatus, error) {
					}
				});
			}

		});

	}
);