const datamodel = require('../data/datamodel.js')
const performerProfileRenderer = require('../renderers/performer_profile.js')
const playProfileRenderer = require('../renderers/play_profile.js')

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
    var i, tabContent, tabLinks;

    tabContent = document.getElementsByClassName('tabcontent');
    for (i=0; i<tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLinks = document.getElementsByClassName('tablinks');
    for (i=0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

}

window.onload = function() {
    populatePerformerTable();
    populatePlayTable();
};

var perfTabButton = document.getElementById('performerTabButton');
perfTabButton.onclick = function (event) {openTab(event, 'performer-tab');};
var playTabButton = document.getElementById('playTabButton');
playTabButton.onclick = function (event) {openTab(event, 'play-tab');};
