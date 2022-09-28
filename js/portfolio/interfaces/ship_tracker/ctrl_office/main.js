$(document).ready(function () {

    var barcode = 0;
    var period = 0;

    if (!barcode) {
        document.getElementById('id1').style.backgroundColor = 'yellow';
        if (!period) {
            document.getElementById('id2').style.backgroundColor = 'red';

        }
    } else {
        document.getElementById('id1').style.backgroundColor = 'greenyellow';
    }

    getRowAndCol = function (iLoopCount, iMod, _callBack) {
        var row = 0,
            col = 0;
        for (var k = 0; k < iLoopCount; k++) {
            var mod = k % iMod;
            if (mod === 0) {
                row++;
                col = 1;
            } else {
                col++;
            }
            _callBack(row, col);
        }
    };

    getRowAndCol(136, 8, function (row, col) {
        console.log("row:" + row + " - col : " + col);
    });

});
