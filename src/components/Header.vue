<template>
  <div class="header">
    <img src="../assets/images/bg-header-mobile.svg" class="bg-image" />
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  width: 100%;
  background-color: hsl(180, 8%, 52%);
  margin-bottom: 4rem;
}

.bg-image {
  width: 100%;
  height: 100%;
}
</style>