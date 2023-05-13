<template>
  <article class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*x1rQnsmCo0DQZzYA3pGTfg.png" alt="Image">
      </figure>
    </div>
    <header class="card-header">
      <h2 class="card-header-title is-size-5 mb-0">
        <a href="">Time for a Change: Manage and Monitor Your Cron Jobs in the Cloud with SaaSGlue</a>
      </h2>
    </header>

    <div class="card-content">
      <div class="mb-3">
        <span class="tag is-primary">Cron</span>
      </div>
      <p class="mb-3">This article will describe how to import your Cron jobs to SaaSGlue in five minutes or less. To see how it works in action...</p>
      <p class="is-flex is-align-items-center is-justify-content-start">
        <span class="mr-3 has-text-weight-bold">Richard Wood</span>
        <time datetime="2022-10-29">Oct 29, 2022</time>
      </p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArticleCard'
});
</script>

<style scoped>
  .card-image figure {
    margin-right: 0;
    margin-left: 0;
  }
</style>