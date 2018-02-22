function localStorageSupported() {
    try {
        return "localStorage" in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

function initialize() {
    if (!localStorageSupported()) {
        throw "Local storage not supported";
    }
}


exports.getData = function () {
    var storage = window['localStorage'];
    var data = JSON.parse(storage.getItem('royalty_data'));
    if (data === null) {
        data = {
            'Performers': {
                'Dira Klaggen': {
                    'Payments': {
                        'Q1': 'Paid',
                        'Q2': 'Paid',
                        'Q3': 'Unpaid'
                    },
                    'Plays': {
                        'A midnight summer': {
                            'Starttime': 'Q2',
                            'Cut': [
                                'onetime',
                                12.03
                            ]
                        }
                    },
                    'Joined': 'Q1'
                },
                'Holden Bolden': {
                    'Payments': {
                        'Q2': 'Transferred to Q3',
                        'Q3': 'Unpaid'
                    },
                    'Plays': {
                        'Every man for himself': {
                            'Starttime': 'Q2',
                            'Cut': [
                                'percentage',
                                0.13
                            ]
                        }
                    },
                    'Joined': 'Q2'
                },
                'Manny Joe': {
                    'Payments': {
                        'Q1': 'Paid',
                        'Q2': 'Unpaid',
                        'Q3': 'Unpaid',
                    },
                    'Plays': {
                        'A midnight summer': {
                            'Starttime': 'Q2',
                            'Cut': [
                                'percentage',
                                0.23
                            ]
                        },
                        'Every man for himself': {
                            'Starttime': 'Q2',
                            'Cut': [
                                'onetime',
                                13.0
                            ]
                        }
                    },
                    'Joined': 'Q1'
                }
            },
            'Periods': [
                'Q1',
                'Q2',
                'Q3'
            ],
            'Plays': {
                'A midnight summer': {
                    'revenue': {
                        'Q2': 13023.0,
                        'Q3': 10032.0
                    },
                    'start': 'Q2'
                },
                'Every man for himself': {
                    'revenue': {
                        'Q1': 5472,
                        'Q2': 2399,
                        'Q3': 9989
                    },
                    'start': 'Q1'
                }
            }
        };
    }
    return data;
}

function setData(data) {
    var storage = window['localStorage'];
    storage.setItem(JSON.stringify(data));
}
