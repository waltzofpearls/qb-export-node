#!/usr/bin/env node

var file = require("fs");
var colors = require("colors");
var quickbooks = require("node-quickbooks");
var js2xml = require("js2xmlparser");

var consumerKey = "qyprdrXuXEN8yeabLlxlNqaXTdTSjC";
var consumerSecret = "jv0OHMHtLjYF0c9Sr8tqUyzynBfEO8XWTAgPQUCH";
var oauthToken = "qyprdor3EJyXgillJvwVkI5tFIcXTDodWiCD650AjlwUS1Wy";
var oauthTokenSecret = "4iUq4Q6DGX3zkxeRvSAW8M7YeXDORc9xYWfZDqA1";
var realmId = "386011406";
var debug = false;

var accountsFile = "./exports/accounts.xml";
var vendorsFile = "./exports/vendors.xml";

var xml;

var qbo = new quickbooks(
        consumerKey, consumerSecret, oauthToken, oauthTokenSecret, realmId, debug);

console.log("- Fetching accounts from QuickBooks API...");
qbo.findAccounts({}, function(_, accounts) {
    delete accounts.QueryResponse.startPosition;
    delete accounts.QueryResponse.maxResults;

    xml = js2xml("Accounts", accounts.QueryResponse);

    file.writeFile(accountsFile, xml, function(error) {
        console.log("- " + accountsFile + " " + "[DONE]".green);
        xml = null;
    });
});

console.log("- Fetching vendors from QuickBooks API...");
qbo.findVendors({}, function(_, vendors) {
    delete vendors.QueryResponse.startPosition;
    delete vendors.QueryResponse.maxResults;

    xml = js2xml("Vendors", vendors.QueryResponse);

    file.writeFile(vendorsFile, xml, function(error) {
        console.log("- " + vendorsFile + " " + "[DONE]".green);
        xml = null;
    });
});
