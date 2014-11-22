
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
