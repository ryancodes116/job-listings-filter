<template>
  <div class="cards container">
    <Card v-for="job in allJobs" :key="job.id" :job="job" />
  </div>
</template>

<script>
import Card from "./Card.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cards",
  components: {
    Card
  },
  methods: {
    ...mapActions(["fetchJobs"])
  },
  computed: mapGetters(["allJobs"]),
  created() {
    this.fetchJobs();
  }
};
</script>

<style></style>
