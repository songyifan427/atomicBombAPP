/*
* @Author: Administrator
* @Date:   2018-07-23 10:28:53
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-08-13 22:18:08
*/

'use strict';
window.onload=function(){
    var hu=document.querySelector(".hu")
    var shou_one=document.querySelector(".shou_one")
    function xian(){
        hu.style.display="none";
        shou_one.style.display="block";
    }
    this.setInterval(xian,3000)
    var a=document.querySelector(".a")
    var b=document.querySelector(".b")
    var shou=document.querySelectorAll(".shou_one_one");
    var next=0;
    var now=0;
    function move(){
        next++;
        if(next>shou.length-1){
            return;
        }
        shou[next].style.zIndex=5;
        shou[now].style.zIndex=0;
        now=next;
    }
    function move1(){
        next--;
        if(next<0){
            return;
        }
        shou[next].style.zIndex=5;
        shou[now].style.zIndex=0;
        now=next;
    }
    a.onclick=function(){
        move1();
    }
    b.onclick=function(){
        move();
    }
   
}