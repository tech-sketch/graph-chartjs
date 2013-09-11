makeBarChartData = function(){
  var data = {
    datasets:[
      {
        // X軸とグラフ間の色
        fillColor:"rgba(0, 255, 150, 0.5)",
        // 線の色
        strokeColor: "rgba(0, 255, 150, 1)",
        // 表示する値
        data:csvSales[1].slice(1)
      }
    ],
    labels:csvSales[0].slice(1)
  };
   return data;
}

makeBarChartOptions = function(){
  var options = {
    // Boolean型 - Y軸、X軸やグリッド線と被・ｽ時に、グラフを上に描画するか（ture=グラフが下、false=グラフが上）
    scaleOverlay : false,
    // Boolean型 - Y軸に合わせたグラフ変形の有効化
    scaleOverride : true,
    // 数値 - Y軸に表示する目盛数
    scaleSteps : 14,
    // 数値 - Y軸メモリの幅
    scaleStepWidth : 10000,
    // 数値 - Y軸メモリの開始数値
    scaleStartValue : 0,
    // 色（文字列）- X軸、Y軸の色
    scaleLineColor : "rgba(50, 50, 50, 0.5)",
    // 数値(ピクセル) - X軸、Y軸の太さ
    scaleLineWidth : 2,
    // Boolean型 - X軸、Y軸のラベル表示有効無効 (Y軸のみ？)
    scaleShowLabels : true,
    // Y軸のラベル変更(タグ形式)
    scaleLabel : "<%=value%>0億円",
    // 文字列 - X軸、Y軸のラベルのフォント宣言
    scaleFontFamily : "'Arial'",
    // 数値 - X軸、Y軸のラベルの文字サイズ(大きさ)
    scaleFontSize : 12,
    // 文字列 - X軸、Y軸のラベルの文字サイズ(線の太さ)
    scaleFontStyle : "normal",
    // 文字列 - X軸、Y軸のラベルの文字色
    scaleFontColor : "rgba(50, 50, 50, 1)",
    // Boolean型 - グリッド線の描画有効無効(水平グリッドのみ)
    scaleShowGridLines : true,
    // 文字列 - グリッド線の色
    scaleGridLineColor : "rgba(50, 50, 50, 0.2)",
    // 数値(ピクセル) - グリッド線の幅(太さ)
    scaleGridLineWidth : 2,
    // Boolean型 - ストロークの有効無効
    barShowStroke : true,
    // 数値(ピクセル) - ストロークの幅
    barStrokeWidth : 5,
    // 数値(ピクセル) - バーの横幅
    barValueSpacing : 5,
    // 数値(ピクセル) - バー表示位置(X軸)
    barDatasetSpacing : 0,
    // Boolean型 - アニメーションの有効無効
    animation : false,
    // 数値(ミリ秒) - アニメーション時間
    animationSteps : 50,
    // 文字列 - アニメーション緩和効果種類
    animationEasing : "easeOutQuart",
    // 関数 - アニメーション終了時呼出し関数
    onAnimationComplete : null
  };
  return options;
};
