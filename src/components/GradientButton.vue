<template lang="pug">
  button(
      class='v-gradient-button'
      :class='customClass'
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
.v-gradient-button
  border: none
  position: relative
  .gradient-button-wrap
    position: absolute
    z-index: -1
  span.text
    z-index: 2

  &.default
    background-color: #fff
    border-radius: 50px
    color: #000
    font-size: 20px
    padding: 20px 100px

</style>
