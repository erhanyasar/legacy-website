 $(document).ready(function () {
     $(".button-collapse").sideNav();

     /*Templating -- ready but not applied
          var data = {
              "days": [
                  { "date": "Sunday 7" },
                  { "date": "Monday 8" },
                  { "date": "Tuesday 9" },
                  { "date": "Wednesday 10" },
                  { "date": "Thursday 11" },
                  { "date": "Friday 12" },
                  { "date": "Saturday 13" },
                  { "date": "This Week" }
              ]
          };
          var tdData = document.getElementById("td-template").innerHTML;
          var tdTemplate = Handlebars.compile(tdData);
          var result = tdTemplate(data);
          document.getElementById('td').innerHTML += result;
     EndofTemplating*/

     //Chart
     $(function () {
         var data = [
             {
                 value: 300,
                 color: "#F7464A",
                 highlight: "#FF5A5E",
                 label: "Red"
             },
             {
                 value: 50,
                 color: "#46BFBD",
                 highlight: "#5AD3D1",
                 label: "Green"
             },
             {
                 value: 100,
                 color: "#FDB45C",
                 highlight: "#FFC870",
                 label: "Yellow",
             }
         ]
         var option = {
             responsive: true,
         };
         var ctx = document.getElementById("myChart").getContext('2d');
         var myDoughnutChart = new Chart(ctx).Doughnut(data, option);
     });
     //EndofChart
 });
