$(function(){
    $('#phone').keyup(function(){
        if($('#phone').val()){
            $('.phone .tip').css({'display':'block'})
        }
    })
    $('.phone .tip').on('touchend',function(){
        $('#phone').val('')
        $('.phone .tip').css({'display':'none'})
        $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        $('form button').attr('disabled','')
    })

    $('#pw').keyup(function(){
        if($('#pw').val()){
            $('.password .tip').css({'display':'block'})
        }
    })
    $('.password .tip').on('touchend',function(){
        $('#pw').val('')
        $('.password .tip').css({'display':'none'})
        $('form button').css({'background':'#e3ecf8','color':'#c4ddfa'})
        $('form button').attr('disabled','')

    })
    $('#phone').keyup(function(){
        if ($('#pw').val() && $('#phone').val()){
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
            $('form button').removeAttr('disabled')
        }
    })
    $('#pw').keyup(function(){
        if ($('#pw').val() && $('#phone').val()){
            $('form button').css({'background':'linear-gradient(to right, #44d8ff, #43baff)','color':'#fff'})
            $('form button').removeAttr('disabled')
        }
    })
})