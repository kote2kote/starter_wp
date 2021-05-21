console.log('hello');

// ==================================================
// Hero レスポンシブメニュー開閉
// ==================================================
const a = new Vue({
  el: '.Hero',
  data: {
    isOpen: false,
    isSubOpen: false,
  },
});

// ==================================================
// PickUp swiper
// ==================================================
const b = new Vue({
  el: '.PickUp',
  data: {
    // isOpen: false,
    // isSubOpen: false,
  },
  mounted() {
    //
    console.log('pickup');
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 6,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        520: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
      },
    });
  },
});

const c = new Vue({
  el: '.AboutScene',
  data: {
    flagAboutTab: true,
    flagAboutTabContent: true,
    flagSceneTab: false,
    flagSceneTabContent: false,
  },
  mounted() {
    const rellax = new Rellax('.rellax');
  },
  methods: {
    changeTabs(flag) {
      console.log('test');
      if (flag) {
        this.flagAboutTab = true;
        this.flagAboutTabContent = true;
        this.flagSceneTab = false;
        this.flagSceneTabContent = false;
      } else {
        this.flagAboutTab = false;
        this.flagAboutTabContent = false;
        this.flagSceneTab = true;
        this.flagSceneTabContent = true;
      }
    },
  },
});
