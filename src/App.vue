<template lang="pug">
  div(id="app")
    Home
</template>

<script>
import Home from './components/Home/Home'

export default {
  name: 'app',
  components: {
    Home
  }
}
</script>

<style lang="sass">
  @import './assets/sass/v-gradientbutton'

  #app
    height: 100%
</style>
