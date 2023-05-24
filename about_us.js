const images = ["resources/img/about_us_1.jpg","resources/img/about_us_2.jpg","resources/img/about_us_3.jpg","resources/img/about_us_4.jpg","resources/img/about_us_5.jpg"];
var i = 0;
var renew1 = setInterval(function(){
    if(images.length == i){
        i = 0;
    }
    else {
    document.getElementById("1").src = images[i];  
    i++;
}
},2000);

var j = images.length-1;
var renew2 = setInterval(function(){
    if(j == 0){
        j = images.length-1;
    }else{
        document.getElementById("2").src = images[j];
        j--;
    }
},2000);

var k = Math.floor(Math.random() * images.length);
var renew3 = setInterval(function(){
    document.getElementById("3").src = images[k];
    k = Math.floor(Math.random() * images.length);
},2000);
