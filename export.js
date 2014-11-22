#!/usr/bin/env node

var qbexport = require("./libs/qbexport");
var settings = require("./settings");

try {
    var qe = new qbexport(settings);

    qe.fetchAccounts()
        .then(function(response) {
            return qe.writeAccounts(response);
        })
        .then(function() {
            return qe.fetchVendors();
        })
        .then(function(response) {
            return qe.writeVendors(response);
        })
        .fail(function(error) {
            throw new Error(error);
        });
} catch (err) {
    console.error(err);
}
