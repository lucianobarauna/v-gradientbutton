<template lang="pug">
  .wrap
    h2.title v-gradientbutton
    GradientButton(
      posTop="-10px",
      posLeft="-10px",
      posBotom="-10px",
      posRight="-10px",
      radiusSize="80px",
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
      targets: '.title',
      color: [
        {value: '#5ec3e1'},
        {value: 'rgba(79, 192, 141, 1)'},
        {value: '#95408e'}
      ],
      easing: 'easeOutQuad',
      duration: 1000,
      loop: true
    })
  }
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
      padding-left: 80px
      padding-right: 80px
      height: 90px
      background-color: #fff
      border-radius: 50px
      font-size: 40px
      .text
        color: rgba(79, 192, 141, 1)
</style>
