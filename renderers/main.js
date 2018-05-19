const datamodel = require('../data/datamodel.js')
const utils = require('../renderers/utils.js')
const performerProfileRenderer = require('../renderers/performer_profile.js')
const playProfileRenderer = require('../renderers/play_profile.js')

window.$ = window.jQuery = require('../node_modules/jquery/dist/jquery.min.js');

function populatePerformerTable() {
    var data = datamodel.getData();
    for (performer in data['Performers']) {
        createPerformerTableRow(performer, data['Performers'][performer]);
    }
}


function createPerformerTableRow(performer, performer_data) {
    var table = document.getElementById('performer-table');
    var currow = table.insertRow(0);
    var nameCell = currow.insertCell(0);
    nameCell.innerHTML = performer;
    var butCell = currow.insertCell(1);
    var cellBut = document.createElement('input');
    cellBut.type = 'button';
    cellBut.value = 'Edit profile'
    cellBut.onclick = (function(event) {
        performerProfileRenderer.showPerformerProfile(performer);
    })
    butCell.appendChild(cellBut);
}

function populatePlayTable() {
    var data = datamodel.getData();
    for (play in data['Plays']) {
        createPlayTableRow(play, data['Plays'][play]);
    }
}


function createPlayTableRow(play, play_data) {
    var table = document.getElementById('play-table');
    var currow = table.insertRow(0);
    var nameCell = currow.insertCell(0);
    nameCell.innerHTML = play;
    var butCell = currow.insertCell(1);
    var cellBut = document.createElement('input');
    cellBut.type = 'button';
    cellBut.value = 'Edit play';
    cellBut.onclick = (function(event) {
        playProfileRenderer.showPlayProfile(play);
    })
    butCell.appendChild(cellBut);
}

function openTab (evt, tabName) {

    utils.toggleVisible($('.tabcontent'), false);
    $('.tablinks').removeClass('active');
    // Tabname is both a class and an id - here we use the class since we want
    // to toggle all of it
    utils.toggleVisible($('.' + tabName), true);
    $(evt.currentTarget).addClass('active');


}

window.onload = function() {
    populatePerformerTable();
    populatePlayTable();
};

var perfTabButton = document.getElementById('performerTabButton');
perfTabButton.onclick = function (event) {openTab(event, 'performer-tab');};
var playTabButton = document.getElementById('playTabButton');
playTabButton.onclick = function (event) {openTab(event, 'play-tab');};
