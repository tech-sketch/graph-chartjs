var csv;
var csvSales;
var colors;
var datas;
var options;
var canvas;
var intervalId;
var chartType;
var yearIndex;

$(function(){
  chartType = "line";
  canvas = $("#chart_area").get(0).getContext("2d")
  getCSVFile();
  yearIndex = 1;

 $("#line").click(function(){
    chartType = "line";
    datas   = makeLineChartData();
    options = makeLineChartOptions();
    var lineChart   = new Chart(canvas).Line(datas, options);
    toggleDisplay(true, false, false, false, false);
    $("#legend_area").css("left", "830px");
  });

  $("#bar").click(function(){
    chartType = "bar";
    datas   = makeBarChartData();
    options = makeBarChartOptions();
    new Chart(canvas).Bar(datas, options);
    changeText_h3(csvSales[yearIndex][0]);
    toggleDisplay(false, true, true, true, true);
  });

  $("#pie").click(function(){
    chartType = "pie";
    datas   = makePieChartData();
    options = makePieChartOptions();
    new Chart(canvas).Pie(datas, options);
    changeText_h3(csvSales[yearIndex][0]);
    toggleDisplay(true, true, true, true, true);
    $("#legend_area").css("left", "750px"); 
  });
  
  // スライダー変更時処理関数
  $("#range").change(function(){
    if(chartType != "line")
      changeGraph();
  });
  
  $("#start").click(function(){
    if(chartType != "line")
      startGraphMove();
  });

  $("#stop").click(function(){
    stopGraphMove();
  });
});

getCSVFile = function(){
  $.ajax({
    url:"./data/sales.csv",
    success: loadSuccess,
    error: loadError
  });
};

loadSuccess = function(obj){
  csvSales = $.csv.toArrays(obj, {onParseValue: $.csv.hooks.castToScalar});
  chartType = "line";
  datas   = makeLineChartData();
  options = makeLineChartOptions();
  var lineChart   = new Chart(canvas).Line(datas, options);
  toggleDisplay(true, false, false, false, false);
};

loadError = function(obj){
  console.log(obj);
  alert("fail : " + obj.status);  
};


changeText_h3 = function(str){
  $("h3").text(str.toString() + "年");
};

// グラフ変化処理関数
changeGraph = function(){
  var index = parseInt($("#range").val());
  // データ変更
  if(chartType == "bar"){
    datas.datasets[0].data = csvSales[index+1].slice(1);
    // グラフ変更
    var lineChart = new Chart(canvas).Bar(datas, options);
  }
  else if(chartType == "pie"){
    for(var i=0 ; i<10 ; i++){
      datas[i].value = parseInt(csvSales[index+1][i+1]);
    }
    // グラフ変更
    var lineChart = new Chart(canvas).Pie(datas, options);
  }
  changeText_h3(csvSales[index+1][0]);
};

// グラフ再生開始関数
startGraphMove = function(){
  if($("#range").val() === "29"){
    $("#range").val(0);
    changeGraph();
    changeText_h3(csvSales[1][0]);
  }
  intervalId = setInterval(updateGraphMove, 300);
};

// グラフ更新関数
updateGraphMove = function(){
  yearIndex = parseInt($("#range").val()) + 1;
  // 終了判定
  if(yearIndex === 29){
    stopGraphMove();
  }
  changeGraph();
  changeText_h3(csvSales[yearIndex][0]);
  $("#range").val(yearIndex);
};

// グラフ再生停止関数
stopGraphMove = function(){
  clearInterval(intervalId);
};

// 表示・非表示切替関数
toggleDisplay = function(legend, h3, range, start, stop){
  if(legend){ $("#legend_area").show(); } else{ $("#legend_area").hide(); }
  if(h3){ $("h3").show(); } else{ $("h3").hide(); }
  if(range){ $("#range").show(); } else{ $("#range").hide(); }
  if(start){ $("#start").show(); } else{ $("#start").hide(); }
  if(stop){ $("#stop").show(); } else{ $("#stop").hide(); }
};
