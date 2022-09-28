$(document).ready(function () {

    var data = {
        "ships": [
            { "id": "00", "name": "" },
            { "id": "01", "name": "M/V ZEYNEP KIRAN" },
            { "id": "02", "name": "M/V KIRAN ASYA" },
            { "id": "03", "name": "M/V TK ROTTERDAM" },
            { "id": "04", "name": "M/V KIRAN EUROPE" },
            { "id": "05", "name": "M/V KIRAN AMERICA" },
            { "id": "06", "name": "M/V KIRAN AFRICA" },
            { "id": "07", "name": "M/V KIRAN TURKIYE" },
            { "id": "08", "name": "M/V KIRAN EURASIA" },
            { "id": "09", "name": "M/V KIRAN ANATOLIA" },
            { "id": "10", "name": "M/V KIRAN AUSTRALIA" },
            { "id": "11", "name": "M/V KIRAN ISTANBUL" },
            { "id": "12", "name": "M/V KIRAN MARMARA" },
            { "id": "13", "name": "M/V KIRAN CHINA" },
            { "id": "14", "name": "M/V KIRAN BOSPHORUS" },
            { "id": "15", "name": "M/V KIRAN ADRIATIC" },
            { "id": "16", "name": "M/V KIRAN CARIBBEAN" },
            { "id": "17", "name": "M/V KIRAN CASPIAN" }
        ],
        "officers": [
            { "duty": "" },
            { "duty": "Master" },
            { "duty": "C / O" },
            { "duty": "2 / O" },
            { "duty": "3 / O" },
            { "duty": "C / E" },
            { "duty": "1 / E" },
            { "duty": "2 / E" },
            { "duty": "E / O" }
        ]
    };

    getRowAndCol = function (iRow, iMod, _callBack) {
        var row = 0,
            col = 0;
        for (var k = 0; k < (iRow * iMod); k++) {
            var mod = k % iMod;
            if (mod === 0) {
                row++;
                col = 1;
                var trTemplate = $('#tr-template').html();
                $('#dynamicBody').append(trTemplate);
                if (k = 0) {
                    var thTemplate = $('#th-template').html();
                    $('#dynamicHead').append(thTemplate);
                }
            } else {
                var tdTemplate = $('#td-template').html();
                $('#dynamicBody').append(tdTemplate);
                col++;
            }
            _callBack(row, col);
        }
    };

    getRowAndCol(data.ships.length, data.officers.length, function (row, col) {
        console.log("row:" + row + " - col : " + col);
    });

});