<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">SaaSGlue Blog</h1>

      <div class="columns is-multiline">
        <div class="column is-3">
          <ArticleCard articleUrl="/blog/time-for-a-change-manage-and-monitor-your-cron-jobs-in-the-cloud-with-saasglue" author="Richard Wood" :createdDate="new Date(2022, 9, 22)">
            <template #image>
              <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*x1rQnsmCo0DQZzYA3pGTfg.png" alt="Image" />
            </template>
            <template #title>
              Time for a Change: Manage and Monitor Your Cron Jobs in the Cloud with SaaSGlue
            </template>
            <template #description>
              This article will describe how to import your Cron jobs to SaaSGlue in five minutes or less. To see how it works in action
            </template>
            <template #tags>
              <span class="tag is-primary">Cron</span>
            </template>
          </ArticleCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ArticleCard from '../ArticleCard.vue';

export default defineComponent({
  name: 'Blog',
  components: { ArticleCard }
});
</script>
