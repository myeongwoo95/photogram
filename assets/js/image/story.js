$(document).ready(function(){
    // 스토리 이미지 swiper
    const swiperImage = new Swiper('.image-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 친구 추천 swiper
    const swiperFriendsRecommendation = new Swiper('.friend-recommentation-swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        speed : 1000,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 콘텐츠 caption 더보기 (수정 필요)
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
    
    //Textarea onchange 버튼 활성화
    $('#content-comment-textarea').bind('input propertychange', function() {
        $(".upload-comment").css("opacity", 0.3);
    
        if(this.value.length){
            $(".upload-comment").css("opacity", 1.);
        }
    });

    // 콘텐츠 dotdotdot 옵션
    $(".btn-content-option").on("click", function(){
        $("body").addClass("stopScroll");
        $(".modal-content-option-wrapper").css("display", "flex");
    });

    $(".cancle-content-option").on("click", function(){
        $(".modal-content-option-wrapper").hide();
        $("body").removeClass("stopScroll");
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
        $("body").removeClass("stopScroll");
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

    // 콘텐츠 옵션에서 팔로우 취소 눌렀을때 보여주는 (모달)
    $(".cancel-following").on("click", function(){
        $(".modal-content-option-wrapper").hide();
        $(".modal-requestCancelFollowing-wrapper").css("display", "flex");
    })

    // 팔로우 취소 모달 닫기 
    $(".btn-close-requestCancelFollowing").on("click", function(){
        $(".modal-requestCancelFollowing-wrapper").hide();
        $("body").removeClass("stopScroll");
    })

    // 팔로우 취소API
    $(".btn-cancel-following").on("click", function(){
        //로직
        alert("팔로우 취소 api 실행");
        $(".modal-requestCancelFollowing-wrapper").hide();
        $("body").removeClass("stopScroll");
    })

    // 콘텐츠 옵션에서 링크 복사 눌렀을때 보여주는 (모달)
    $(".btn-link-copy").on("click", function(){
        
        //로직
        alert("링크가 복사되었습니다.")
        $(".modal-content-option-wrapper").hide();
        $("body").removeClass("stopScroll");
    })

    // 친구추천에서 팔로잉 눌렀을 때
    $(".btn-friend-rec-following").on("click", function(){
        //로직
        if($(this).hasClass("false")){
            $(this).removeClass("false")
            $(this).addClass("true")

            $(this).css("color", "#333")
        }else{
            $(this).removeClass("true")
            $(this).addClass("false")
            $(this).css("color", "#0095f6")
        }
    })

    

});
