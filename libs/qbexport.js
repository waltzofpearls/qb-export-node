/*
 * qb-export-node
 *
 * QuickBooks Online lists export tool powered by node.js
 * https://github.com/waltzofpearls/qb-export-node
 *
 * Copyright (c) 2014 Topbass Labs (topbasslabs.com)
 * Author Waltz.of.Pearls <rollie@topbasslabs.com, rollie.ma@gmail.com>
 */

var Q = require("q");
var fs = require("fs");
var colors = require("colors");
var quickbooks = require("node-quickbooks");
var js2xmlparser = require("js2xmlparser");

exports = module.exports = QbExport;

function QbExport(settings) {
    settings = settings || {};

    this.consumerKey = settings.consumerKey || "";
    this.consumerSecret = settings.consumerSecret || "";
    this.oauthToken = settings.oauthToken || "";
    this.oauthTokenSecret = settings.oauthTokenSecret || "";
    this.realmId = settings.realmId || settings.companyId || "";
    this.debug = settings.debug || false;

    this.accountsFile = settings.accountsFile || "./exports/accounts.xml";
    this.vendorsFile = settings.vendorsFile || "./exports/vendors.xml";

    this.verbose = settings.verbose || false;

    if (!this.consumerKey ||
        !this.consumerSecret ||
        !this.oauthToken ||
        !this.oauthTokenSecret
    ) {
        throw new Error("At least one of the following is not provided: ".red +
            "consumerKey, consumerSecret, oauthToken and oauthTokenSecret".red);
    }

    this.qbo = new quickbooks(
        this.consumerKey,
        this.consumerSecret,
        this.oauthToken,
        this.oauthTokenSecret,
        this.realmId,
        this.debug
    );
}

QbExport.prototype.fetchAccounts = function() {
    var self = this;
    var deferred = Q.defer();

    if (self.verbose) {
        process.stdout.write("- Fetching accounts from QuickBooks API... ");
    }

    self.qbo.findAccounts({}, function(_, accounts) {
        if (self.verbose) {
            console.log("[DONE]".green);
        }
        deferred.resolve(accounts.QueryResponse);
    });

    return deferred.promise;
};

QbExport.prototype.writeAccounts = function(response) {
    var self = this;
    var deferred = Q.defer();
    var xml;

    if (self.verbose) {
        process.stdout.write(
            "- Writting accounts list to file [" + self.accountsFile + "]... ");
    }

    delete response.startPosition;
    delete response.maxResults;

    xml = js2xmlparser("Accounts", response);

    fs.writeFile(self.accountsFile, xml, function(error) {
        if (error) {
            deferred.reject(error);
        } else {
            if (self.verbose) {
                console.log("[DONE]".green);
            }
            deferred.resolve(xml);
        }

        xml = null;
    });

    return deferred.promise;
};

QbExport.prototype.fetchVendors = function() {
    var self = this;
    var deferred = Q.defer();

    if (self.verbose) {
        process.stdout.write("- Fetching vendors from QuickBooks API...");
    }

    self.qbo.findVendors({}, function(_, vendors) {
        if (self.verbose) {
            console.log("[DONE]".green);
        }
        deferred.resolve(vendors.QueryResponse);
    });

    return deferred.promise;
};

QbExport.prototype.writeVendors = function(response) {
    var self = this;
    var deferred = Q.defer();
    var xml;

    if (self.verbose) {
        process.stdout.write(
            "- Writting vendors list to file [" + self.vendorsFile + "]... ");
    }

    delete response.startPosition;
    delete response.maxResults;

    xml = js2xmlparser("Vendors", response);

    fs.writeFile(self.vendorsFile, xml, function(error) {
        if (error) {
            deferred.reject(error);
        } else {
            if (self.verbose) {
                console.log("[DONE]".green);
            }
            deferred.resolve(xml);
        }

        xml = null;
    });

    return deferred.promise;
};
