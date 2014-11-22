/*
 * qb-export-node
 *
 * QuickBooks Online lists export tool powered by node.js
 * https://github.com/waltzofpearls/qb-export-node
 *
 * Copyright (c) 2014 Topbass Labs (topbasslabs.com)
 * Author Waltz.of.Pearls <rollie@topbasslabs.com, rollie.ma@gmail.com>
 */

exports = module.exports = {
    // OAuth Consumer Key
    // Generated with a developer App Token from https://appcenter.intuit.com/Playground/OAuth
    // - default: empty string
    consumerKey: "qyprdrXuXEN8yeabLlxlNqaXTdTSjC",
    // OAuth Consumer Secret
    // Generated with a developer App Token from https://appcenter.intuit.com/Playground/OAuth
    // - default: empty string
    consumerSecret: "jv0OHMHtLjYF0c9Sr8tqUyzynBfEO8XWTAgPQUCH",
    // OAuth Access Token
    // Generated with a developer App Token from https://appcenter.intuit.com/Playground/OAuth
    // - default: empty string
    oauthToken: "qyprdor3EJyXgillJvwVkI5tFIcXTDodWiCD650AjlwUS1Wy",
    // OAuth Access Token Secret
    // Generated with a developer App Token from https://appcenter.intuit.com/Playground/OAuth
    // - default: empty string
    oauthTokenSecret: "4iUq4Q6DGX3zkxeRvSAW8M7YeXDORc9xYWfZDqA1",
    // Company ID
    // The ID of the company which accounts and vendors lists will be extracted from
    // This ID can be found from company's profile page in QuickBooks Online
    // - default: empty string
    realmId: "386011406",
    // Path to save a xml formatted accounts list
    // - default: [./exports/accounts.xml]
    accountsFile: "./exports/accounts.xml",
    // Path to save a xml formatted vendors list
    // - default: [./exports/vendors.xml]
    vendorsFile: "./exports/vendors.xml",
    // Debug mode
    // - default: off
    debug: false,
    // Verbose mode
    // - defualt: off
    verbose: true
};
