sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the currency value to 2 digits
		 *
		 * @public
		 * @param {string} sValue value to be formatted
		 * @returns {string} formatted currency value with 2 digits
		 */
		currencyValue : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

		stockProductState: function (sValue) {
			if (sValue < 20) return "Error";
			if (sValue >= 20 && sValue <= 50) return "Warning";
			return "Success";
		}
	};
});