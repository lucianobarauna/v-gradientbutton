<template lang="pug">
  button(
    :class='customClass'
    class='gradient-button'
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

<style lang="sass" scoped>
  @import './../../assets/sass/import/_extends.sass'
  @import './GradientButton.sass'
</style>
