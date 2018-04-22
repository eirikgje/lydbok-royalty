function showPerformerProfile(performer) {
    return;
}

function populatePerformerPaymentsTable (performer) {
    var data = datamodel.getData();
    for (payment in data['Perfomers'][performer]['Payments']) {
        createPerformerPaymentRow(payment, data[])
    }
}
