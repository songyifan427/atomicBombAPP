$(function(){
    function isPoneAvailable(str) {
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    function isPassWordable(str) {
        var myreg= /^[\w]{6,12}$/;
        if (!myreg.test(str)) {
            return false;
        } else {
            return true;
        }
    }
    flag1=false
    flag2=false
    flag3=false

    function test(){
            var flag = isPoneAvailable($('#phone').val())
            if (flag){
                $('.phone .tip').css('display','block')
                $('.phone .tip2').css('display','none')
                $('.phone .tipwords').css('display','none')
                flag1=true
            }else{
                $('.phone .tip').css('display','none')
                $('.phone .tip2').css('display','block')
                $('.phone .tipwords').css('display','flex')
                flag1=false
            }
            if(flag1 && flag2 && flag3){
                $('form button').removeAttr('disabled')
                $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
            }else{
                $('form button').attr('disabled','')
                $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
            }
    }

    $('#phone').keyup(function(){
        if($('#phone').val().length>=11){
            test()
        }
    })
    $('#phone').blur(test)
    $('#pw').blur(function(){
        var flag = isPassWordable($('#pw').val())
        if (flag){
            $('.p1 .tip').css('display','block')
            $('.p1 .tip2').css('display','none')
            flag2=true
           
            $('.p1 .tipwords').css('display','none')
        }else{
            $('.p1 .tip').css('display','none')
            flag2=false
           
            $('.p1 .tip2').css('display','block')
            $('.p1 .tipwords').css('display','flex')
        }
        if(flag1 && flag2 && flag3){
            $('form button').removeAttr('disabled')
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
        }else{
            $('form button').attr('disabled','')
            $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        }
    })
    $('#pw2').keyup(function(){
        if ($('#pw2').val() == $('#pw').val()){
            $('.p2 .tip').css('display','block')
            flag3=true
           
            $('.p2 .tip2').css('display','none')
            $('.p2 .tipwords').css('display','none')
        }else{
            $('.p2 .tip').css('display','none')
            $('.p2 .tip2').css('display','block')
            flag3=false
            $('.p2 .tipwords').css('display','flex')
        }
        if(flag1 && flag2 && flag3){
            $('form button').removeAttr('disabled')
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
        }else{
            $('form button').attr('disabled','')
            $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        }
    })

})