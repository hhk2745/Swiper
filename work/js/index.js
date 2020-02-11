
class SwiperClass {
    constructor(){

        let param = {
            // Optional parameters
            // direction: 'vertical',
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

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            }

            , autoHeight:true
            // Tranisition effect. Could be "slide", "fade", "cube", "coverflow" or "flip"
            // , effect: 'cube'

            // slide 시작 위치
            , initialSlide: 0

            // 슬라이드 간격
            , spaceBetween:500
        };

        this.mySwiper = new Swiper('.swiper-container', param);
        this.realIndex();
        this.slideChangeTransition();
    }


    realIndex(){
        console.log(this.mySwiper.realIndex, '> this.realIndex');
    }

    slideChangeTransition(){

        this.mySwiper.on('slideChangeTransitionStart', ()=>{
            console.log('slideChangeTransitionStart');
            const idx = this.mySwiper.activeIndex;
            console.log($(this.mySwiper.slides[idx]), '> $(this.mySwiper.slides[idx])', idx, '> idx');


            let $nowSlide = $(this.mySwiper.slides[idx]);
            console.log($($nowSlide).data(), '> $($nowSlide).data()')


        });

        this.mySwiper.on('slideChangeTransitionEnd', function () {
            console.log('slideChangeTransitionEnd');
        }.bind(this));
    }

}

$(()=>{
    new SwiperClass();
});