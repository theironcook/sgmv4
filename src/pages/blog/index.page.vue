<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">SaaSGlue Blog</h1>

      <div class="columns is-multiline">
        <div class="column is-3">
          <ArticleCard />
        </div>
        <div class="column is-3">
          <ArticleCard />
        </div>
        <div class="column is-3">
          <ArticleCard />
        </div>
        <div class="column is-3">
          <ArticleCard />
        </div>
        <div class="column is-3">
          <ArticleCard />
        </div>
        <div class="column is-3">
          <ArticleCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ArticleCard from './ArticleCard.vue';

export default defineComponent({
  name: 'Blog',
  components: { ArticleCard }
});
</script>
