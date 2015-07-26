/**
 * Created by q4156_000 on 2015/7/26.
 */
var inmenu=document.getElementById("ind_content1_menu");
var liarr1=inmenu.children;
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
//
//var menu=document.getElementById("menu");
//var liarr2=menu.children[0].children;
//for(var j=0;j<liarr2.length;j++) {
//    liarr2[j].aa = j;
//    liarr2[j].onmouseover = function () {
//        this.style.background = "url('/images/menu_bg.png')";
//        for (var k = 0; k < liarr2.length; k++) {
//            if (k != this.aa) {
//                liarr2[k].style.background = "url('/images/menu_bg.png') 0 33px";
//            }
//        }
//    }
//}
var icp=document.getElementById("ind_content1_wrap");
var sn=document.getElementById("scrollimg_num");
var snarr=sn.children;
var icparr=icp.children;
for(var m=0;m<snarr.length;m++){
    snarr[m].aa=m;
    snarr[m].onmouseover=function(){
        this.style.background="#c20000";
        icparr[this.aa].style.display="block";
        for(var n=0;n<snarr.length;n++){
            if(n!=this.aa){
                snarr[n].style.background="rgba(86, 86, 86, 0.25)";
                icparr[n].style.display="none";
            }
        }
    }
}
