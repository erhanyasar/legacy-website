$(document).ready(function () {
    
    var data = {
        "headers": [
            { "name": "RANK" },
            { "name": "NUMBER OF OPEN ISSUES" },
            { "name": "DAILY" },
            { "name": "WEEKLY" },
            { "name": "MONTHLY" }
        ],
        "ships": [
            { "id": "01", "name": "TCG (F-240) YAVUZ" },
            { "id": "02", "name": "TCG (F-241) TURGUTREİS" },
            { "id": "03", "name": "TCG (F-242) FATİH" },
            { "id": "04", "name": "TCG (F-243) YILDIRIM" },
            { "id": "05", "name": "TCG (F-244) BARBAROS" },
            { "id": "06", "name": "TCG (F-245) ORUÇREİS" },
            { "id": "07", "name": "TCG (F-246) SALİHREİS" },
            { "id": "08", "name": "TCG (F-247) KEMALREİS" },
            { "id": "09", "name": "TCG (F-490) GAZİANTEP" },
            { "id": "10", "name": "TCG (F-491) GİRESUN" },
            { "id": "11", "name": "TCG (F-492) GEMLİK" },
            { "id": "12", "name": "TCG (F-493) GELİBOLU" },
            { "id": "13", "name": "TCG (F-494) GÖKÇEADA" },
            { "id": "14", "name": "TCG (F-495) GEDİZ" },
            { "id": "15", "name": "TCG (F-496) GÖKOVA" },
            { "id": "16", "name": "TCG (F-497) GÖKSU" }
        ],
        "officers": [
            { "duty": "CAPTAIN", "iCount": "1" },
            { "duty": "C / O", "iCount": "2" },
            { "duty": "2 / O", "iCount": "0" },
            { "duty": "3 / O", "iCount": "1" },
            { "duty": "C / E", "iCount": "2" },
            { "duty": "1 / E", "iCount": "0" },
            { "duty": "2 / E", "iCount": "3" },
            { "duty": "3 / E", "iCount": "1" },
            { "duty": "4 / E", "iCount": "2" },
            { "duty": "5 / E", "iCount": "0" },
            { "duty": "E / O", "iCount": "3" }
        ],
        "officers2": [
            { "duty": "" },
            { "duty": "CAPTAIN" },
            { "duty": "C / O" },
            { "duty": "2 / O" },
            { "duty": "3 / O" },
            { "duty": "C / E" },
            { "duty": "1 / E" },
            { "duty": "2 / E" },
            { "duty": "3 / E" },
            { "duty": "4 / E" },
            { "duty": "5 / E" },
            { "duty": "E / O" }
        ]
    };

    Handlebars.registerHelper("multiply", function(index, count){
        return (index * (data.headers.length - 2)) + count;
    });

    Handlebars.registerHelper("multiply2", function(index, count){
        return (index * (data.officers2.length - 1)) + count;
    });
 
    var td1Data = document.getElementById("td1-template").innerHTML;
    var th1Data = document.getElementById("th1-template").innerHTML;
    var td2Data = document.getElementById("td2-template").innerHTML;
    var th2Data = document.getElementById("th2-template").innerHTML;
    
    var td1Template = Handlebars.compile(td1Data);
    var th1Template = Handlebars.compile(th1Data);
    var td2Template = Handlebars.compile(td2Data);
    var th2Template = Handlebars.compile(th2Data);
 
    var result1 = td1Template(data);
    var result2 = th1Template(data);
    var result3 = td2Template(data);
    var result4 = th2Template(data);
    var result5 = td2Template(data);
    var result6 = th2Template(data);
    var result7 = td2Template(data);
    var result8 = th2Template(data);

    document.getElementById('tdTable').innerHTML += result1;
    document.getElementById('thTable').innerHTML += result2;
    document.getElementById('tdDaily').innerHTML += result3;
    document.getElementById('thDaily').innerHTML += result4;
    document.getElementById('tdWeekly').innerHTML += result5;
    document.getElementById('thWeekly').innerHTML += result6;
    document.getElementById('tdMonthly').innerHTML += result7;
    document.getElementById('thMonthly').innerHTML += result8;

});