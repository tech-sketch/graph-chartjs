$(function() {

  //  ここにどんどん追加する
  var CUSTOMIZES = {
    scaleLineWidth: function(options) {
      options.scaleLineWidth = 8;
    },
    scaleLineColor: function(options) {
      options.scaleLineColor = "rgba(255, 0, 0, 1)";
    },
    scaleOverride: function(options) {
      options.scaleOverride = true;
    },
    scaleOverlay: function(options) {
      options.scaleOverlay = true;
    },
    scaleShowGridLines: function(options){
      options.scaleShowGridLines = false;
    },
    scaleGridLineColor: function(options){
      options.scaleGridLineColor = "rgba(255, 0, 0, 1)";
    },
    scaleGridLineWidth: function(options){
      options.scaleGridLineWidth = 10;
    },
    scaleShowLabels: function(options){
      options.scaleShowLabels = false;
    },
    scaleLabel: function(options){
      options.scaleLabel = "<%=value%>円";
    },
    scaleFontFamily: function(options){
      options.scaleFontFamily = "Comic Sans MS";
    },
    scaleFontStyle: function(options){
      options.scaleFontStyle = "bold";
    },
    scaleFontSize: function(options){
      options.scaleFontSize = 32;
    },
    scaleFontColor: function(options){
      options.scaleFontColor = "#F00";
    },
    pointDot: function(options){
      options.pointDot = true;
    },
    pointDotRadius: function(options){
      options.pointDotRadius = 10;
    },
    pointDotStrokeWidth: function(options){
      options.pointDotStrokeWidth = 10;
    },
    datasetStrokeWidth: function(options){
      options.datasetStrokeWidth = 10;
    },
    datasetFill: function(options){
      options.datasetFill = true;
    },
    bezierCurve: function(options){
      options.bezierCurve = true;
    },
    animation: function(options){
      options.animation = true;
    },
    animationSteps: function(options){
      options.animationSteps = 200;
    },
    animationEasing: function(options){
      options.animationEasing = "easeInQuart";
    },
    onAnimationComplete: function(options){
      options.onAnimationComplete = function(){alert("アニメーション終了！");};
    }
  };


  //  ここから下は弄らなくて良いはず
  $("input[type='checkbox'].demo").bind("change", function() { 
    var section = $(this).parents("section");

    var context  = $(this).parents("section").find("canvas").get(0).getContext("2d");

    var types = _.map(section.find(":checked"), function(checkbox) { return $(checkbox).attr("name") });
    var customizes = _.map(types, function(type) { return CUSTOMIZES[type]; });

    drawChart(context, customizes);
  });

  $("canvas").each(function() {
    var context  = this.getContext("2d");
    drawChart(context);
  });

  function drawChart(context, customizes)
  {
    customizes = customizes || [];

    var data    = makeLineChartData();
    var options = makeLineChartOptions();

    _.each(customizes, function(customize) {
      customize(options);
    });

    new Chart(context).Line(data, options);
  }
});
