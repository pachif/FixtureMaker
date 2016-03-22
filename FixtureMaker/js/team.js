/// <reference path="player.js" />
/// <reference path="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"/>

var teamViewModel = function (id, name) {
    this.teamId = ko.observable(id);
    this.teamName = ko.observable(name);
    this.players = ko.observableArray(getRandomPlayerArray());
    this.playerToAdd = ko.observable("");
    this.addPlayer = function () {
        var playerName = this.playerToAdd();
        if (playerName != "") {
            this.players.push(new playerViewModel(0,playerName)); // Adds the item. Writing to the "players" observableArray causes any associated UI to update.
            this.playerToAdd(""); // Clears the text box, because it's bound to the "playerToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model
    this.save = function () {
        // make call to API

        // visualize as read-only


    }.bind(this);
}

