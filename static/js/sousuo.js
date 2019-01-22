window.onload = function(){
    $("#search").focus(function(){
        $(".change").css("display","none")
        $(".back").css("display","block")
        $(".history").css("display","block")
        $(".classify").css("display","block")
    })
    $("#search").on("input",function () {
        $(".classify").css("display","none")
        $(".detail").css("display","block")
        $(".nones").css("display","none")
        $(".success").css("display","none")
    })
    $(".right").click(function () {
        var val = $("#search").val()
        if(val == "纽约时装周"){
            $(".classify").css("display","none")
            $(".detail").css("display","none")
            $(".nones").css("display","none")
            $(".success").css("display","block")
        }else {
            $(".classify").css("display","none")
            $(".detail").css("display","none")
            $(".nones").css("display","block")
            $(".success").css("display","none")
        }
    })
}

