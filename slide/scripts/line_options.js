makeLineChartData = function(num){

  var data = {
    datasets:[
      {
        // X軸とグラフ間の色
        fillColor:"rgba(255, 0, 0, 1)",
        // 線の色
        strokeColor: "rgba(0, 128, 255, 1)",
        // グラフ上の点の色
        pointColor: "rgba(255, 0, 0, 1)",
        // ポイント縁色
        pointStrokeColor: "rgba(0, 255, 0, 1)",
        // 表示する値
        data:["0", "40", "20", "30", "10"]
      }
    ],
    labels:["A", "B", "C", "D", "E"]
  };
  return data;
};

makeLineChartOptions = function(){
  var options = {

    // 色（文字列）- X軸、Y軸の色
    scaleLineColor : "rgba(0,0,0,1)",

    // 数値(ピクセル) - X軸、Y軸の太さ
    scaleLineWidth : 3,

    // Boolean型 - Y軸の範囲のマニュアル設定有効無効
    scaleOverride : false,
    //========================================
    // scaleOverrideがtureの場合必須の設定 
    //----------------------------------------
    // 数値 - Y軸に表示する目盛数
    scaleSteps : 5,
    // 数値 - Y軸メモリの幅
    scaleStepWidth : 10,
    // 数値 - Y軸メモリの開始数値
    scaleStartValue : 0,
    //========================================




    // Boolean型 - Y軸、X軸やグリッド線と被・ｽ時に、グラフを上に描画するか（ture=グラフが下、false=グラフが上）
    scaleOverlay : false,

    // Boolean型 - グリッド線の描画有効無効
    scaleShowGridLines : true,

    // 文字列 - グリッド線の色
    scaleGridLineColor : "rgba(128, 128, 128, 1)",

    // 数値 - グリッド線の幅(太さ)
    scaleGridLineWidth : 3,



    //Boolean型 - X軸、Y軸のラベル表示有効無効 (Y軸のみ？)
    scaleShowLabels : true,

    // Y軸のラベル変更(タグ形式)
    scaleLabel : "<%=value%>",

    // 文字列 - X軸、Y軸のラベルのフォント宣言
    scaleFontFamily : "'Arial'",

    // 数値 - X軸、Y軸のラベルの文字サイズ(大きさ)
    scaleFontSize : 16,

    // 文字列 - X軸、Y軸のラベルの文字サイズ(線の太さ)
    scaleFontStyle : "normal",

    // 文字列 - X軸、Y軸のラベルの文字色
    scaleFontColor : "#888",	






    // Boolean型 - グラフ線曲線化の有効無効
    bezierCurve : false,



    // Boolean型 - X軸上の点表示の有効無効
    pointDot : false,

    // 数値(ピクセル) - X軸上の点の半径
    pointDotRadius : 5,

    // 数値(ピクセル) - X軸上の点の円周線の太さ
    pointDotStrokeWidth : 5,



    // Boolean型 - X軸とグラフ間のストローク表示の有効無効(現在公式が機能作成中)
    datasetStroke : true,

    // 数値(ピクセル) - X軸とグラフ間の太さ
    datasetStrokeWidth : 5,

    // Boolean型 - X軸とグラフ間を塗りつぶす設定の有効無効
    datasetFill : false,


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
