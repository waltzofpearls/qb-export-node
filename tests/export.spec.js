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
var exec = require("child_process").exec;
var settings = require("../settings");

describe("A suite for testing export CLI script", function() {
    it("should fetch accounts and vendors lists and write them to xml files", function(done) {
        exec("node export", function(error, stdout, stderr) {
            expect(error).toBe(null);
            expect(fs.existsSync(settings.accountsFile)).toEqual(true);
            expect(fs.existsSync(settings.vendorsFile)).toEqual(true);
            fs.unlinkSync(settings.accountsFile);
            fs.unlinkSync(settings.vendorsFile);
            done();
        });
    });
});
