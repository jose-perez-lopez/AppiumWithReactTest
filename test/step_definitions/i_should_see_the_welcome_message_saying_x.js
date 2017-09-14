var myStepDefinitionsWrapper = function () {

    this.Then(/^I should see the welcome message saying 'Hi\.'$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;