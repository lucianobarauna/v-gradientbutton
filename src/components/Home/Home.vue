<template lang="pug">
  .wrap
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
import Anime from 'anime'
import GradientButton from './../GradientButton/GradientButton'
export default {
  name: 'Home',
  components: {
    GradientButton
  },
  mounted: function () {
    console.log('montou', Anime())
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
