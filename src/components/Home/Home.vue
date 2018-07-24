<template lang="pug">
  .wrap
    svg(width="140" height="140" viewBox="0 0 140 140")
      g(fill="none" fill-rule="evenodd")
        polygon(class="polymorph" stroke-width="1" stroke="currentColor" points="70 26.1171447029895 119.44946207629474 60.24446207629474 101.5149171607579 119.49906885557897 52.10037923705264 99.51385529701051 5.543144702989499 55.116227542231584")
    h2.title v-gradientbutton
    GradientButton(
      posTop="-10px",
      posLeft="-10px",
      posBotom="-10px",
      posRight="-10px",
      radiusSize="50px",
      customClass="btn-demo"
      gradientBorder= "linear-gradient(45deg, #5ec3e1, #95408e)"
    ) Components + CSS = ❤️
</template>

<script>

import GradientButton from './../GradientButton/GradientButton'
export default {
  name: 'Home',
  components: {
    GradientButton
  },
  mounted () {
    this.$anime({
      targets: '.polymorph',
      points: [
        { value: '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369' },
        { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
        { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
        { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
      ],
      easing: 'easeOutQuad',
      duration: 2000,
      loop: true
    })
  }
  // mounted: () => {
  //   Anime({
  //     targets: '.wrap',
  //     translateX: 500
  //   })
  // }
}
</script>

<style lang="sass">
  .wrap
    display: flex
    justify-content: center
    align-items: center
    flex-flow: column
    height: 100%
    .title
      margin-bottom: 40px
      font-size: 42px
    .btn-demo
      padding-left: 40px
      padding-right: 40px
      height: 80px
      background-color: #fff
      border-radius: 50px
      font-size: 22px
      .text
        color: #4fc08d
</style>
