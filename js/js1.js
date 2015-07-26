/**
 * Created by q4156_000 on 2015/7/26.
 */
var menu=document.getElementById("ind_content1_menu");
var secondmenu1=document.getElementById("ind_content1_secondmenu");
var secondmenu2=document.getElementById("ind_content1_secondmenu2");
var secondmenu3=document.getElementById("ind_content1_secondmenu3");
var secondmenu4=document.getElementById("ind_content1_secondmenu4");
var secondmenu5=document.getElementById("ind_content1_secondmenu5");
var liarr1=menu.children;
liarr1[0].style.backgroundImage= "url('images/ind_content1_menubgho.jpg')";
for(var i=0;i<liarr1.length;i++){
    liarr1[i].aa=i
    liarr1[i].onmouseover=function(){
        this.children[0].style.display="block";
        this.style.backgroundImage= "url('images/ind_content1_menubgho.jpg')";
    for(var j=0;j<liarr1.length;j++){
        if(j!=this.aa){
            liarr1[j].children[0].style.display="none";
            liarr1[j].style.backgroundImage= "url('images/ind_content1_menubg.jpg')";
        }
    }
    }
}
