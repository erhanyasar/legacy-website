var http = require('http');

http.get('http://www.erhanyasar.com.tr/files/CV_ErhanYasar.pdf', function (res) {
    var str = '';
    console.log('Response is ' + res.statusCode);

    res.on('data', function (chunk) {
        var pdfreader = require('pdfreader');
        var rows = {};

        function printRow(y) {
            console.log((rows[y] || []).join(''));
        }

        function printRows() {
            Object.keys(rows)
                .sort((y1, y2) => parseFloat(y1) - parseFloat(y2))
                .forEach(printRow);
        }

        new pdfreader.PdfReader().parseFileItems('CV_ErhanYasar.pdf', function (err, item) {
            if (err)
                console.error(err);
            else if (!item || item.page) {
                printRows();
                console.log('\n  -- PAGE', item.page, '-- \n');
                rows = {};
            } else if (item.text) {
                (rows[item.y] = rows[item.y] || []).push(item.text);
            }
        });

    });

    res.on('end', function () {
        console.log('Response is ' + str);
    });

});
