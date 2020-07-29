<template>
  <div class="cards container">
    <div class="filter" v-if="allFilterTags.length !== 0">
      <div class="filterTagsContainer">
        <div class="filterTag" v-for="tag in allFilterTags" :key="tag">
          <div class="tagName">{{ tag }}</div>
          <div class="x-btn">X</div>
        </div>
      </div>
      <p @click="fetchJobs" class="clear">Clear</p>
    </div>
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
    ...mapActions(["fetchJobs", "filterTags"])
  },
  computed: mapGetters(["allJobs", "allFilterTags"]),
  created() {
    this.fetchJobs();
  }
};
</script>

<style>
.filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 1.5rem 1.5rem;
  margin-bottom: 3rem;
}

.filterTagsContainer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.filterTag {
  display: flex;
  border-radius: 0.3rem;
  /* padding: 0.7rem 0.6rem; */
  background: hsl(180, 31%, 95%);
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  margin: 0 0.8rem 1rem 0;
}

.filterTag:last-of-type {
  margin-right: 0;
}

.tagName {
  padding: 0.7rem 0.6rem;
}

.x-btn {
  padding: 0.7rem 0.6rem;
  background: hsl(180, 29%, 50%);
  color: #fff;
  cursor: pointer;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.x-btn:hover {
  background: #000;
}

.clear {
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  cursor: pointer;
  margin-left: 1rem;
}
</style>
