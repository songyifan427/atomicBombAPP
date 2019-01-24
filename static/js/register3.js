$(function(){
    flag1=false
    flag2=false
    flag3=false
    $('#name').blur(function(){
        if($('#name').val()){
            flag1=true
    }else{
            flag1=false
        }
        if(flag1 && flag2 && flag3){
            $('form button').removeAttr('disabled')
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
        }else{
            $('form button').attr('disabled','')
            $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        }
    })
    $('#name').keyup(function(){
        if($('#name').val()){
            flag1=true
          
        }else{
            flag1=false
        }
        if(flag1 && flag2 && flag3){
            $('form button').removeAttr('disabled')
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
        }else{
            $('form button').attr('disabled','')
            $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        }
    })
    $('.choice input').change(function(){
        flag2=true
        if(flag1 && flag2 && flag3){
            $('form button').removeAttr('disabled')
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
        }else{
            $('form button').attr('disabled','')
            $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        }
    })
    var likearr=[]
    var str=''
    $('.add').each(function(i,v){
        $(v).click(function(){
            $(v).toggleClass('active')
            
            if (v.classList.length>1){
                flag3=true
                likearr.push(String(i))
            }else{
                flag3=false
                likearr.splice(likearr.indexOf(String(i)),likearr.indexOf(String(i))+1)
            }
            newlikearr=likearr.map(function(num){
                return String(Number(num)+1)
            })
            str=newlikearr.join(',')
            str+=","
            $('#like').val(str)
            console.log($('#like').val())
            if(flag1 && flag2 && flag3){
                $('form button').removeAttr('disabled')
                $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
            }else{
                $('form button').attr('disabled','')
                $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
            }
        })
    })
})