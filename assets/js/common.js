let scrollTop;
function saveScroll(){
    scrollTop = $(document).scrollTop();
}

function scroll(){
    $(document).scrollTop(scrollTop);
}

$(document).ready(function(){
    // 파일 업로드 swiper
    var mySwiper = new Swiper ('.file-upload-swiper', {
        pagination: {
            el: '.swiper-pagination',
        },

        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },

        scrollbar: {
        el: '.swiper-scrollbar',
        },
        
        observer: true
    });

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

    // 스토리 게시글 (모달) 켜기
    $(".content-class").on("click", function(){
        saveScroll();
        $("body").addClass("stopScroll");
        $(".modal-comment-wrapper").css("display", "flex");
        
        // textarea 2개가 연동되서 모달 키고 닫을 때 내용 비워주기
        $(".modal-write-comment").val("");

        // 이모티콘 박스가 켜져있다면 닫기
        if($(".modal-comment-wrapper").find(".emoticon-wrapper")){
            $(".modal-comment-wrapper").find(".emoticon-wrapper").remove();
        }
    })

    // btn 스토리 게시글 (모달) 닫기 
    $(".cancel-comment-modal").on("click", function(){
        $(".modal-comment-wrapper").hide();
        $("body").removeClass("stopScroll");

        // textarea 2개가 연동되서 모달 키고 닫을 때 내용 비워주기
        $(".modal-write-comment").val("");

        scroll();
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

    // ---------- 파일 업로드 -------------
    // 파일 업로드 모달 켜기
    $(".btn-fileupload").on("click", function(){
        $("body").addClass("stopScroll");
        $(".modal-fileupload-wrapper").css("display", "flex");
    })

    function fileuploadClear(){
        // input file 초기화
        $("#input_imgs").val("");

        // swiper 초기화
        $(".file-upload-swiper .swiper-wrapper").html("");

        // header 변경
        $(".header-file h3").html("새 게시물 만들기");
        $(".header-file i").hide();
        $(".header-file button").hide();

        //body 변경
        $(".body-file__nofile-box").css("display", "flex")
        $(".file-upload-swiper").hide();
        $(".btn-fileupload-multi").hide();
        
        $(".modal-fileupload-wrapper").css("display", "none");
        
        $(".modal-fileupload").css("width", "38vw");
        $(".file-upload-options").hide();
        $(".file-upload-swiper").css("flex-basis", "");
        $(".file-upload-swiper img").css("border-bottom-right-radius", "9px");
        $(".btn-fileupload-multi").css("display", "none");

        //input 초기화
        $(".file-upload-options__input-caption").val("");
        $(".file-upload-options__input-location").val("");
        $(".file-upload-options__input-alt").val("");
        $(".file-upload-options__input-switch").prop('checked', false) ;

        // options 닫기
        $(".btn-toggle-file-upload-options_option").addClass("fa-chevron-down");
        $(".btn-toggle-file-upload-options_option").removeClass("fa-chevron-up");
        $(".file-upload-options_option > div:nth-child(2)").hide();
        $(".file-upload-options_option > div:nth-child(1)").css("border-bottom", "1px solid #dbdbdb")

        //접근성 닫기
        $(".btn-toggle-file-upload-options_accessibility").addClass("fa-chevron-down");
        $(".btn-toggle-file-upload-options_accessibility").removeClass("fa-chevron-up");
        $(".file-upload-options_accessibility > div:nth-child(2)").hide();
        $(".file-upload-options_accessibility > div:nth-child(1)").css("border-bottom", "1px solid #dbdbdb");
    }

    // 파일 업로드 모달 끄기
    $(".btn-close-fileUploadModal").on("click", function(){
        fileuploadClear();
        $("body").removeClass("stopScroll");
    })

    // 파일 업로딩 모달 닫기
    $("i.btn-close-fileupload-loading-modal").on("click", function(){
        $(".modal-fileupload-uploading-wrapper").hide();
        fileuploadClear();
        $("body").removeClass("stopScroll");
    })

    // 파일 업로드 고급 옵션 토글
    $(".btn-toggle-file-upload-options_option").on("click", function(){
        if($(this).hasClass("fa-chevron-down")){
            $(this).removeClass("fa-chevron-down");
            $(this).addClass("fa-chevron-up");
            $(".file-upload-options_option > div:nth-child(2)").show();
            $(".file-upload-options_option > div:nth-child(1)").css("border-bottom", "none")
           
        }else{
            $(this).addClass("fa-chevron-down");
            $(this).removeClass("fa-chevron-up");
            $(".file-upload-options_option > div:nth-child(2)").hide();
            $(".file-upload-options_option > div:nth-child(1)").css("border-bottom", "1px solid #dbdbdb")
        }
    })

    // 파일 업로드 접근성 옵션 토글
    $(".btn-toggle-file-upload-options_accessibility").on("click", function(){
        if($(this).hasClass("fa-chevron-down")){
            $(this).removeClass("fa-chevron-down");
            $(this).addClass("fa-chevron-up");
            $(".file-upload-options_accessibility > div:nth-child(2)").show();
            $(".file-upload-options_accessibility > div:nth-child(1)").css("border-bottom", "none");
        }else{
            $(this).addClass("fa-chevron-down");
            $(this).removeClass("fa-chevron-up");
            $(".file-upload-options_accessibility > div:nth-child(2)").hide();
            $(".file-upload-options_accessibility > div:nth-child(1)").css("border-bottom", "1px solid #dbdbdb");
        }
    })

     // 파일 업로드 다음 버튼1
     $(".btn-fileupload-step1").on("click", function(e){
        e.preventDefault();

        // 뒤로가기, 다음 버튼 step2로 변경
        $(".header-file h3").text("편집");
        $(this).hide();
        $(".btn-fileupload-step2").css("display", "inline-flex");

        $(".header-file i.back-step1").hide();
        $(".header-file i.back-step2").css("display", "inline-flex");

        // css 변경
        $(".modal-fileupload").css("width", "54vw");
        $(".file-upload-options").show();
        $(".file-upload-swiper").css("flex-basis", "69%");
        $(".file-upload-swiper img").css("border-bottom-right-radius", "0px");
        $(".btn-fileupload-multi").hide();
    })

    // 파일 업로드 다음 버튼2(파일 업로드)
    $(".btn-fileupload-step2").on("click", function(e){
        e.preventDefault();
        //api 로직

        $(".modal-fileupload-uploading-wrapper").css("display", "flex");
        $(".modal-fileupload-wrapper").hide();

        //파일 업로드 모달 돌려놔야함!!!!!
    })

    // 파일 업로드 뒤로가기 버튼1 모달 켜기
    $(".header-file i.back-step1").on("click", function(){
        $(".modal-fileupload-undo-wrapper").css("display", "flex");
    })

    // 파일 업로드 뒤로가기 버튼2
    $(".header-file i.back-step2").on("click", function(){

        // 뒤로가기, 다음 버튼 step1로 변경
        $(".header-file h3").text("사진 추가");
        $(".btn-fileupload-step2").hide();
        $(".btn-fileupload-step1").css("display", "inline-flex");

        $(this).hide();
        $(".header-file i.back-step1").css("display", "inline-flex");

        // css 변경
        $(".modal-fileupload").css("width", "38vw");
        $(".file-upload-options").hide();
        $(".file-upload-swiper").css("flex-basis", "");
        $(".file-upload-swiper img").css("border-bottom-right-radius", "9px");
        $(".btn-fileupload-multi").css("display", "inline-flex");
        
    });
    
    // 첫번째 input file 클릭
    $(".btn-fileupload-multi-first-click").on("click", function(){
        $("#input_imgs").click();
    })

    // 두번째 이후 input file 클릭
    $(".btn-fileupload-multi").on("click", function(){
        $("#input_imgs").click();
    })

    // btn video play
    $(document).on("click", ".btn-video-play", function(){
        $(this).parent().children("video").get(0).play();
        $(this).hide();
        $(".btn-video-stop").show();
    })

    // btn video stop
    $(document).on("click", ".btn-video-stop", function(){
        $(this).parent().children("video").get(0).pause();
        $(this).hide();
        $(".btn-video-play").show();
    })

    // 파일 업로드 취소
    $(".btn-fileupload-undo").on("click", function(){
        $(".modal-fileupload-undo-wrapper").hide();

        // input file 초기화
        $("#input_imgs").val("");

        // swiper 초기화
        $(".file-upload-swiper .swiper-wrapper").html("");

        // header 변경
        $(".header-file h3").html("새 게시물 만들기");
        $(".header-file i").hide();
        $(".header-file button").hide();

        //body 변경
        $(".body-file__nofile-box").css("display", "flex")
        $(".file-upload-swiper").hide();
        $(".btn-fileupload-multi").hide();
    })

    // 파일 업로드 모달 닫기
    $(".btn-fileupload-undo-cancel").on("click", function(){
        $(".modal-fileupload-undo-wrapper").hide();
    })

    var sel_files = [];
    $("#input_imgs").on("change", handleImgsFilesSelect);

    function handleImgsFilesSelect(e) {
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);

        filesArr.forEach(function(f) {
            // 확장자 제한, input에서 accept 처리도 해둠
            if(f.type.match("image.*") || f.type.match("video.*")) {
                // do nothing
            }else{
                alert("확장자는 이미지 및 비디오만 사용가능합니다.");
                return;
            }

            sel_files.push(f);

            var reader = new FileReader();
            
            // swiper에 video. image 미리보기 슬라이드 추가
            reader.onload = function(e) {
                var img_html = "";

                if(f.type.includes("video")){
                    img_html += "<div class='swiper-slide'>";
                    img_html += "<video src=\"" + e.target.result + "\" /></video>"
                    img_html += `<i class="far fa-play-circle btn-video-play"></i>`;
                    img_html += `<i class="far fa-stop-circle btn-video-stop"></i>`;
                    img_html += `</div>`;
                }else if(f.type.includes("image")){
                    img_html += "<div class='swiper-slide'>"+"<img src=\"" + e.target.result + "\" />"+"</div>";
                }
                $(".file-upload-swiper > .swiper-wrapper").append(img_html);
            }
            reader.readAsDataURL(f);

            // header 변경
            $(".header-file h3").html("사진 추가");
            $(".header-file i.back-step1").css("display", "inline-flex");
            $(".header-file button.btn-fileupload-step1").css("display", "inline-flex");

            //body 변경
            $(".body-file__nofile-box").hide();
            $(".file-upload-swiper").show();
            $(".btn-fileupload-multi").css("display", "inline-flex");
        });
    }

    // 이모지
    $(document).on("click", ".btn-emoticon-icon", function(){

        let emojiDiv = `<div class="emoticon-wrapper">
                            <div class="emoticon-wrapper__best-emojis"> 
                                <h3>최고 인기 이모티콘</h3>
                                <span class="emoticon-item">😂</span>
                                <span class="emoticon-item">😮</span>
                                <span class="emoticon-item">😍</span>
                                <span class="emoticon-item">😢</span>
                                <span class="emoticon-item">👏</span>
                                <span class="emoticon-item">🔥</span>
                                <span class="emoticon-item">🎉</span>
                                <span class="emoticon-item">💯</span>
                                <span class="emoticon-item">❤️</span>
                                <span class="emoticon-item">🤣</span>
                                <span class="emoticon-item">🥰</span>
                                <span class="emoticon-item">😘</span>
                                <span class="emoticon-item">😭</span>
                                <span class="emoticon-item">😊</span>
                            </div>
                            <div class="emoticon-wrapper__smile-and-people"> 
                                <h3>웃는 얼굴 및 사람</h3>
                                <span class="emoticon-item">😀</span>
                                <span class="emoticon-item">😃</span>
                                <span class="emoticon-item">😄</span>
                                <span class="emoticon-item">😄</span>
                                <span class="emoticon-item">😄</span>
                                <span class="emoticon-item">😄</span>
                                <span class="emoticon-item">😄</span>
                                <span class="emoticon-item">😁</span>
                                <span class="emoticon-item">😆</span>
                                <span class="emoticon-item">😅</span>
                                <span class="emoticon-item">🤣</span>
                                <span class="emoticon-item">😂</span>
                                <span class="emoticon-item">🙂</span>
                                <span class="emoticon-item">🙃</span>
                                <span class="emoticon-item">😉</span>
                                <span class="emoticon-item">😊</span>
                                <span class="emoticon-item">😇</span>
                                <span class="emoticon-item">🥰</span>
                                <span class="emoticon-item">😍</span>
                                <span class="emoticon-item">🤩</span>
                                <span class="emoticon-item">😘</span>
                                <span class="emoticon-item">😗</span>
                                <span class="emoticon-item">😚</span>
                                <span class="emoticon-item">😙</span>
                                <span class="emoticon-item">😋</span>
                                <span class="emoticon-item">😛</span>
                                <span class="emoticon-item">😜</span>
                                <span class="emoticon-item">🤪</span>
                                <span class="emoticon-item">😝</span>
                                <span class="emoticon-item">🤑</span>
                                <span class="emoticon-item">🤗</span>
                                <span class="emoticon-item">🤭</span>
                                <span class="emoticon-item">🤫</span>
                                <span class="emoticon-item">🤔</span>
                                <span class="emoticon-item">🤐</span>
                                <span class="emoticon-item">🤨</span>
                                <span class="emoticon-item">😐</span>
                                <span class="emoticon-item">😑</span>
                                <span class="emoticon-item">😶</span>
                                <span class="emoticon-item">😏</span>
                                <span class="emoticon-item">😒</span>
                                <span class="emoticon-item">🙄</span>
                                <span class="emoticon-item">😬</span>
                                <span class="emoticon-item">🤥</span>
                                <span class="emoticon-item">😌</span>
                                <span class="emoticon-item">😔</span>
                                <span class="emoticon-item">😪</span>
                                <span class="emoticon-item">🤤</span>
                                <span class="emoticon-item">😴</span>
                                <span class="emoticon-item">😷</span>
                                <span class="emoticon-item">🤒</span>
                                <span class="emoticon-item">🤕</span>
                                <span class="emoticon-item">🤢</span>
                                <span class="emoticon-item">🤮</span>
                                <span class="emoticon-item">🤧</span>
                                <span class="emoticon-item">🥵</span>
                                <span class="emoticon-item">🥶</span>
                                <span class="emoticon-item">🥴</span>
                                <span class="emoticon-item">😵</span>
                                <span class="emoticon-item">🤯</span>
                                <span class="emoticon-item">🤠</span>
                                <span class="emoticon-item">🥳</span>
                                <span class="emoticon-item">😎</span>
                                <span class="emoticon-item">🤓</span>
                                <span class="emoticon-item">🧐</span>
                                <span class="emoticon-item">😕</span>
                                <span class="emoticon-item">😟</span>
                                <span class="emoticon-item">🙁</span>
                                <span class="emoticon-item">😮</span>
                                <span class="emoticon-item">😯</span>
                                <span class="emoticon-item">😲</span>
                                <span class="emoticon-item">😳</span>
                                <span class="emoticon-item">🥺</span>
                                <span class="emoticon-item">😦</span>
                                <span class="emoticon-item">😧</span>
                                <span class="emoticon-item">😨</span>
                                <span class="emoticon-item">😰</span>
                                <span class="emoticon-item">😥</span>
                                <span class="emoticon-item">😢</span>
                                <span class="emoticon-item">😭</span>
                                <span class="emoticon-item">😱</span>
                                <span class="emoticon-item">😖</span>
                                <span class="emoticon-item">😣</span>
                                <span class="emoticon-item">😞</span>
                                <span class="emoticon-item">😓</span>
                                <span class="emoticon-item">😩</span>
                                <span class="emoticon-item">😫</span>
                                <span class="emoticon-item">😤</span>
                                <span class="emoticon-item">😡</span>
                                <span class="emoticon-item">😠</span>
                                <span class="emoticon-item">🤬</span>
                                <span class="emoticon-item">😈</span>
                                <span class="emoticon-item">👿</span>
                                <span class="emoticon-item">💀</span>
                                <span class="emoticon-item">☠</span>
                                <span class="emoticon-item">💩</span>
                                <span class="emoticon-item">🤡</span>
                                <span class="emoticon-item">👹</span>
                                <span class="emoticon-item">👺</span>
                                <span class="emoticon-item">👻</span>
                                <span class="emoticon-item">👽</span>
                                <span class="emoticon-item">👾</span>
                                <span class="emoticon-item">🤖</span>
                                <span class="emoticon-item">😺</span>
                                <span class="emoticon-item">😸</span>
                                <span class="emoticon-item">😹</span>
                                <span class="emoticon-item">😻</span>
                                <span class="emoticon-item">😼</span>
                                <span class="emoticon-item">😽</span>
                                <span class="emoticon-item">🙀</span>
                                <span class="emoticon-item">😿</span>
                                <span class="emoticon-item">😾</span>
                                <span class="emoticon-item">💋</span>
                                <span class="emoticon-item">👋</span>
                                <span class="emoticon-item">🤚</span>
                                <span class="emoticon-item">🖐</span>
                                <span class="emoticon-item">✋</span>
                                <span class="emoticon-item">🖖</span>
                                <span class="emoticon-item">👌</span>
                                <span class="emoticon-item">👌</span>
                                <span class="emoticon-item">✌</span>
                                <span class="emoticon-item">🤞</span>
                                <span class="emoticon-item">🤟</span>
                                <span class="emoticon-item">🤘</span>
                                <span class="emoticon-item">🤙</span>
                                <span class="emoticon-item">👈</span>
                                <span class="emoticon-item">👉</span>
                                <span class="emoticon-item">👆</span>
                                <span class="emoticon-item">🖕</span>
                                <span class="emoticon-item">👇</span>
                                <span class="emoticon-item">☝</span>
                                <span class="emoticon-item">👍</span>
                                <span class="emoticon-item">👎</span>
                                <span class="emoticon-item">✊</span>
                                <span class="emoticon-item">👊</span>
                                <span class="emoticon-item">🤛</span>
                                <span class="emoticon-item">🤜</span>
                                <span class="emoticon-item">👏</span>
                                <span class="emoticon-item">🙌</span>
                                <span class="emoticon-item">👐</span>
                                <span class="emoticon-item">🤲</span>
                                <span class="emoticon-item">🤝</span>
                                <span class="emoticon-item">🙏</span>
                                <span class="emoticon-item">✍</span>
                                <span class="emoticon-item">💅</span>
                                <span class="emoticon-item">🤳</span>
                                <span class="emoticon-item">💪</span>
                                <span class="emoticon-item">🦵</span>
                                <span class="emoticon-item">🦶</span>
                                <span class="emoticon-item">👂</span>
                                <span class="emoticon-item">👃</span>
                                <span class="emoticon-item">🧠</span>
                                <span class="emoticon-item">🦷</span>
                                <span class="emoticon-item">🦴</span>
                                <span class="emoticon-item">👀</span>
                                <span class="emoticon-item">👁</span>
                                <span class="emoticon-item">👅</span>
                                <span class="emoticon-item">👄</span>
                                <span class="emoticon-item">👶</span>
                                <span class="emoticon-item">🧒</span>
                                <span class="emoticon-item">👦</span>
                                <span class="emoticon-item">👧</span>
                                <span class="emoticon-item">🧑</span>
                                <span class="emoticon-item">👱</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">🧔</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">👩</span>
                                <span class="emoticon-item">👱</span>
                                <span class="emoticon-item">🧓</span>
                                <span class="emoticon-item">👴</span>
                                <span class="emoticon-item">👵</span>
                                <span class="emoticon-item">🙍</span>
                                <span class="emoticon-item">🙍</span>
                                <span class="emoticon-item">🙎</span>
                                <span class="emoticon-item">🙅</span>
                                <span class="emoticon-item">🙆</span>
                                <span class="emoticon-item">💁</span>
                                <span class="emoticon-item">🙋</span>
                                <span class="emoticon-item">🙇</span>
                                <span class="emoticon-item">🤦</span>
                                <span class="emoticon-item">🤷</span>
                                <span class="emoticon-item">👨</span>
                                <span class="emoticon-item">👩</span>
                                <span class="emoticon-item">🕵</span>
                                <span class="emoticon-item">💂</span>
                                <span class="emoticon-item">👷</span>
                                <span class="emoticon-item">🤴</span>
                                <span class="emoticon-item">👸</span>
                                <span class="emoticon-item">👳</span>
                                <span class="emoticon-item">👲</span>
                                <span class="emoticon-item">🧕</span>
                                <span class="emoticon-item">🤵</span>
                                <span class="emoticon-item">👰</span>
                                <span class="emoticon-item">🤰</span>
                                <span class="emoticon-item">🤱</span>
                                <span class="emoticon-item">👼</span>
                                <span class="emoticon-item">🎅</span>
                                <span class="emoticon-item">🤶</span>
                                <span class="emoticon-item">🦸</span>
                                <span class="emoticon-item">🦸</span>
                                <span class="emoticon-item">🦹</span>
                                <span class="emoticon-item">🧙</span>
                                <span class="emoticon-item">🧙</span>
                                <span class="emoticon-item">🧚</span>
                                <span class="emoticon-item">🧛</span>
                                <span class="emoticon-item">🧜</span>
                                <span class="emoticon-item">🧝</span>
                                <span class="emoticon-item">🧞</span>
                                <span class="emoticon-item">🧟</span>
                                <span class="emoticon-item">💆</span>
                                <span class="emoticon-item">💇</span>
                                <span class="emoticon-item">🚶</span>
                                <span class="emoticon-item">🏃</span>
                                <span class="emoticon-item">💃</span>
                                <span class="emoticon-item">🕺</span>
                                <span class="emoticon-item">🕴</span>
                                <span class="emoticon-item">👯</span>
                                <span class="emoticon-item">🧖</span>
                                <span class="emoticon-item">🧖</span>
                                <span class="emoticon-item">🧘</span>
                                <span class="emoticon-item">👭</span>
                                <span class="emoticon-item">👫</span>
                                <span class="emoticon-item">👬</span>
                                <span class="emoticon-item">💏</span>
                                <span class="emoticon-item">💑</span>
                                <span class="emoticon-item">👪</span>
                                <span class="emoticon-item">🗣</span>
                                <span class="emoticon-item">👤</span>
                                <span class="emoticon-item">👥</span>
                                <span class="emoticon-item">👣</span>
                                <span class="emoticon-item">🧳</span>
                                <span class="emoticon-item">🌂</span>
                                <span class="emoticon-item">☂</span>
                                <span class="emoticon-item">🧵</span>
                                <span class="emoticon-item">🧶</span>
                                <span class="emoticon-item">👓</span>
                                <span class="emoticon-item">🕶</span>
                                <span class="emoticon-item">🥽</span>
                                <span class="emoticon-item">🥼</span>
                                <span class="emoticon-item">👔</span>
                                <span class="emoticon-item">👕</span>
                                <span class="emoticon-item">👖</span>
                                <span class="emoticon-item">🧣</span>
                                <span class="emoticon-item">🧤</span>
                                <span class="emoticon-item">🧥</span>
                                <span class="emoticon-item">🧦</span>
                                <span class="emoticon-item">👗</span>
                                <span class="emoticon-item">👘</span>
                                <span class="emoticon-item">👙</span>
                                <span class="emoticon-item">👚</span>
                                <span class="emoticon-item">👛</span>
                                <span class="emoticon-item">👜</span>
                                <span class="emoticon-item">👝</span>
                                <span class="emoticon-item">🎒</span>
                                <span class="emoticon-item">👞</span>
                                <span class="emoticon-item">👟</span>
                                <span class="emoticon-item">🥾</span>
                                <span class="emoticon-item">🥿</span>
                                <span class="emoticon-item">👠</span>
                                <span class="emoticon-item">👡</span>
                                <span class="emoticon-item">👢</span>
                                <span class="emoticon-item">👑</span>
                                <span class="emoticon-item">👒</span>
                                <span class="emoticon-item">🎩</span>
                                <span class="emoticon-item">🎓</span>
                                <span class="emoticon-item">🧢</span>
                                <span class="emoticon-item">⛑</span>
                                <span class="emoticon-item">💄</span>
                                <span class="emoticon-item">💍</span>
                                <span class="emoticon-item">💼</span>
                            </div>
                            <div class="emoticon-wrapper__animal-and-nature"> 
                                <h3>동물 및 자연</h3>
                                <span class="emoticon-item">🙈</span>
                                <span class="emoticon-item">🙉</span>
                                <span class="emoticon-item">🙊</span>
                                <span class="emoticon-item">💥</span>
                                <span class="emoticon-item">💫</span>
                                <span class="emoticon-item">💦</span>
                                <span class="emoticon-item">💨</span>
                                <span class="emoticon-item">🐵</span>
                                <span class="emoticon-item">🐒</span>
                                <span class="emoticon-item">🦍</span>
                                <span class="emoticon-item">🐶</span>
                                <span class="emoticon-item">🐕</span>
                                <span class="emoticon-item">🐩</span>
                                <span class="emoticon-item">🐺</span>
                                <span class="emoticon-item">🦊</span>
                                <span class="emoticon-item">🦝</span>
                                <span class="emoticon-item">🐱</span>
                                <span class="emoticon-item">🐈</span>
                                <span class="emoticon-item">🦁</span>
                                <span class="emoticon-item">🐯</span>
                                <span class="emoticon-item">🐅</span>
                                <span class="emoticon-item">🐆</span>
                                <span class="emoticon-item">🐴</span>
                                <span class="emoticon-item">🐎</span>
                                <span class="emoticon-item">🦄</span>
                                <span class="emoticon-item">🦓</span>
                                <span class="emoticon-item">🦌</span>
                                <span class="emoticon-item">🐮</span>
                                <span class="emoticon-item">🐂</span>
                                <span class="emoticon-item">🐃</span>
                                <span class="emoticon-item">🐄</span>
                                <span class="emoticon-item">🐷</span>
                                <span class="emoticon-item">🐖</span>
                                <span class="emoticon-item">🐗</span>
                                <span class="emoticon-item">🐽</span>
                                <span class="emoticon-item">🐏</span>
                                <span class="emoticon-item">🐑</span>
                                <span class="emoticon-item">🐐</span>
                                <span class="emoticon-item">🐪</span>
                                <span class="emoticon-item">🐫</span>
                                <span class="emoticon-item">🦙</span>
                                <span class="emoticon-item">🦙</span>
                                <span class="emoticon-item">🦒</span>
                                <span class="emoticon-item">🐘</span>
                                <span class="emoticon-item">🦏</span>
                                <span class="emoticon-item">🦛</span>
                                <span class="emoticon-item">🐭</span>
                                <span class="emoticon-item">🐁</span>
                                <span class="emoticon-item">🐀</span>
                                <span class="emoticon-item">🐹</span>
                                <span class="emoticon-item">🐰</span>
                                <span class="emoticon-item">🐇</span>
                                <span class="emoticon-item">🐿</span>
                                <span class="emoticon-item">🦔</span>
                                <span class="emoticon-item">🦇</span>
                                <span class="emoticon-item">🐻</span>
                                <span class="emoticon-item">🐨</span>
                                <span class="emoticon-item">🐼</span>
                                <span class="emoticon-item">🦘</span>
                                <span class="emoticon-item">🦡</span>
                                <span class="emoticon-item">🐾</span>
                                <span class="emoticon-item">🦃</span>
                                <span class="emoticon-item">🐔</span>
                            </div>
                        </div>`;
    
        if($(this).next().hasClass("emoticon-wrapper")){
            $(this).next().remove();
        }else{
            $(this).parent().append(emojiDiv);
        }
    })

    // 이모지 클릭 시 해당 이모지 textarea에 삽입
    $(document).on("click", ".emoticon-item", function(){
        let data = $(this).text();
        let dataTextArea = $(".modal-write-comment").val();
     
        $(".modal-write-comment").val(dataTextArea+data)
    })

    // textarea에 focus시 이모지 박스 닫기, 이건 개별 js로 넣는게 나을듯 
    $(".modal-write-comment").on("focus", function(){
        console.log("test")
        if($(this).prev().children(".emoticon-wrapper")){
            $(this).prev().children(".emoticon-wrapper").remove();
        }
    })

    // 스토리 모달 댓글 업로드
    $(".btn-comment-upload").on("click", function(){
        alert("로직")
        $(".modal-write-comment").val("");

        //이모지 닫기   
        if($(this).prev().prev().children(".emoticon-wrapper")){
            $(this).prev().prev().children(".emoticon-wrapper").remove();
        }
    })

});