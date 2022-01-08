$(document).ready(function(){
    // 사진 상세보기 swiper
    const swiperComment = new Swiper('.comment-swiper', {
        direction: 'horizontal',
        loop: false,

        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 영역 외 클릭
    $(document).click(function(e){
        //로직추가
    });

    // 헤더 프로필 클릭
    $(".header__profile-picture").on("click", function(){
        if( $(".header__dropdown").css("display") == "none"){
            $(".header__dropdown").css("display", "flex");

            $(".header__notice-box").css("display", "none")
            $(".search-list").css("display", "none");
        }else{
            $(".header__dropdown").css("display", "none");
        }
    })

    // 헤더 알림 클릭 
    $(".notice-heart").on("click", function(){
        $(".header__notice-box").toggle();
        $(".header__dropdown").css("display", "none");
        $(".search-list").css("display", "none");
    })

    // 헤더 검색
    $(".header__search-input").on("change keyup paste focus", function(e){
        e.preventDefault();
        
        if(!$(this).val()){
            $(".search-list").hide();
        }else{
            //api 로직
            $(".search-list").show();
            $(".header__dropdown").css("display", "none");
            $(".header__notice-box").css("display", "none");
            
        }
    })

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