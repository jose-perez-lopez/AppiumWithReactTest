var myStepDefinitionsWrapper = function () {

    this.When(/^I open the app$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;