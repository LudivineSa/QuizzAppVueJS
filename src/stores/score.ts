import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useScoreStore = defineStore('score', () => {
    const score = ref<number>(0);

    const setScore = (newScore: number) => {
        score.value = newScore;
    }
    
    return { score, setScore }
})