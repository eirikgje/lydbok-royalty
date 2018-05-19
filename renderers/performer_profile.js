const utils = require('../renderers/utils.js')

exports.showPerformerProfile = function (performer) {
    $('#performer-profile').load('html/performer-profile.html', function() {
        utils.toggleVisible($('div').not('.'+'performer-profile'), false);
        utils.toggleVisible($('.performer-profile').not('.hidden-onload'), true);
        $('#performer-name-input-edit').click(function() { 
            utils.makeEditable('performer-name-input'); 
            utils.toggleVisible($('#performer-name-input-save'), true);
        });
        $('#performer-name-input-save').click( function() {
            utils.makeNonEditable('performer-name-input');
            utils.toggleVisible($('#performer-name-input-save'), false);
        });

        $('#performer-joined-input-edit').click( function () {
            utils.toggleVisible($('#performer-joined-input'), false);
            utils.toggleVisible($('#performer-joined-input-select, #performer-joined-input-save'), true);
        });

        $('#performer-joined-input-save').click( function() {
            utils.toggleVisible($('#performer-joined-input-select'), false);
            utils.toggleVisible($('#performer-joined-input, #performer-joined-input-save'), true);
        });

        $('#performer-plays-edit').click( function () {
            utils.toggleVisible($('#performer-plays-edit'), false)
            utils.toggleVisible($('.performer-plays-delete, #performer-plays-finished, #performer-plays-add'), true);
        });

        $('#performer-plays-finished').click( function () {
            utils.toggleVisible($('#performer-plays-edit'), true);
            utils.toggleVisible($('.performer-plays-delete, #performer-plays-finished, #performer-plays-add'), false);
        });

        $('#performer-payments-edit').click( function () {
            utils.toggleVisible($('#performer-payments-edit, .payment-status'), false);
            utils.toggleVisible($('.payment-status-menu, .payment-period-menu, #performer-payments-finished-editing'), true);
        });
        
        $('#performer-payments-finished-editing').click ( function () {
            utils.toggleVisible($('#performer-payments-edit, .payment-status'), true);
            utils.toggleVisible($('.payment-status-menu, .payment-period-menu, #performer-payments-finished-editing'), false);
        });
    });
}

//function populatePerformerPaymentsTable (performer) {
//    var data = datamodel.getData();
//    for (payment in data['Perfomers'][performer]['Payments']) {
//        createPerformerPaymentRow(payment, data);
//    }
//}

