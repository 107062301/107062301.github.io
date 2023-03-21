var canvas; 
var ctx;
var draw;
var dr;
var er;
var ispress;
var cir;
var tri;
var rec;
var text;
var str_x,str_x2;
var str_y,str_y2;
var re_stack=[];
var un_stack=[];
var present=[];
var draw_stack=[];
var texting;
var moved;
var flag;
var ismove;
function redo(){
    ctx.globalCompositeOperation="source-over";
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    canvas = document.getElementById("main");
    ctx = canvas.getContext('2d');
    var img = new Image();
    var temp,temp2;
    img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img,0,0);
    }
    if(re_stack.length>=1){
        temp = re_stack.pop();
        temp2 = present.pop();
        img.src = temp;
        present.push(temp);
        un_stack.push(temp2);
    }
    else{
    }

    
}
function undo(){
    ctx.globalCompositeOperation="source-over";
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    canvas = document.getElementById("main");
    ctx = canvas.getContext('2d');
    var img = new Image();
    var temp,temp2;
    img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img,0,0);
    }
    if(un_stack.length>=1){
        temp = un_stack.pop();
        console.log(temp);
        if(present.length>=1){
            temp2 = present.pop();
            re_stack.push(temp2);
        }
        img.src = temp;
        present.push(temp);
        
    }
    else{
        temp = present.pop();
        present.push(temp);
        img.src = temp;
    }
    
}
function line(){
    var d = document.getElementById("bar");
    ctx = canvas.getContext('2d');
    ctx.lineWidth = d.value;
    console.log(d.value); //bar拉太快筆畫會來不及變*/
}
function color_s(){
    ctx.globalCompositeOperation="source-over";
    var col;
    ctx = canvas.getContext('2d');
    col = document.getElementById("color");
    ctx.strokeStyle = col.value; //bar拉太快筆畫會來不及變
}
function red(){
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    document.getElementById("tran").style.cursor = "url(source/pngwave.png),text";
    document.getElementById("toolbar").style.cursor = "url(source/pngwave.png),text";
    er =  cir = tri = rec = text = false;
    dr = true;
}
function enter(event){
    if(event.keyCode == 13){
        var size = document.getElementById("sle");
        var type = document.getElementById("sle2");
        var color = document.getElementById("color");
        console.log(size.value);
        var tex = document.getElementById("tex");
        var con = tex.value;
        var temp = ctx.lineWidth;
        ctx.font= size.value + "px" + " " + type.value;
        ctx.lineWidth = "1";
        tex.remove();
        ctx.fillStyle = color.value;
        ctx.fillText(con,str_x,str_y);
        ctx.strokeText(con,str_x,str_y);
        ctx.lineWidth = temp;
        texting = false;
        text = true;
        canvas = document.getElementById("main");
        var tep = present.pop();
        un_stack.push(tep);
        present.push(canvas.toDataURL());
        moved = false;
        console.log("success");
    }
    text = true;
    console.log(event.keyCode);
}
function tt(){
    document.getElementById("tran").style.cursor = "text";
    document.getElementById("toolbar").style.cursor = "text";
    er =  cir = tri = rec = dr = false;
    text = true;
}
function green(){
    ctx.globalCompositeOperation="source-over";
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    var temp = present.pop();
    un_stack.push(temp);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    present.push(canvas.toDataURL());
}

function download(){
    ctx.globalCompositeOperation="source-over";
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    var download = document.getElementById("do");
    var image = document.getElementById("main").toDataURL("source/image/png").replace("source/image/png", "image/octet-stream");
    download.setAttribute("href", image);
}
$('#out').change(function(){
    ctx.globalCompositeOperation="source-over";
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    canvas = document.getElementById("main");
    ctx = canvas.getContext('2d');
    /*var reader = new FileReader();
    var u = event.target.result;*/
    var temp = present.pop();
    un_stack.push(temp);
    var image = new Image();
        image.onload = function(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this,0,0);
            URL.revokeObjectURL(src);
            present.push(canvas.toDataURL());
            //console.log(canvas.toDataURL());
        }
        var file = this.files[0];
        var src = URL.createObjectURL(file);
        
        image.src = src;
        //document.getElementById("out") = null;
       // console.log(canvas.toDataURL());
    
});
function blue(){
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    dr =  cir = tri = rec = text = false;
    er = true;
    document.getElementById("tran").style.cursor = "url(source/er_cursor.png),text";
    document.getElementById("toolbar").style.cursor = "url(source/er_cursor.png),text";
}
function circle(){
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    er = dr = tri = rec = text = false;
    cir = true;
    document.getElementById("tran").style.cursor = "url(source/cir.png),text";
    document.getElementById("toolbar").style.cursor = "url(source/cir.png),text";
}
function triangle(){
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    er = dr = cir = rec = text = false;
    tri = true;
    document.getElementById("tran").style.cursor = "url(source/tri.png),text";
    document.getElementById("toolbar").style.cursor = "url(source/tri.png),text";
}
function rectangle(){
    if(text){
        var tex = document.getElementById("tex");
        if(tex == null){

        }
        else{
            tex.remove();
        }
        text = false;
    }
    er = dr = cir = tri = text= false;
    rec = true;
    document.getElementById("tran").style.cursor = "url(source/rec.png),text";
    document.getElementById("toolbar").style.cursor = "url(source/rec.png),text";
}
function init(){
    canvas = document.getElementById('main');
    ctx = canvas.getContext('2d');
    canvas = document.getElementById("main");
    present.push(canvas.toDataURL());
    draw_stack.push(canvas.toDataURL());
    texting = false;
    flag = 0;
    ctx.lineCap = "round";
}
function md() {
    if(dr){
        ctx.moveTo(event.offsetX+5, event.offsetY+20); //起點
        draw = true;
        ctx.beginPath();
        ispress = true; 
        texting = false;
    }
    else if(er){
        ispress = true;
        texting = false;
    }
    else if(cir){
        str_x = event.offsetX;
        str_y = event.offsetY;
        ispress = true;
        texting = false;
    }
    else if(tri){
        str_x = event.offsetX;
        str_y = event.offsetY;
        ispress = true;
        texting = false;
    }
    else if(rec){
        str_x = event.offsetX;
        str_y = event.offsetY;
        ispress = true;
        texting = false;
    }
    else if(text){
        str_x = event.offsetX;
        str_y = event.offsetY;
        var ss = document.getElementById("tran");
        var cctx = ss.getContext('2d');
        if(!texting){
            var tex = document.createElement("INPUT");
            tex.setAttribute("type", "text");
            tex.setAttribute("id", "tex");
            tex.style.top = event.offsetY +20+ "px";
            tex.style.left = event.offsetX +20+20+ "px";
            tex.style.background = "transparent";
            document.body.appendChild(tex);
            //document.getElementById("tex").click();
            texting = true;
        }
        else{
            var rem = document.getElementById("tex");
            rem.remove();
            var tex = document.createElement("INPUT");
            tex.setAttribute("type", "text");
            tex.setAttribute("id", "tex");
            tex.style.top = event.offsetY +20+ "px";
            tex.style.left = event.offsetX +20+20+ "px";
            tex.style.background = "transparent";
            document.body.appendChild(tex);
            //document.getElementById("tex").click();
            texting = true;

        }
        ispress = false;
    }
}
function blr(){
    str_x2 = event.offsetX;
    str_y2 = event.offsetY;
}
function mup() {
    if(dr){
        draw = false;
        ctx.closePath();
    }
    else if(cir){
        var ss = document.getElementById("tran");
        var cctx = ss.getContext('2d');
        cctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
    }
    else if(tri){
        var ss = document.getElementById("tran");
        var cctx = ss.getContext('2d');
        cctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
    }
    else if(rec){
        var ss = document.getElementById("tran");
        var cctx = ss.getContext('2d');
        cctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.stroke();
        
    }
    else if(er){
        
    }
    if(moved){
        canvas = document.getElementById("main");
        var tep = present.pop();
        un_stack.push(tep);
        present.push(canvas.toDataURL());
        moved = false;
        console.log("success");
    }
    
    
    ispress = false;
}

function mv() {
    if(ispress){
        moved = true;
    }

    if(dr){
        if (draw) {
            ctx.globalCompositeOperation="source-over";
            ctx.lineTo(event.offsetX+5, event.offsetY+20); //下一點
            ctx.stroke(); //繪圖
        }
    }
    else if(er){
        if(ispress){
            var radius = document.getElementById("bar2");
            ctx.globalCompositeOperation="destination-out";
            ctx.beginPath();
            ctx.arc(event.offsetX+5,event.offsetY+20,radius.value,0,Math.PI*2,false);
            ctx.fill();
            moved = true;
        }
        
    }
    else if(cir){
        ctx.globalCompositeOperation="source-over";
        if(ispress){
            var d = document.getElementById("bar");
            var ss = document.getElementById("tran");
            var cctx = ss.getContext('2d');
            cctx.lineWidth = d.value;
            cctx.clearRect(0, 0, canvas.width, canvas.height);
            cctx.beginPath();
            var dx,dy,xx,yy,dis;
            dx = Math.abs(str_x-event.offsetX);
            dy = Math.abs(str_y-event.offsetY);
            dis = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
            cctx.arc((str_x+event.offsetX)/2,(str_y+event.offsetY)/2,dis/2,0,Math.PI*2,false);
            //cctx.arc(str_x,str_y,dis,0,Math.PI*2,false);
            cctx.closePath();
            cctx.stroke();
            ctx.beginPath();
            ctx.arc((str_x+event.offsetX)/2,(str_y+event.offsetY)/2,dis/2,0,Math.PI*2,false);
            ctx.closePath();
            
        }
        
    }
    else if(tri){
        ctx.globalCompositeOperation="source-over";
        if(ispress){
            var ss = document.getElementById("tran");
            var d = document.getElementById("bar");
            var cctx = ss.getContext('2d');
            cctx.lineWidth = d.value;
            cctx.clearRect(0, 0, canvas.width, canvas.height);
            cctx.beginPath();
            var dx,dy,xx,yy,dis;
            dx = Math.abs(str_x-event.offsetX);
            dy = Math.abs(str_y-event.offsetY);
            dis = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
            cctx.moveTo(2*str_x-event.offsetX, str_y);
            cctx.lineTo(event.offsetX, event.offsetY);
            cctx.lineTo(4*str_x-3*event.offsetX, event.offsetY);
            cctx.closePath();
            cctx.stroke();
            ctx.beginPath();
            ctx.moveTo(2*str_x-event.offsetX, str_y);
            ctx.lineTo(event.offsetX, event.offsetY);
            ctx.lineTo(4*str_x-3*event.offsetX, event.offsetY);
            ctx.closePath();
            
        }
    }
    else if(rec){
        ctx.globalCompositeOperation="source-over";
        if(ispress){
            var ss = document.getElementById("tran");
            var d = document.getElementById("bar");
            var cctx = ss.getContext('2d');
            cctx.lineWidth = d.value;
            cctx.clearRect(0, 0, canvas.width, canvas.height);
            moved = true;
            cctx.beginPath();
            var dx,dy,xx,yy,dis;
            dx = Math.abs(str_x-event.offsetX);
            dy = Math.abs(str_y-event.offsetY);
            dis = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
            cctx.rect(str_x,str_y,event.offsetX-str_x,event.offsetY-str_y);
            cctx.closePath();
            cctx.stroke();
            ctx.beginPath();
            ctx.rect(str_x,str_y,event.offsetX-str_x,event.offsetY-str_y);
            ctx.closePath();
        }
    }
    else{
        ctx.globalCompositeOperation="source-over";
    }
}


