<template>
  <trend
    :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
    :gradient="[ '#ff7575', '#576fff','#f66b1c']"
    auto-draw
    smooth
  ></trend>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "./Graph.scss";
</style>
