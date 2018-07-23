<template lang="pug">
  button(
    :class='customClass'
    class='v-gradient-button'
    )
    div(
      class="gradient-button-wrap"
      :style="{ borderRadius: radiusSize, backgroundImage: gradientBorder, bottom: posBotom, left: posLeft, right: posRight, top: posTop}"
    )
    span.text
      slot

</template>

<script>
export default {
  name: 'GradientButton',
  data () {
    return {
      classButton: 'gradient-button'
    }
  },
  computed: {
  },
  props: {
    customClass: {
      type: String,
      default: function () {
        return 'default'
      }
    },
    radiusSize: {
      type: String,
      required: true
    },
    gradientBorder: {
      type: String,
      required: true
    },
    posTop: {
      type: String,
      required: true
    },
    posLeft: {
      type: String,
      required: true
    },
    posBotom: {
      type: String,
      required: true
    },
    posRight: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
  @import './../../assets/sass/import/_global.sass'

  .v-gradient
    &-button
      border: none
      position: relative
      .gradient-button-wrap
        content: ''
        position: absolute
        z-index: -1
      span.text
        z-index: 2
        color: #fff

      // Style default button
      &.default
        padding: 20px 100px
        color: #fff
        background-color: #000
        border-radius: 50px

</style>
