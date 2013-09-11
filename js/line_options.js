makeLineChartData = function(){
  var data = {
    datasets:[
      { 
        fillColor:"rgba(255, 0, 0, 1.0)",
        strokeColor: "rgba(255, 0, 0, 0.7)",
        PointColor: "rgba(100, 0, 0, 0.8)",
        pointStrokeColor: "rgba(50, 0, 0, 1)",
      },{ 
        fillColor:"rgba(255, 85, 0, 0.3)",
        strokeColor: "rgba(255, 85, 0, 0.7)",
        PointColor: "rgba(100, 30, 0, 0.8)",
        pointStrokeColor: "rgba(50, 15, 0, 1)",
      },{ 
        fillColor:"rgba(255, 170, 0, 0.3)",
        strokeColor: "rgba(255, 170, 0, 0.7)",
        PointColor: "rgba(100, 70, 0, 0.8)",
        pointStrokeColor: "rgba(50, 35, 0, 1)",
      },{ 
        fillColor:"rgba(255, 255, 0, 0.3)",
        strokeColor: "rgba(255, 255, 0, 0.7)",
        PointColor: "rgba(100, 100, 0, 0.8)",
        pointStrokeColor: "rgba(50, 50, 0, 1)",
      },{ 
        fillColor:"rgba(0, 255, 0, 0.3)",
        strokeColor: "rgba(0, 255, 0, 0.7)",
        PointColor: "rgba(0, 100, 0, 0.8)",
        pointStrokeColor: "rgba(0, 50, 0, 1)",
      },{ 
        fillColor:"rgba(0, 255, 127, 0.3)",
        strokeColor: "rgba(0, 255, 127, 0.7)",
        PointColor: "rgba(0, 100, 50, 0.8)",
        pointStrokeColor: "rgba(0, 50, 25, 1)",
      },{ 
        fillColor:"rgba(0, 255, 255, 0.3)",
        strokeColor: "rgba(0, 255, 255, 0.7)",
        PointColor: "rgba(0, 100, 100, 0.8)",
        pointStrokeColor: "rgba(0, 50, 50, 1)",
      },{ 
        fillColor:"rgba(0, 0, 255, 0.3)",
        strokeColor: "rgba(0, 0, 255, 0.7)",
        PointColor: "rgba(0, 0, 100, 0.8)",
        pointStrokeColor: "rgba(0, 0, 50, 1)",
      },{ 
        fillColor:"rgba(127, 0, 255, 0.3)",
        strokeColor: "rgba(127, 0, 255, 0.7)",
        PointColor: "rgba(50, 0, 100, 0.8)",
        pointStrokeColor: "rgba(25, 0, 50, 1)",
      },{ 
        fillColor:"rgba(255, 0, 255, 0.3)",
        strokeColor: "rgba(255, 0, 255, 0.7)",
        PointColor: "rgba(100, 0, 100, 0.8)",
        pointStrokeColor: "rgba(50, 0, 50, 1)",
      }
    ]
  };
  // X軸上のラベル
  data.labels = new Array();
  for(var i=0 ; i<30 ; i++){
    data.labels[i] = csvSales[i+1][0] + "年" ;
  }
  for(var j=0 ; j< data.datasets.length ; j++){
    data.datasets[j].data = new Array();
    for(var k=0 ; k<30 ; k++){
      data.datasets[j].data[k] = csvSales[k+1][j+1];
    }
  }
  return data;
};

makeLineChartOptions = function(){
  var options = {
    // Boolean型 - Y軸、X軸やグリッド線と被った時に、グラフを上に描画するか（ture=グラフが下、false=グラフが上）
    scaleOverlay : false,

    // Boolean型 - Y軸に合わせたグラフ変形の有効化
    scaleOverride : true,

    //========================================
    // scaleOverrideがtureの場合必須の設定 
    //----------------------------------------
    // 数値 - Y軸に表示する目盛数
    scaleSteps : 14,
    // 数値 - Y軸メモリの幅
    scaleStepWidth : 10000,
    // 数値 - Y軸メモリの開始数値
    scaleStartValue : 0,
    //========================================

    // 色（文字列）- X軸、Y軸の色
    scaleLineColor : "rgba(0,0,0,1)",

    // 数値(ピクセル) - X軸、Y軸の太さ
    scaleLineWidth : 2,

    // Boolean型 - X軸、Y軸のラベル表示有効無効 (Y軸のみ？)
    scaleShowLabels : true,

    // Y軸のラベル変更(タグ形式)
    scaleLabel : "<%=value%>0億円" ,

    // 文字列 - X軸、Y軸のラベルのフォント宣言
    scaleFontFamily : "'Arial'",

    // 数値 - X軸、Y軸のラベルの文字サイズ(大きさ)
    scaleFontSize : 16,

    // 文字列 - X軸、Y軸のラベルの文字サイズ(線の太さ)
    scaleFontStyle : "normal",

    // 文字列 - X軸、Y軸のラベルの文字色
    scaleFontColor : "rgba(50, 50, 50, 1)",	

    // Boolean型 - グリッド線の描画有効無効
    scaleShowGridLines : true,

    // 文字列 - グリッド線の色
    scaleGridLineColor : "rgba(50, 50, 50, 0.5)",

    // 数値 - グリッド線の幅(太さ)
    scaleGridLineWidth : 2,	

    // Boolean型 - グラフ線曲線化の有効無効
    bezierCurve : false,

    // Boolean型 - X軸上の点表示の有効無効
    pointDot : false,

    // 数値(ピクセル) - X軸上の点の半径
    pointDotRadius : 3,

    // 数値(ピクセル) - X軸上の点の円周線の太さ
    pointDotStrokeWidth : 1,

    // Boolean型 - X軸とグラフ間のストローク表示の有効無効(現在公式が機能作成中)
    datasetStroke : false,

    // 数値(ピクセル) - X軸とグラフ間の塗りつぶし感覚
    datasetStrokeWidth : 5,

    // Boolean型 - X軸とグラフ間を塗りつぶす設定の有効無効
    datasetFill : false,

    // Boolean型 - アニメーションの有効無効
    animation : true,

    // 数値(ミリ秒) - アニメーション時間
    animationSteps : 100,

    // 文字列 - アニメーション緩和効果種類
    animationEasing : "easeOutQuart",

    // 関数 - アニメーション終了時呼出し関数
    onAnimationComplete : null
  };
  return options;
};
