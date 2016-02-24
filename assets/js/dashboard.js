$(document).ready(function(){
  var generateChart = {
    gender: function(data){
      var male = 0;
      var female = 0;

      for(var i= 0; i <data.length; i++){
        if(data[i].person.gender === "M"){
          male++;
        } else {
          female++;
        }
      }

      var chartData = [
        {
          value: male, /* How do we get this value? */,
          color: "rgb(0,127,255)",
          highlight: "rgba(0,127,255,0.5)",
          label: "Male"
        },
        {
          value: female, /* How do we get this value? */,
          color: "rgb(255,67,101)",
          highlight: "rgba(255,67,101,0.5)",
          label: "Female"
        }
      ];

      
    },
    orderTotal: function(data){

      var ranges = {
        '0-14': 0,
        '15-49': 0,
        '50-99': 0,
        '100-199': 0,
        '200-299': 0
      };

      var chartData = {
        labels: [] /* What should these labels be? */ ,
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.4)",
            strokeColor: "rgba(0,127,255,0.8)",
            highlightFill: "rgba(0,127,255,0.8)",
            highlightStroke: "rgba(0,127,255,0.4)",
            data: [] /* How do we organize this data ? */
          }
        ]
      };
      var fillColor = 0;
      var strokeColor = 0;
      var highlightFill = 0;
      var highlightStroke = 0;

      for(var i= 0; i <data.length; i++){
        if(data[i]. === "M"){
          male++;
        } else {
          female++;
        }
    },
    orderCategory: function(data){

      var categories = {
        belt: {
          value: 0,
          color: 'rgb(0,127,255)',
          highlight: 'rgba(0,127,255,0.5)',
          label: 'Belt'
        },
        shirt: {
          value: 0,
          color: 'rgb(177,143,207)',
          highlight: 'rgba(177,143,207,0.5)',
          label: 'Shirt'
        },
        pant: {
          value: 0,
          color: 'rgb(255,210,63)',
          highlight: 'rgba(255,210,63,0.5)',
          label: 'Pant'
        },
        footwear: {
          value: 0,
          color: 'rgb(255,67,101)',
          highlight: 'rgba(255,67,101,0.5)',
          label: 'Footwear'
        },
        jewelry: {
          value: 0,
          color: 'rgb(221,96,49)',
          highlight: 'rgba(221,96,49,0.5)',
          label: 'Jewelry'
        },
        jacket: {
          value: 0,
          color: 'rgb(44,246,179)',
          highlight: 'rgba(44,246,179,0.5)',
          label: 'Jacket'
        }
      };
      for(var i= 0; i <data.length; i++){
        //loop over to find females and males
        console.log(data);
    },
    orderTimeline: function(data){

      var chartData = {
        labels: [] /* What should these labels be? */ ,
        datasets: [
          {
            fillColor: "rgba(0,127,255,0.2)",
            strokeColor: "rgba(0,127,255,1)",
            pointColor: "rgba(0,127,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(0,127,255,1)",
            data: [] /* How do we organize this data? */
          }
        ]
      };
      for(var i= 0; i <data.length; i++){
        console.log(data);
    }
  };

  // Delete this comment: Perhaps this is where we should make our GET request?
$.get('https://www.batchacademy.com/api/wdfne/dummy/intellidash', function(data){
  generateChart.gender(data);
  generateChart.orderTotal(data);
  generateChart.orderCategory(data);
  generateChart.orderTimeline(data);
})
});
