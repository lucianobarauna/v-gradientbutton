<template lang="pug">
  div(id="app")
    GradientButton(
      posTop="-10px",
      posLeft="-10px",
      posBotom="-10px",
      posRight="-10px",
      radiusSize="50px",
      gradientBorder= "linear-gradient(45deg, #ff0, #f0f, #f00, #00f, #0f0)"
    ) Lorem ipsum
</template>

<script>
import GradientButton from './components/GradientButton/GradientButton'

export default {
  name: 'app',
  components: {
    GradientButton
  }
}
</script>

<style lang="scss">
@import './assets/sass/v-gradientbutton'
</style>
