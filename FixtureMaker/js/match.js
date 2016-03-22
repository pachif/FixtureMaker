/// <reference path="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"/>
/// <reference path="team.js" />

var matchViewModel = function (order, teamA, teamB) {
    this.homeTeam = ko.observable(teamA);
    this.awayTeam = ko.observable(teamB);
    this.matchResult = ko.observable('');
    this.order = ko.observable(order);
    this.setMatchResult = function () {
        var res = this.matchResult();
        if (res != '') {
            this.matchResult(res);
        }
    }.bind(this);
    this.save = function () {
        // make call to API

    }.bind(this);
}