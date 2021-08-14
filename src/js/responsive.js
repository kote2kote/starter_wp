const Responsive = {
  data() {
    return {
      bp: {
        tb: 520,
        pc: 960,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        wide: 1536,
        isMAXTB: false,
        isTB: false,
        isTBPC: false,
        isMAXPC: false,
        isPC: false,
        isMAXSM: false,
        isSM: false,
        isSMMD: false,
        isMAXMD: false,
        isMD: false,
        isMDLG: false,
        isMAXLG: false,
        isLG: false,
        isLGXL: false,
        isMAXXL: false,
        isXL: false,
        isXLWIDE: false,
        isMAXWIDE: false,
        isWIDE: false,
        isLand: false,
      },
      windowSizeX: 0,
    };
  },
  mounted() {
    this.setWindowSize();
    window.addEventListener('resize', this.setWindowSize);
    console.log('aa');
  },
  methods: {
    setWindowSize() {
      console.log('向きが変わった!');
      this.windowSizeX = window.innerWidth;
      this.resetWindowSize();
      this.bp.isLand = this.isPortraitBySize();

      // tb
      if (this.windowSizeX <= this.bp.tb - 1) {
        this.bp.isMAXTB = true;
      }
      if (this.windowSizeX >= this.bp.tb) {
        this.bp.isTB = true;
      }
      if (this.windowSizeX >= this.bp.tb && this.windowSizeX <= this.bp.pc - 1) {
        this.bp.isTBPC = true;
      }

      //pc
      if (this.windowSizeX <= this.bp.pc - 1) {
        this.bp.isMAXPC = true;
      }
      if (this.windowSizeX >= this.bp.pc) {
        this.bp.isPC = true;
      }

      // SM
      if (this.windowSizeX <= this.bp.sm - 1) {
        this.bp.isMAXSM = true;
      }
      if (this.windowSizeX >= this.bp.sm) {
        this.bp.isSM = true;
      }
      if (this.windowSizeX >= this.bp.sm && this.windowSizeX <= this.bp.md - 1) {
        this.bp.isSMMD = true;
      }

      // MD
      if (this.windowSizeX <= this.bp.md) {
        this.bp.isMAXMD = true;
      }
      if (this.windowSizeX >= this.bp.md) {
        this.bp.isMD = true;
      }
      if (this.windowSizeX >= this.bp.md && this.windowSizeX <= this.bp.lg - 1) {
        this.bp.isMDLG = true;
      }

      // LG
      if (this.windowSizeX <= this.bp.lg - 1) {
        this.bp.isMAXLG = true;
      }
      if (this.windowSizeX >= this.bp.lg) {
        this.bp.isLG = true;
      }
      if (this.windowSizeX >= this.bp.lg && this.windowSizeX <= this.bp.xl - 1) {
        this.bp.isLGXL = true;
      }

      // XL
      if (this.windowSizeX <= this.bp.xl - 1) {
        this.bp.isMAXXL = true;
      }
      if (this.windowSizeX >= this.bp.xl) {
        this.bp.isXL = true;
      }
      if (this.windowSizeX >= this.bp.xl && this.windowSizeX <= this.bp.wide - 1) {
        this.bp.isXLWIDE = true;
      }

      // WIDE
      if (this.windowSizeX <= this.bp.wide - 1) {
        this.bp.isMAXWIDE = true;
      }
      if (this.windowSizeX >= this.bp.wide) {
        this.bp.isWIDE = true;
      }
    },
    resetWindowSize() {
      this.bp.isMAXTB = false;
      this.bp.isTB = false;
      this.bp.isTBPC = false;
      this.bp.isMAXPC = false;
      this.bp.isPC = false;
      this.bp.isMAXSM = false;
      this.bp.isSM = false;
      this.bp.isSMMD = false;
      this.bp.isMAXMD = false;
      this.bp.isMD = false;
      this.bp.isMDLG = false;
      this.bp.isMAXLG = false;
      this.bp.isLG = false;
      this.bp.isLGXL = false;
      this.bp.isMAXXL = false;
      this.bp.isXL = false;
      this.bp.isXLWIDE = false;
      this.bp.isMAXWIDE = false;
      this.bp.isWIDE = false;
      this.bp.isLandscape = false;
    },
    isPortraitBySize() {
      var w = parseInt(
          window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
          10
        ),
        h = parseInt(
          window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
          10
        );
      // console.log(w, h);
      // if (w > h) {
      //   console.log("true");
      //   this.bp.isLandscape = true;
      // }
      console.log('向きが変わった！');
      console.log(w > h ? 'land' : 'port');
      return w > h;
    },
  },
};

Vue.createApp(Responsive).mount('.js_body');
// const compTestApp = Vue.createApp(Test)

// compTestApp.component('hello', {
//   props: ['word'],
//   template: `<p>{{ word }}</p>`
// })

// compTestApp.mount('.js--hello')

// <hello :word=message /> => <p>Hello</hello>

// const bp = {
//   tb: 520,
//   pc: 960,
//   sm: 640,
//   md: 768,
//   lg: 1024,
//   xl: 1280,
//   wide: 1536,
//   isMAXTB: false,
//   isTB: false,
//   isTBPC: false,
//   isMAXPC: false,
//   isPC: false,
//   isMAXSM: false,
//   isSM: false,
//   isSMMD: false,
//   isMAXMD: false,
//   isMD: false,
//   isMDLG: false,
//   isMAXLG: false,
//   isLG: false,
//   isLGXL: false,
//   isMAXXL: false,
//   isXL: false,
//   isXLWIDE: false,
//   isMAXWIDE: false,
//   isWIDE: false,
//   isLand: false,
// };

// const windowSizeX = 0;

// function setWindowSize() {
//   console.log('向きが変わった!');
//   windowSizeX = window.innerWidth;
//   resetWindowSize();
//   bp.isLand = isPortraitBySize();

//   // tb
//   if (windowSizeX <= bp.tb - 1) {
//     bp.isMAXTB = true;
//   }
//   if (windowSizeX >= bp.tb) {
//     bp.isTB = true;
//   }
//   if (windowSizeX >= bp.tb && windowSizeX <= bp.pc - 1) {
//     bp.isTBPC = true;
//   }

//   //pc
//   if (windowSizeX <= bp.pc - 1) {
//     bp.isMAXPC = true;
//   }
//   if (windowSizeX >= bp.pc) {
//     bp.isPC = true;
//   }

//   // SM
//   if (windowSizeX <= bp.sm - 1) {
//     bp.isMAXSM = true;
//   }
//   if (windowSizeX >= bp.sm) {
//     bp.isSM = true;
//   }
//   if (windowSizeX >= bp.sm && windowSizeX <= bp.md - 1) {
//     bp.isSMMD = true;
//   }

//   // MD
//   if (windowSizeX <= bp.md) {
//     bp.isMAXMD = true;
//   }
//   if (windowSizeX >= bp.md) {
//     bp.isMD = true;
//   }
//   if (windowSizeX >= bp.md && windowSizeX <= bp.lg - 1) {
//     bp.isMDLG = true;
//   }

//   // LG
//   if (windowSizeX <= bp.lg - 1) {
//     bp.isMAXLG = true;
//   }
//   if (windowSizeX >= bp.lg) {
//     bp.isLG = true;
//   }
//   if (windowSizeX >= bp.lg && windowSizeX <= bp.xl - 1) {
//     bp.isLGXL = true;
//   }

//   // XL
//   if (windowSizeX <= bp.xl - 1) {
//     bp.isMAXXL = true;
//   }
//   if (windowSizeX >= bp.xl) {
//     bp.isXL = true;
//   }
//   if (windowSizeX >= bp.xl && windowSizeX <= bp.wide - 1) {
//     bp.isXLWIDE = true;
//   }

//   // WIDE
//   if (windowSizeX <= bp.wide - 1) {
//     bp.isMAXWIDE = true;
//   }
//   if (windowSizeX >= bp.wide) {
//     bp.isWIDE = true;
//   }
// }

// function resetWindowSize() {
//   bp.isMAXTB = false;
//   bp.isTB = false;
//   bp.isTBPC = false;
//   bp.isMAXPC = false;
//   bp.isPC = false;
//   bp.isMAXSM = false;
//   bp.isSM = false;
//   bp.isSMMD = false;
//   bp.isMAXMD = false;
//   bp.isMD = false;
//   bp.isMDLG = false;
//   bp.isMAXLG = false;
//   bp.isLG = false;
//   bp.isLGXL = false;
//   bp.isMAXXL = false;
//   bp.isXL = false;
//   bp.isXLWIDE = false;
//   bp.isMAXWIDE = false;
//   bp.isWIDE = false;
//   bp.isLandscape = false;
// }

// function isPortraitBySize() {
//   var w = parseInt(
//       window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
//       10
//     ),
//     h = parseInt(
//       window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
//       10
//     );
//   // console.log(w, h);
//   // if (w > h) {
//   //   console.log("true");
//   //   this.bp.isLandscape = true;
//   // }
//   // console.log("向きが変わった！");
//   // console.log(w > h ? "land" : "port");
//   return w > h;
// }
