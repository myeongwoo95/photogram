$(document).ready(function(){
    // 탭 전환 
    $(".btn-photo").on("click", function(){
        $(this).addClass("on")
        $(".btn-save").removeClass("on")
        $(".btn-tag").removeClass("on")

        $(".my-content-tab").show();
        $(".my-save-tab").hide();
        $(".tagged-tab").hide();

    })

    $(".btn-save").on("click", function(){
        $(this).addClass("on")
        $(".btn-photo").removeClass("on")
        $(".btn-tag").removeClass("on")

        $(".my-save-tab").show();
        $(".my-content-tab").hide();
        $(".tagged-tab").hide();
    
    })

    $(".btn-tag").on("click", function(){
        $(this).addClass("on")
        $(".btn-photo").removeClass("on")
        $(".btn-save").removeClass("on")

        $(".tagged-tab").show();
        $(".my-content-tab").hide();
        $(".my-save-tab").hide();
    })
});