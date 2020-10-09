function animasiIntro(){
    $("#text span").velocity("transition.slideLeftIn", {
                    stagger: 150,
                    complete: function(){
                        animasiButtonStart();
                        }
                    });
}

function animasiButtonStart(){
    $("#start").velocity("transition.bounceUpIn")
                .mouseenter(function(){
                    $(this).velocity({width:100});
                })
                .mouseleave(function(){
                    $(this).velocity({width:125});
                });
}

function animasiIntroOut(){
    $("#start").velocity("transition.whirlOut",{
                stagger: 150,
                complete: function(){
                    $("#text").velocity({"font-size":"20px",
                                         "top":"95%"
                                        }, {
                                            duration:1000,
                                            complete: function(){
                                                callMenu();
                                                $("#menu ul li a[href='what_we_do']").trigger("click");
                                            }
                                        });
                    }
                });
}

function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn", {
                                stagger: 150
                            });

    $("#menu ul li a").click(function(event){
        event.preventDefault();
        $(this).parent("li").addClass("active").siblings().removeClass("active");

        var hrefString =$(this).attr("href");
        $("#" + hrefString).show();
        windows[hrefString]();
    });
}

function what_we_do(){
    $("#what_we_do img").velocity("transition.flipYin", {duration:1500});
    $("#what_we_do .title").velocity("transition.slideUpIn", {duration:1500});
    $("#what_we_do img").velocity("transition.slideDownIn", {duration:1500});
}

$(document).ready(function(){
    animasiIntro();
});