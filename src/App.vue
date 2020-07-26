<template>
  <div id="app">
    <Header />
    <Cards />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Cards from "./components/Cards.vue";
export default {
  name: "App",
  components: {
    Header,
    Cards
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Spartan", sans-serif;
  font-weight: 500;
}

img {
  max-width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: hsl(180, 52%, 96%);
  font-size: 15px;
}

.container {
  width: 85%;
  margin: 0 auto;
}

/* Media Queries */
@media (min-width: 990px) {
  .container {
    width: 75%;
    margin: 0 auto;
  }
}
</style>
