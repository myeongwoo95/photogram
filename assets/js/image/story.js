// 댓글 더 보기
$(document).ready(function(){

    $('.image-caption').each(function(){
        var content = $(this).children('.caption');
        var content_txt = content.text();
        var content_txt_short = content_txt.substring(0,100)+"...";
        var btn_more = $('<a href="javascript:void(0)" class="more"> 더 보기</a>');
    
        $(this).append(btn_more);
        
        if(content_txt.length >= 100){
            content.html(content_txt_short)
        }else{
            btn_more.hide()
        }
        
        btn_more.click(toggle_content);
      
        function toggle_content(){
            if($(this).hasClass('short')){
                // 접기 상태
                $(this).html('더보기');
                content.html(content_txt_short)
                $(this).removeClass('short');
            }else{
                // 더보기 상태
                $(this).html('접기');
                content.text(content_txt);
                $(this).addClass('short');
    
            }
        }
    });
    
    // Textarea 높이 자동조절
    $('#content-comment-textarea').keyup(function(e) {
        $(this).css('height', 'auto');
        $(this).height(this.scrollHeight);
    });
    
    //Textarea onchange
    $('#content-comment-textarea').bind('input propertychange', function() {
    
        $(".upload-comment").css("opacity", 0.3);
    
        if(this.value.length){
            $(".upload-comment").css("opacity", 1.);
        }
    });

    //친구추천 모달
    const standard = 597;
    let count = 1;
    $(".fa-chevron-right").on("click", function(){
        if(count==5){
            return;
        }else{
            document.querySelector('.modal-item-list-wrapper').style.transform = `translateX(-${standard*count}px)`;
            count++;
            arrowDisplay(count);
        }
    });
    
    $(".fa-chevron-left").on("click", function(){
        if(count==1){
            return;
        }else{
            count--;
            document.querySelector('.modal-item-list-wrapper').style.transform = `translateX(-${standard*(count-1)}px)`;
            arrowDisplay(count);
        }
        
    });

    function arrowDisplay(count){
        if(count == 5){
            $(".fa-chevron-right").css("display", "none");
        }else{
            $(".fa-chevron-right").css("display", "flex");
        }

        if(count == 1){
            $(".fa-chevron-left").css("display", "none");
        }else{
            $(".fa-chevron-left").css("display", "flex");
        }
    }

    // 콘텐츠 옵션
    $(".btn-content-option").on("click", function(){
        $(".modal-content-option-wrapper").css("display", "flex");
        document.body.classList.add("stop-scroll");
        document.body.classList.remove("stop-scroll");
    });

    $(".cancle-content-option").on("click", function(){
        $(".modal-content-option-wrapper").hide();
    });

    $(".modal-content-option .report").on("click", function(){
        $(".modal-content-option-wrapper").hide();
        $(".modal-reportList-wrapper").css("display", "flex");
    });

    // 신고 사유 선택
    $(".cancel-reportList").on("click", function(){
        $(".modal-reportList-wrapper").hide();
    });

    // 신고 완료
    $(".modal-reportList ul li button").on("click", function(){
        $(".modal-reportList-wrapper").hide();
        $(".modal-reported-wrapper").css("display", "flex");
    })

    $(".btn-close-reported").on("click", function(){
        $(".modal-reported-wrapper").hide();
    })

    // 좋아요, 좋아요 취소
    $(".content-like").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("far")){
            $(this).css("color", "#ED4956");
            $(this).addClass("fas");
            $(this).removeClass("far");
        }else{
            $(this).css("color", "");
            $(this).addClass("far");
            $(this).removeClass("fas");
        }
    });


});
