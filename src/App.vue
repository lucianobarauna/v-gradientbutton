<template lang="pug">
  div(id="app")
    // router-view
    GradientButton(customClass="classe-qualquer") Texto aqui dentro
</template>
<script>
import GradientButton from './components/GradientButton/GradientButton'
export default {
  components: {
    GradientButton
  }
}
</script>
<style lang="sass">
@import './assets/sass/vButtonGradient'
</style>
