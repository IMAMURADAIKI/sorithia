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
