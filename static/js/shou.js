/*
* @Author: Administrator
* @Date:   2018-07-23 10:28:53
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-08-13 22:18:08
*/

'use strict';
window.onload=function(){
    var fenxiang=document.querySelector(".fenxiang")
    var shuru=document.querySelector(".shuru")
    var ru=document.querySelector(".ru")
    var xiangqing=document.querySelector(".xiangqing")
    var pinglun=document.querySelector(".pinglun")
    var ying=document.querySelector(".ying")
    var m=document.querySelector(".m")
    pinglun.onclick=function(){
        shuru.style.display="block";
        xiangqing.style.height="13.14rem";
    }
     // 第一步：点击任何地方都触发事件
     document.querySelector(".shuru").onclick = function(){
        shuru.style.display="none";
        xiangqing.style.height="auto";
    }

    // 第二步： 将某元素的位置设为不可点击；(此部分点击不会触发点击事件)
    document.querySelector(".ru").onclick = function(){
       event.stopPropagation();
   }
    fenxiang.onclick=function(){
        ying.style.display="block";
        xiangqing.style.height="13.14rem";
    }
    ying.onclick=function(){
        ying.style.display="none";
        xiangqing.style.height="auto"
    }
    var ht=document.querySelector("#myArea")
    ht.onkeyup=function(){
        var text1=document.getElementById("myArea").value;
        var maxLen=document.getElementById("myArea").cols*document.getElementById("myArea").rows;
        var len;
        if(text1.length>=maxLen)
        {
            document.getElementById("myArea").value=text1.substr(0,maxLen);//只显示起始位-末尾；substr（起始位，末尾)
            len=0;
        }else{
            len=text1.length;
        }
        document.querySelector(".aa").innerHTML=len;
    }
}