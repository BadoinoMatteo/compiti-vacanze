function ellisse(){
     var gr = new jxGraphics(document.getElementById("divRectangle"));
    var col = new jxColor("blue");
    var pen = new jxPen(col,'1px');
    var rectangle = new jxRect(new jxPoint(200,100), 200, 100, pen);
    rectangle.draw(gr);           
}