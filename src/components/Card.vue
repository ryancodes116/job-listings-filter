<template>
  <div class="card">
    <img :src="job.logo" :alt="job.company + logo" class="logo" />
    <div class="header">
      <p class="company">{{job.company}}</p>
      <div v-if="job.new" class="new">New</div>
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
      <div class="tag">{{job.role}}</div>
      <div class="tag">{{job.level}}</div>
      <div class="tag" v-for="language in job.languages" :key="language">{{language}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    job: Object
  }
};
</script>

<style scoped>
.card {
  position: relative;
  background-color: #fff;
  border: none;
  border-left: 6px solid hsl(180, 29%, 50%);
  border-radius: 0.3rem;
  padding: 2.5rem 1.5rem 2rem;
  margin-bottom: 3.5rem;
  text-align: left;
}

.logo {
  position: absolute;
  top: -15%;
  left: 5%;
  width: 15%;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.company,
.new {
  margin-right: 1rem;
}

.new,
.featured {
  text-transform: uppercase;
}

.position {
  margin-bottom: 1rem;
}

.info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-text {
  margin-right: 1rem;
}

.info-text:last-of-type {
  margin-right: 0;
}

.line {
  margin-bottom: 1rem;
}

.tags {
  display: flex;
  align-items: center;
}

.tag {
  margin-right: 1rem;
}

.tag:last-of-type {
  margin-right: 0;
}
</style>