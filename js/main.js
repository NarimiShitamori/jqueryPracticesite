$(function(){

    //TOPスライダー
    $('.slideshow').each(function(){
        var $slides = $(this).find('img'), 
            slideCount = $slides.length,   
            currentIndex = 0;             
            $slides.eq(currentIndex).fadeIn();
            setInterval(showNextSlide, 5500);
            
        function showNextSlide () {
            var nextIndex = (currentIndex + 1) % slideCount;
            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            currentIndex = nextIndex;
            }
    });
    
    //articleの部分
    var duration = 300;
    var $images = $('.topics-list p')

    $images.on('mouseover',function(){
        $(this).find('img').stop(true).animate({
            opacity: '0.5',
        }, duration );
    })
    $images.on('mouseout',function(){
        $(this).find('img').stop(true).animate({
            opacity:'1'
        },duration);
    });
    $('.fadein').hide().fadeIn(5000);


    //スティッキーヘッダー
    $('.page-header').each(function(){
        var $window = $(window),
            $header = $(this),
            headerOffsetTop = $header.offset().top; //ドキュメントの上からの位置を取得

            $window.on('scroll',function(){
                if($window.scrollTop() > headerOffsetTop){ //.scrollTop()はスクロール値を取得
                    $header.addClass('sticky');
                }else{
                    $header.removeClass('sticky');
                }
            });

            $window.trigger('scroll');
    });

    //タブ
    $('#work').each(function () {

        // タブの各要素を jQuery オブジェクト化
        var $tabList    = $(this).find('.tabs-nav'),   // タブのリスト
            $tabAnchors = $tabList.find('a'),          // タブ (リンク)
            $tabPanels  = $(this).find('.tabs-panel'); // パネル

        // タブがクリックされたときの処理
        // 引数としてイベントオブジェクトを受け取る
        $tabList.on('click', 'a', function (event) {

            // リンクのクリックに対するデフォルトの動作をキャンセル
            event.preventDefault();

            // クリックされたタブを jQuery オブジェクト化
            var $this = $(this);

            // もしすでに選択されたタブならなにもせず処理を中止
            if ($this.hasClass('active')) {
                return;
            }

            // すべてのタブの選択状態をいったん解除し、
            // クリックされたタブを選択状態に
            $tabAnchors.removeClass('active');
            $this.addClass('active');

            // すべてのパネルをいったん非表示にし、
            // クリックされたタブに対応するパネルを表示
            $tabPanels.hide();
            $($this.attr('href')).show();

        });

        // 最初のタブを選択状態に
        $tabAnchors.eq(0).trigger('click');

    });

});

