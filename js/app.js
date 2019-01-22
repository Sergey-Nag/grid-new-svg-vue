var app = new Vue({
  el: '#app',
  data: {
    windowSize: {
      height: 0
    },
    svgBox: {
      width: 1000,
      height: 1000,
      viewBox: {
        heigth: 0,
        width: 0,
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    appHeight: function () {
      this.windowSize.height = window.innerHeight - 30
    },
    svgBlock() {
      let svg = this.$refs.svg
      let main_b = this.$refs.main_menu
      this.svgBlock.height = main_b.offsetHeight
      this.svgBlock.width = main_b.offsetWidth
      console.log(this.$refs)
      svg.viewBox.baseVal = this.svgBox.viewBox
    }
  },
  created: function () {
    this.appHeight()
//    this.drawLines()
    window.addEventListener('resize', this.appHeight)
  },
  mounted: function() {
    this.svgBlock()
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.appHeight)
  }
})