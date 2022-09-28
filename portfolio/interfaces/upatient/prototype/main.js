 $(document).ready(function () {
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
 });
