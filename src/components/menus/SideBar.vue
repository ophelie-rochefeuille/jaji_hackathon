<template>

  <div class="list-div" v-for="data in getSoignants" :key="data.index">
{{data}}
  </div>

</template>
<script>
import { mapGetters} from 'vuex';

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
  created() {
    this.$store.dispatch("fetchSoignants");
  },
  watch: {
    month () {
      this.$store.dispatch("fetchSoignants")
    }
  },
  computed: {
    ...mapGetters([
      'getSoignants'
    ]),}
}

</script>
<style lang="css" scoped>

</style>