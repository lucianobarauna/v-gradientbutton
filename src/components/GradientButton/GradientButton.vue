<template lang="pug">
  button(
    :class='customClass'
    class='gradient-button'
    )
    span(class="gradient-button-wrap")
      slot

</template>

<script>
export default {
  name: 'GradientButton',
  data: () => {
    return {
      classButton: 'gradient-button'
    }
  },
  props: {
    customClass: {
      type: String,
      default: function () {
        return 'default'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
  @import './../../assets/sass/import/_extends.sass'
  @import './GradientButton.sass'
</style>
