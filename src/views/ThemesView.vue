<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useThemeStore } from '../stores/theme';

const themeStore = useThemeStore();
const router = useRouter();

const selectTheme = (id: string) => {
    themeStore.selectATheme(id);
    router.push('/quizz');
}
</script>

<template>
    <div class="container">
        <h1>Choisissez un thème</h1>
        <div class="themes">
            <div v-for="category in themeStore.categories" :key="category.id" >
                <button type="button" @click="() => selectTheme(category.id)">{{ category.name }}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.themes {
    display: flex;
    gap: 2rem;
    justify-content: center;
    margin: 0 auto;
    margin-top: 3rem;
    flex-wrap: wrap;
}

.container {
    max-width: 1200px;
    margin: 5rem auto;
}
</style>