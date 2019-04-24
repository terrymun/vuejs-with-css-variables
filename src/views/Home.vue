<template>
  <div class="home">
    <h1>VueJS + CSS variables</h1>
    <span class="byline">By Terry Mun</span>

    <p>
      This is the home page that collects all the links to subpages demonstrationg how CSS
      variables can be used in the context of VueJS.
    </p>

    <ul>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  name: 'Home',
})
export default class Home extends Vue {}
</script>
