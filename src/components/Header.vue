<template>
  <div class="header">
    <img src="../assets/images/bg-header-mobile.svg" class="bg-image-mobile" />
    <img src="../assets/images/bg-header-desktop.svg" class="bg-image-desktop" />
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
  max-height: 185px;
}

.bg-image-mobile,
.bg-image-desktop {
  width: 100%;
  height: 100%;
}

.bg-image-desktop {
  display: none;
}

/* Media Queries */
@media (min-width: 990px) {
  .bg-image-mobile {
    display: none;
  }

  .bg-image-desktop {
    display: block;
  }
}
</style>