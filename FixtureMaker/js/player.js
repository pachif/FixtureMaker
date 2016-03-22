/// <reference path="http://ajax.aspnetcdn.com/ajax/knockout/knockout-3.3.0.js"/>

var playerViewModel = function(id,name) {
    this.id = ko.observable(id);
    this.playerName = ko.observable(name);
}

function getRandomPlayerArray() {
    var playerArray = new Array(new playerViewModel(1, "Eduardo"), new playerViewModel(2, "Ben"), new playerArray(3, "Javier"));
    return playerArray;
}