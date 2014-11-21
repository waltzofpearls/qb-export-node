#!/usr/bin/env node

var colors = require("colors");
var quickbooks = require("node-quickbooks");

var consumerKey = "";
var consumerSecret = "";
var oauthToken = "";
var oauthTokenSecret = "";
var realmId = "";
var qbo = new QuickBooks(
    consumerKey, consumerSecret, oauthToken, oauthTokenSecret, realmId, true);
