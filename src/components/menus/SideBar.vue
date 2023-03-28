<template>

  <h1>TEST</h1>
  <p>{{test}}</p>

  {{title}}



</template>
<script>

export default {
  components: {},
  props: {
    title: {
      type: String
    },
    array: []
  },
  methods: {
  },
  data() {
    return {
      test: "test",
    };
  },
}

</script>
<style lang="css" scoped>

</style>