#!/usr/bin/env node

/*
 * qb-export-node
 *
 * QuickBooks Online lists export tool powered by node.js
 * https://github.com/waltzofpearls/qb-export-node
 *
 * Copyright (c) 2014 Topbass Labs (topbasslabs.com)
 * Author Waltz.of.Pearls <rollie@topbasslabs.com, rollie.ma@gmail.com>
 */

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
