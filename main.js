var canvas = document.getElementById("myCanvas")
var ctx =  canvas.getContext("2d");

var larguraCarro = 150;
var alturaCarro = 100;

var fundoCanvas = "fundo.jpg";
var imagemCarro = "carro.jpg";

var carroX = 10;
var CarroY = 10;

function add() {
fundoCanvasTag = new Image();
fundoCanvasTag.onload= uploadFundo;
fundoCanvasTag.src=fundoCanvas;

CarroTag = new Image();
CarroTag.onload= uploadCarro;
CarroTag.src=imagemCarro;
}
function uploadFundo(){
ctx.drawImage(fundoCanvasTag,0,0, canvas.width, canvas.height);




}

function uploadCarro(){
ctx.drawImage(CarroTag,carroX,CarroY,larguraCarro,alturaCarro);


}