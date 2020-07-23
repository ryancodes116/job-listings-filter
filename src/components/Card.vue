<template>
  <div class="card">{{ job.position }}</div>
</template>

<script>
export default {
  name: "Card",
  props: {
    job: Object
  }
};
</script>

<style>
.card {
  background-color: #fff;
  border: none;
  border-left: 6px solid hsl(180, 29%, 50%);
  border-radius: 0.3rem;
  padding: 2rem 1rem;
  margin-bottom: 2.5rem;
  text-align: left;
}
</style>