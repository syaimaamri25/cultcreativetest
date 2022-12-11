app.controller('myCtrl', function($scope) {
  var imgPath = "https://picsum.photos/600/400?random=";


  $scope.items = [
    {
      id: "01",
      title: "Jobs 1",
      date: "14.09.2019",
      salary: "RM500.00 - RM1200.00",
      companyInfo: "Ana abu",
      type: "Permanent",
      environment: "Full Time",
      image: imgPath + "1"
    },
    {
      id: "02",
      title: "Jobs 2",
      date: "16.09.2019",
      salary: "RM500.00 - RM1200.00",
      type: "Temporary",
      environment: "Remote",
      companyInfo: "Media",
      image: imgPath + "2"
    },
    {
      id: "03",
      title: "Jobs 3",
      date: "01.09.2019",
      salary: "RM500.00 - RM1200.00",
      companyInfo: "Nestle",
      type: "Permanent",
      environment: "Full Time",
      image: imgPath + "3"
    },
    {
      id: "04",
      title: "Jobs 4",
      date: "25.09.2019",
      salary: "RM500.00 - RM1200.00",
      companyInfo: "KL fashion",
      type: "Permanent",
      environment: "Full Time",
      image: imgPath + "4"
    },
    {
      id: "05",
      title: "Jobs 5",
      date: "18.09.2019",
      salary: "$280k",
      companyInfo: "Media",
      type: "Permanent",
      environment: "Full Time",
      image: imgPath + "5"
    }

  ];

  // 
  $scope.selectMonthFilter = function(monthFilter) {
    if (monthFilter == 'Low Price to High') {
      $scope.monthFilter = false;
    } else if (monthFilter == 'High Price To Low') {
      $scope.monthFilter = true;
    }
  };

});



app.filter("mydate", function() {
  var re = /(\d{2})\.(\d{2})\.(\d{4})/;
  return function(x) {
    var m = x.match(re);
    if (m) return new Date(m[0].replace(re, '$3-$2-$1'));
    else return null;
  };
});

