makePieChartData = function(){
  var data = [
    { value: parseInt(csvSales[1][1]),   color: "rgba(255, 128, 128, 1)"},
    { value: parseInt(csvSales[1][2]),   color: "rgba(255, 170, 128, 1)"},
    { value: parseInt(csvSales[1][3]),   color: "rgba(255, 212, 128, 1)"},
    { value: parseInt(csvSales[1][4]),   color: "rgba(255, 255, 128, 1)"},
    { value: parseInt(csvSales[1][5]),   color: "rgba(128, 255, 128, 1)"},
    { value: parseInt(csvSales[1][6]),   color: "rgba(128, 255, 191, 1)"},
    { value: parseInt(csvSales[1][7]),   color: "rgba(128, 255, 255, 1)"},
    { value: parseInt(csvSales[1][8]),   color: "rgba(128, 128, 255, 1)"},
    { value: parseInt(csvSales[1][9]),   color: "rgba(191, 128, 255, 1)"},
    { value: parseInt(csvSales[1][10]),  color: "rgba(255, 128, 255, 1)"}
  ];
  return data;
};

makePieChartOptions = function(){
  var options = {
    // Boolean型 - 境目毎のストローク有効無効
    segmentShowStroke : true,

    // 文字列 - 境目の色
    segmentStrokeColor : "#fff",

    // 数値(ピクセル) - 境目の幅
    segmentStrokeWidth : 3,

    // Boolean型 - アニメーション有効無効(これをfalseにするとanimateRotate、animateScaleはtrueにしても無意味)
    animation : false,

    // 数値(ミリ秒) - アニメーション時間
    animationSteps : 100,

    // 文字列 - アニメーション緩和効果種類
    animationEasing : "easeOutBounce",

    // Boolean型 - 回転アニメーションの有効無効
    animateRotate : false,

    // Boolean型 - スケールアニメーションの有効無効
    animateScale : false,

    // 関数 - アニメーション終了時呼出し関数
    onAnimationComplete : null
  };
  return options;
}
