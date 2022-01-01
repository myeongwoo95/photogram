$(document).ready(function(){

    // 프로필 클릭 드랍다운
    let dropdownState = 0
    $(".header__profile-picture").on("click", function(){
        if(dropdownState == 0 ){
            $(".header__dropdown").css("display", "flex");
            dropdownState = 1;
        }else{
            $(".header__dropdown").hide();
            dropdownState = 0;
        }
    })

    const swiperComment = new Swiper('.comment-swiper', {
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

    // btn 이미지 슬라이드 모달 
    $(".cancel-comment-modal").on("click", function(){
        $(".modal-comment-wrapper").hide();
    });

    // 댓글 좋아요, 좋아요 취소
    $(".content-comment-like").on("click", function(e){
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
        
    })

    // 대댓글 좋아요, 좋아요 취소
    $(".comment-comment-like").on("click", function(e){
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
    })

    // 북마크, 북마크 취소
    $(".content-bookmark").on("click", function(e){
        e.preventDefault();

        if($(this).hasClass("far")){
            $(this).css("color", "#333");
            $(this).addClass("fas");
            $(this).removeClass("far");
        }else{
            $(this).css("color", "");
            $(this).addClass("far");
            $(this).removeClass("fas");
        }
    });

     // 댓글의 댓글 확인 버튼
     $(".comment-deep-button").on("click", function(){
        $(this).next().toggle();
    })

});