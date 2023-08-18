import { ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  
  const categories = [
    {name: "TV / Cinéma", id: "tv_cinema"}, 
    {name: "Art et litterature", id: "art_litterature"}, 
    {name: "Musique", id: "musique"}, 
    {name: "Actualités et politique", id: "actu_politique"}, 
    {name: "Culture générale", id: "culture_general"}, 
    {name: "sport", id: "sport"}, 
    {name: "Jeux vidéos", id: "jeux_videos"}
  ];
  
  const selectedTheme = ref<string | null>(null);
  const questions = ref<any>(null);

  const selectATheme = (theme : string) => {
    selectedTheme.value = theme;
  }

  watch(selectedTheme, (theme) => {
    if(theme) {
      fetch(`https://quizzapi.jomoreschi.fr/api/v1/quiz?limit=5&${theme}&difficulty=normal`)
      .then(response => response.json())
      .then(data => {
        questions.value = data.quizzes;
      })
    }
  })

  return { categories, selectedTheme, selectATheme, questions }

})
