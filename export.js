#!/usr/bin/env node

var colors = require("colors");
var quickbooks = require("node-quickbooks");

var consumerKey = "qyprdrXuXEN8yeabLlxlNqaXTdTSjC";
var consumerSecret = "jv0OHMHtLjYF0c9Sr8tqUyzynBfEO8XWTAgPQUCH";
var oauthToken = "qyprdor3EJyXgillJvwVkI5tFIcXTDodWiCD650AjlwUS1Wy";
var oauthTokenSecret = "4iUq4Q6DGX3zkxeRvSAW8M7YeXDORc9xYWfZDqA1";
var realmId = "386011406";

var qbo = new quickbooks(
    consumerKey, consumerSecret, oauthToken, oauthTokenSecret, realmId, true);

qbo.findAccounts({
    // AccountType: "Expense",
    // desc: "MetaData.LastUpdatedTime",
    // limit: 5,
    // offset: 5
}, function(_, accounts) {
    accounts.QueryResponse.Account.forEach(function(account) {
        console.log(account.Name);
    });
});

qbo.findVendors({
    // desc: "MetaData.LastUpdatedTime",
    // limit: 5,
    // offset: 5
}, function(_, vendors) {
    vendors.QueryResponse.Vendor.forEach(function(vendor) {
        console.log(vendor.CompanyName);
    });
});
