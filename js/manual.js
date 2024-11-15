function hyouji(num) {
    if (num == 0){
        document.getElementById("tehuda").style.display="none";
        document.getElementById("yougo").style.display="block";
        document.getElementById("setumei").style.height= 175;
    }else if(num == 1){
        document.getElementById("yougo").style.display="none";
        document.getElementById("clear").style.display="block";
        document.getElementById("setumei").style.height= 100;
    }else if(num == 2){
    document.getElementById("clear").style.display="none";
    document.getElementById("bahuda").style.display="block";
    document.getElementById("setumei").style.height= 270;
    }else if(num == 3){
    document.getElementById("bahuda").style.display="none";
    document.getElementById("tehuda").style.display="block";
    document.getElementById("setumei").style.height= 150;
    }
}
