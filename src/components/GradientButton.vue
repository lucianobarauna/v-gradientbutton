<template lang="pug">
  button(
      class='v-gradientbtn'
      :class='customClass'
    )
    div(
      class="v-gradientbtn-wrap"
      :style="{ borderRadius: radiusSize, backgroundImage: gradientBorder, bottom: posBotom, left: posLeft, right: posRight, top: posTop, position: absolute}"
    )
    span(
      class="text"
      :style="{zIndex: 2}"
    )
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

.default
  background-color: #fff
  border-radius: 50px
  color: #fff
  font-size: 20px
  padding: 20px 50px
  height: 70px

</style>
