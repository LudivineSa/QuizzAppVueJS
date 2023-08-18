<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToTheme = () => {
  router.push('/themes');
};

</script>

<template>
  <div class="home">
    <h1> Quizz en ligne </h1>
    <button type="button" @click="navigateToTheme">Commencer maintenant</button>
  </div>
</template>

<style scoped>
  .home{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 4rem;
  }
</style>
