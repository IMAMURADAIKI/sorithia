var a, b, t;
var m, m2;
var o1, o2, o3, o4;
var card = new Array();
var bahuda = new Array();
var yamahuda = new Array();
var okiba1 = new Array();
var okiba2 = new Array();
var okiba3 = new Array();
var okiba4 = new Array();

var spade = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13'];
var heart = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12', 'h13'];
var diamond = ['d1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd13'];
var club = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'c10', 'c11', 'c12', 'c13'];

var color = ['#008000', '#0066CC', '#33CCFF', '#FF773E', '#FFBEDA', '#9966CC', '#AAAAAA'];

var ya = document.getElementById("yamaomo");

var ba1 = document.getElementById("ba1");
var ba2 = document.getElementById("ba2");
var ba3 = document.getElementById("ba3");
var ba4 = document.getElementById("ba4");
var ba5 = document.getElementById("ba5");
var ba6 = document.getElementById("ba6");
var ba7 = document.getElementById("ba7");

var cnt = 1;

var c = 1;

o1 = o2 = o3 = o4 = 0;

for (var i = 0; i < 52; i++){
    if(i < 13){
        card[i] = "spade/s_" + cnt + ".png' id='s" + cnt + "' name='b'";
        cnt++;
    }else if(i < 26){
        card[i] = "heart/h_" + cnt + ".png' id='h" + cnt + "' name='r'";
        cnt++;
    }else if(i < 39){
        card[i] = "diamond/d_" + cnt + ".png' id='d" + cnt + "' name='r'";
        cnt++;
    }else{
        card[i] = "club/c_" + cnt + ".png' id='c" + cnt + "' name='b'";
        cnt++;
    }

    if(cnt == 14){
        cnt = 1;
    }
}

for (var i = 0; i < 52; i++){
    a = Math.floor(Math.random() * 52);
    m = card[a];

    b = Math.floor(Math.random() * 52);
    m2 = card[b];

    card[a] = m2;
    card[b] = m;
}

cnt = 0;

for (var i = 0; i < 52; i++){
    if(i < 28){
        bahuda[cnt] = card[i];
    }else if(i == 28){
        cnt = 0;
        yamahuda[cnt] = card[i];
    }else{
        yamahuda[cnt] = card[i];
    }
    cnt++;
}

function b_color() {

    document.body.style.backgroundColor = color[c];

    if(c == 6){
        c = 0;
    }else{
        c++;
    }

}

//ページをリロードする関数
function reload() {

    location.reload();

}

window.onload = function() {

    cnt = 0;

    a = 0;

    for (var i = 7; i >= 1; i--){
        for (var j = 7; j >= i; j--){
            switch(i){
                case 1:
                    if(j == 7){
                        ba1.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba1.innerHTML += "<img src='images/card_back.png' class='sentou' name='ura'>";
                    }else if(j == 1){
                        ba1.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)'>";
                    }else{
                        ba1.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba1.innerHTML += "<img src='images/card_back.png' class='naka' name='ura'>";
                    }
                    break;

                case 2:
                    if(j == 7){
                        ba2.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba2.innerHTML += "<img src='images/card_back.png' class='sentou' name='ura'>";
                    }else if(j == 2){
                        ba2.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)'>";
                    }else{
                        ba2.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba2.innerHTML += "<img src='images/card_back.png' class='naka' name='ura'>";
                    }
                    break;

                case 3:
                   if(j == 7){
                        ba3.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba3.innerHTML += "<img src='images/card_back.png' class='sentou' name='ura'>";
                    }else if(j == 3){
                        ba3.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)'>";
                    }else{
                        ba3.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba3.innerHTML += "<img src='images/card_back.png' class='naka' name='ura'>";
                    }
                    break;

                case 4:
                    if(j == 7){
                        ba4.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba4.innerHTML += "<img src='images/card_back.png' class='sentou' name='ura'>";
                    }else if(j == 4){
                        ba4.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)'>";
                    }else{
                        ba4.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba4.innerHTML += "<img src='images/card_back.png' class='naka' name='ura'>";
                    }
                    break;

                case 5:
                    if(j == 7){
                        ba5.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba5.innerHTML += "<img src='images/card_back.png' class='sentou' name='ura'>";
                    }else if(j == 5){
                        ba5.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)'>";
                    }else{
                        ba5.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba5.innerHTML += "<img src='images/card_back.png' class='naka' name='ura'>";
                    }
                    break;

                case 6:
                    if(j == 7){
                        ba6.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)' style='display: none'>";
                        ba6.innerHTML += "<img src='images/card_back.png' class='sentou' name='ura'>";
                    }else{
                        ba6.innerHTML += "<img src='images/" + bahuda[cnt] + " class='naka' ondragstart='f_dragstart(event)'>";
                    }
                    break;

                case 7:
                    if(j == 7){
                        ba7.innerHTML += "<img src='images/" + bahuda[cnt] + " class='sentou' ondragstart='f_dragstart(event)'>";
                    }
                    break;
            }
            cnt++
        }
    }
}

document.getElementById("yamaura").onclick = function() {

    ya.innerHTML = "<img src='images/" + yamahuda[a] + " ondragstart='f_dragstart(event)'>";
    a++;

    if(a == yamahuda.length){
        document.getElementById("yamaura").innerHTML = "山札";
        a = 0;

    }else{
        document.getElementById("yamaura").innerHTML = "<img src='images/card_back.png'>";

    }

}


function f_dragstart(event) {

    t = event.target;  //ドラッグされたカードをtに格納

    var r = document.getElementsByName("reset");

    for (var i = 0; i < r.length; i++){
        r[i].setAttribute("ondragover", "f_dragover(event)");
    }

}


function f_dragover(event) { //ドラッグしたカードを上に置けるようにする

    event.preventDefault(); 

    if(event.target.parentNode.id.match(/oki/)){ //条件によってドロップ可能か判断する
        if(event.target.id.charAt(0) != t.id.charAt(0) || parseInt(event.target.id.substr(1,2)) != (parseInt(t.id.substr(1,2)) - 1)){
            event.target.parentNode.setAttribute("ondragover", "false");
        }
    }else if(event.target.parentNode.id.match(/ba/)){
        if(event.target.id.charAt(0) == t.id.charAt(0) ||
           event.target.name == t.name ||
           parseInt(event.target.id.substr(1,2)) != (parseInt(t.id.substr(1,2)) + 1)){
            event.target.parentNode.setAttribute("ondragover", "false");
        }
    }

    if(event.target.id.match(/oki/) && t.id.substr(1,2) != 1){
        event.target.setAttribute("ondragover", "false");
    }else if(event.target.id.match(/ba/) && t.id.substr(1,2) != 13){
        event.target.setAttribute("ondragover", "false");
    }

}

function f_drop(event) {

    var id_name = t.id;

    var drag_elm = document.getElementById(id_name);

    var parent = drag_elm.parentNode;

    cnt = 0;

    if(parent.id.match(/oki/)){
        if(drag_elm.id.substr(1,2) == 1){
            drag_elm.style.display = "block";
        }else{
            drag_elm.previousElementSibling.style.display = "block";
        }

        if(parent.id.match(/oki1/)){
            o1--;
        }else if(parent.id.match(/oki2/)){
            o2--;
        }else if(parent.id.match(/oki3/)){
            o3--;
        }else if(parent.id.match(/oki4/)){
            o4--;
        }
    }

    if(event.target.id.match(/ba/)){
        drag_elm.className = "sentou";
    }else if(event.target.className.match(/naka/)){
        drag_elm.className = "naka";
    }else if(event.target.className.match(/sentou/)){
        drag_elm.className = "naka";
    }else if(event.target.id.match(/oki/) || event.target.className.match(/oki/)){
        drag_elm.className = "oki";
    }

    if(parent.id.match(/ba/)){
        for (var i = 0; i < parent.children.length; i++){
            if(drag_elm.id != parent.childNodes[i].id){
                cnt++;
            }else{
                break;
            }
        }
    }

    if(drag_elm.nextSibling == null){
        event.currentTarget.appendChild(drag_elm);
    }else if(parseInt(parent.childNodes[cnt].id.substr(1,2)) ==
      (parseInt(parent.childNodes[cnt + 1].id.substr(1,2)) + 1)){
        while(parent.childNodes[cnt] != null){
            event.currentTarget.appendChild(parent.childNodes[cnt]);
        }
    }

    if(parent.id.match(/ba/) && parent.lastChild.name == "ura"){
        parent.removeChild(parent.lastChild);
        parent.lastChild.style.display = "block";
    }

    if(parent.id.match(/yama/)){
        b = yamahuda.length - 1;
        if(a == 0){
            yamahuda.splice(b, 1);
            if(b == 0){
                ya.innerHTML = "山札";
            }else{
                ya.innerHTML = "<img src='images/" + yamahuda[b-1] + " ondragstart='f_dragstart(event)'>";
            }
        }else{
            a--;
            yamahuda.splice(a, 1);
            if(a == 0){
                ya.innerHTML = "山札";
            }else{
                ya.innerHTML = "<img src='images/" + yamahuda[a-1] + " ondragstart='f_dragstart(event)'>";
            }
        }

        if(yamahuda.length == 0){
            document.getElementById("yamaura").style.pointerEvents = "none";
        }

    }

    if(event.target.id.match(/oki1/) || event.target.parentNode.id.match(/oki1/)){
        okiba1[o1] = id_name;
        o1++;

        if(o1 == 1){
            event.target.style.display = "block";
        }else if(o1 == 13){
            document.getElementById("oki1").setAttribute("ondragover", "false");
            drag_elm.style.pointerEvents = "none";
            event.target.style.display = "none";
        }else{
            event.target.style.display = "none";
        }

    }else if(event.target.id.match(/oki2/) || event.target.parentNode.id.match(/oki2/)){
        okiba2[o2] = id_name;
        o2++;

         if(o2 == 1){
            event.target.style.display = "block";
        }else if(o2 == 13){
            document.getElementById("oki1").setAttribute("ondragover", "false");
            drag_elm.style.pointerEvents = "none";
            event.target.style.display = "none";
        }else{
            event.target.style.display = "none";
        }

    }else if(event.target.id.match(/oki3/) || event.target.parentNode.id.match(/oki3/)){
        okiba3[o3] = id_name;
        o3++;

         if(o3 == 1){
            event.target.style.display = "block";
        }else if(o3 == 13){
            document.getElementById("oki1").setAttribute("ondragover", "false");
            drag_elm.style.pointerEvents = "none";
            event.target.style.display = "none";
        }else{
            event.target.style.display = "none";
        }

    }else if(event.target.id.match(/oki4/) || event.target.parentNode.id.match(/oki4/)){
        okiba4[o4] = id_name;
        o4++;

         if(o4 == 1){
            event.target.style.display = "block";
        }else if(o4 == 13){
            document.getElementById("oki1").setAttribute("ondragover", "false");
            drag_elm.style.pointerEvents = "none";
            event.target.style.display = "none";
        }else{
            event.target.style.display = "none";
        }
    }

    var s_j = false;
    var h_j = false;
    var d_j = false;
    var c_j = false;

    if(okiba1[0].charAt(0) == 's' && okiba1.toString() == spade.toString()){
        s_j = true;
    }else if(okiba1[0].charAt(0) == 'h' && okiba1.toString() == heart.toString()){
        h_j = true;
    }else if(okiba1[0].charAt(0) == 'd' && okiba1.toString() == diamond.toString()){
        d_j = true;
    }else if(okiba1[0].charAt(0) == 'c' && okiba1.toString() == club.toString()){
        c_j = true;
    }

    if(okiba2[0].charAt(0) == 's' && okiba2.toString() == spade.toString()){
        s_j = true;
    }else if(okiba2[0].charAt(0) == 'h' && okiba2.toString() == heart.toString()){
        h_j = true;
    }else if(okiba2[0].charAt(0) == 'd' && okiba2.toString() == diamond.toString()){
        d_j = true;
    }else if(okiba2[0].charAt(0) == 'c' && okiba2.toString() == club.toString()){
        c_j = true;
    }

    if(okiba3[0].charAt(0) == 's' && okiba3.toString() == spade.toString()){
        s_j = true;
    }else if(okiba3[0].charAt(0) == 'h' && okiba3.toString() == heart.toString()){
        h_j = true;
    }else if(okiba3[0].charAt(0) == 'd' && okiba3.toString() == diamond.toString()){
        d_j = true;
    }else if(okiba3[0].charAt(0) == 'c' && okiba3.toString() == club.toString()){
        c_j = true;
    }

    if(okiba4[0].charAt(0) == 's' && okiba4.toString() == spade.toString()){
        s_j = true;
    }else if(okiba4[0].charAt(0) == 'h' && okiba4.toString() == heart.toString()){
        h_j = true;
    }else if(okiba4[0].charAt(0) == 'd' && okiba4.toString() == diamond.toString()){
        d_j = true;
    }else if(okiba4[0].charAt(0) == 'c' && okiba4.toString() == club.toString()){
        c_j = true;
    }

    if(s_j == true && h_j == true && d_j == true && c_j == true){
        console.log("Game Cleared!"); 
        showClearImage(); 
    }

    event.preventDefault();
}

function showImage() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "flex";  // 画像を表示
    imageContainer.style.justifyContent = "center";  // 横方向に中央揃え
    imageContainer.style.alignItems = "center";  // 縦方向に中央揃え

    // 画像をクリックすると非表示にする
    imageContainer.onclick = function() {
        imageContainer.style.display = "none";
    }
}

// ゲームクリア時に呼ばれる関数
function showClearImage() {
    // 親要素のdisplayを変更
    document.getElementById("im").style.display = "flex"; // 親要素を表示

    // 画像を表示
    document.getElementById("clear").style.display = "block"; // クリア画像を表示

    // 画像をクリックで非表示にする
document.getElementById("im").onclick = function() {
    document.getElementById("im").style.display = "none";  // 親要素を非表示
    document.getElementById("clear").style.display = "none"; // クリア画像を非表示
}

}

