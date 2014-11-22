/*
 * qb-export-node
 *
 * QuickBooks Online lists export tool powered by node.js
 * https://github.com/waltzofpearls/qb-export-node
 *
 * Copyright (c) 2014 Topbass Labs (topbasslabs.com)
 * Author Waltz.of.Pearls <rollie@topbasslabs.com, rollie.ma@gmail.com>
 */

var fs = require("fs");
var qbexport = require("../../libs/qbexport");
var settings = require("../../settings");

var qe;

settings.verbose = false;

describe("A suite for testing qbexport", function() {
    it("should create an instance of qbexport module", function(done) {
        qe = new qbexport(settings);
        expect(qe instanceof qbexport).toBe(true);
        done();
    });

    it("should fetch accounts list from QBO API", function(done) {
        qe.fetchAccounts().then(function(response) {
            expect(response).toEqual(jasmine.any(Object));
            expect(response.Account).toEqual(jasmine.any(Array));
            done();
        });
    });

    it("should fetch accounts list and write it to a xml file", function(done) {
        qe.fetchAccounts().then(function(response) {
            return qe.writeAccounts(response);
        }).then(function() {
            fs.exists(settings.accountsFile, function(exists) {
                expect(exists).toEqual(true);
                fs.unlink(settings.accountsFile);
                done();
            });
        });
    });

    it("should fetch vendors list from QBO API", function(done) {
        qe.fetchVendors().then(function(response) {
            expect(response).toEqual(jasmine.any(Object));
            expect(response.Vendor).toEqual(jasmine.any(Array));
            done();
        });
    });

    it("should fetch vendors list and write it to a xml file", function(done) {
        qe.fetchVendors().then(function(response) {
            return qe.writeVendors(response);
        }).then(function() {
            fs.exists(settings.vendorsFile, function(exists) {
                expect(exists).toEqual(true);
                fs.unlink(settings.vendorsFile);
                done();
            });
        });
    });
});
