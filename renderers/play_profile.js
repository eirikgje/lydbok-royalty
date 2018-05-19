const utils = require('../renderers/utils.js')

exports.showPlayProfile = function (play) {
    $('#play-profile').load('html/play-profile.html', function () {
        utils.toggleVisible($('div').not('.'+'play-profile'), false);
        utils.toggleVisible($('.play-profile').not('.hidden-onload'), true);
        $('#play-name-input-edit').click( function() {
            utils.makeEditable('play-name-input');
            utils.toggleVisible($('#play-name-input-save'), true);
            utils.toggleVisible($('#play-name-input-edit'), false);
        });

        $('#play-name-input-save').click( function() {
            utils.makeNonEditable('play-name-input');
            utils.toggleVisible($('#play-name-input-save'), false);
            utils.toggleVisible($('#play-name-input-edit'), true);
        });

        $('#play-started-input-edit').click( function() {
            utils.toggleVisible($('#play-started-input-save'), true);
            utils.toggleVisible($('#play-started-input-edit'), false);
            utils.toggleVisible($('#play-started-input-select'), true);
        });

        $('#play-started-input-save').click( function () {
            utils.toggleVisible($('#play-started-input-save'), false);
            utils.toggleVisible($('#play-started-input-edit'), true);
            utils.toggleVisible($('#play-started-input-select'), false);
        });
        
    });
}
