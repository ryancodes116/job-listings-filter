<template>
  <div class="card" :class="{leftBorder: job.featured}">
    <img :src="job.logo" :alt="job.company + logo" class="logo" />
    <div class="header">
      <p class="company">{{job.company}}</p>
      <div v-if="job.new" class="new">New!</div>
      <div v-if="job.featured" class="featured">Featured</div>
    </div>
    <h4 class="position">{{ job.position }}</h4>
    <div class="info">
      <p class="posted info-text">{{job.postedAt}}</p>
      <p class="contract info-text">{{job.contract}}</p>
      <p class="location info-text">{{job.location}}</p>
    </div>
    <hr class="line" />
    <div class="tags">
      <div @click="addToFilter" class="tag">{{job.role}}</div>
      <div @click="addToFilter" class="tag">{{job.level}}</div>
      <div @click="addToFilter" class="tag" v-for="tool in job.tools" :key="tool">{{tool}}</div>
      <div
        @click="addToFilter"
        class="tag"
        v-for="language in job.languages"
        :key="language"
      >{{language}}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Card",
  props: {
    job: Object
  },
  data: function() {
    return {
      filter: []
    };
  },
  methods: {
    ...mapActions(["addToFilter"])
  },
  computed: mapGetters(["allFilterTags"])
};
</script>

<style scoped>
.card {
  position: relative;
  background-color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 2.5rem 1.5rem 2rem;
  margin-bottom: 3.5rem;
  text-align: left;
}

.leftBorder {
  border-left: 6px solid hsl(180, 29%, 50%);
}

.logo {
  position: absolute;
  top: -10%;
  left: 5%;
  width: 15%;
  max-width: 55px;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.new,
.featured {
  text-transform: uppercase;
  color: #fff;
  font-weight: 700;
  border-radius: 0.9rem;
  padding: 0.3rem 0.6rem;
}

.company {
  margin-right: 1rem;
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  letter-spacing: 0.05rem;
}

.new {
  margin-right: 0.5rem;
  background: hsl(180, 29%, 50%);
}

.featured {
  background: #000;
}

.position {
  margin-bottom: 1rem;
  font-weight: 700;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-text {
  margin-right: 1rem;
  color: hsl(180, 8%, 52%);
}

.info-text:last-of-type {
  margin-right: 0;
}

.line {
  margin-bottom: 1rem;
  background: hsl(180, 8%, 52%);
  color: hsl(180, 8%, 52%);
}

.tags {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 1rem;
}

.tag {
  margin-right: 1rem;
  padding: 0.7rem 0.6rem;
  background: hsl(180, 31%, 95%);
  color: hsl(180, 29%, 50%);
  font-weight: 700;
  cursor: pointer;
}

.tag:last-of-type {
  margin-right: 0;
}

.tag:hover {
  opacity: 0.9;
}

/* Media Queries */
@media (min-width: 700px) {
  .logo {
    left: 3%;
  }
}

@media (min-width: 950px) {
  .logo {
    left: 2%;
  }
}
</style>