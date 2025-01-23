// 画像を表示する関数
function showImage() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.style.display = "flex";  // 画像を表示
    imageContainer.style.justifyContent = "center";  // 横方向に中央揃え
    imageContainer.style.alignItems = "center";  // 縦方向に中央揃え

    // 画像をクリックすると非表示にする
    imageContainer.onclick = function() {
        imageContainer.style.display = "none";  // 画像コンテナを非表示に
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


