<template>
  <section>
    <h1>Supercharging VueJS with CSS variables</h1>
    <span class="byline">By <span class="author">Terry Mun</span></span>

    <p>
      This is the home page that collects all the links to subpages demonstrationg how CSS
      variables can be used in the context of VueJS.
    </p>

    <ul class="tiled-navigation">
      <li class="tiled-navigation__item">
        <router-link to="/color-manipulation">Color manipulation</router-link>
      </li>
      <li class="tiled-navigation__item" style="--from-h: 167;">
        <router-link to="/icon-styling">Icon Styling</router-link>
      </li>
      <li class="tiled-navigation__item" style="--from-h: 117;">
        <router-link to="/layout">Layout</router-link>
      </li>
      <li class="tiled-navigation__item" style="--from-h: 67;">
        <router-link to="/pseudo-element-styling">Pseudo-element Styling</router-link>
      </li>
      <li class="tiled-navigation__item" style="--from-h: 37;">
        <router-link to="/themeing">Themeing</router-link>
      </li>
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

.tiled-navigation {
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: ($base-unit * 3) (-$base-unit);
  padding: 0;
}

.tiled-navigation__item {
  --from-h: 207;
  --from-s: 44%;
  --from-l: 49%;
  --to-h: calc(var(--from-h) - 30);
  --to-s: calc(var(--from-s) + 20%);
  --to-l: calc(var(--from-l) + 10%);

  margin: $base-unit;

  a {
    position: relative;
    display: block;
    padding: ($base-unit * 6) ($base-unit * 8);
    border-radius: $base-border-radius;
    background-image:
      linear-gradient(
        35deg,
        hsl(var(--from-h), var(--from-s), var(--from-l)),
        hsl(var(--to-h), var(--to-s), var(--to-l))
      );
    color: #eee;
    @include font($base-font-size--lg, $base-line-height--lg);
    font-weight: bold;
    opacity: 0.85;
    overflow: hidden;
    text-decoration: none;
    text-shadow: 0 0 4px rgba(#000, .25);
    transition: $base-transition;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
