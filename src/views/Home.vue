<template>
  <section>
    <h1>VueJS + CSS variables</h1>
    <span class="byline">By <span class="author">Terry Mun</span></span>

    <p>
      This is the home page that collects all the links to subpages demonstrationg how CSS
      variables can be used in the context of VueJS.
    </p>

    <ul>
      <li><router-link to="/icon-styling">Icon Styling</router-link></li>
      <li><router-link to="/themeing">Themeing</router-link></li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Home',
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.author {
  color: var(--app-link-color);
  font-weight: bold;
}
</style>
