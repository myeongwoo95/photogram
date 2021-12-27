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
    $('textarea').keyup(function(e) {
        $(this).css('height', 'auto');
        $(this).height(this.scrollHeight);
    });
    
    //Textarea onchange
    $('textarea').bind('input propertychange', function() {
    
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

});
