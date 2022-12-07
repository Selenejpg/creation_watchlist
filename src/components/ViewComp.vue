<template>
    <div>
        <img width="300" :src="`https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`" alt="">
        <br>
        {{movieInfo.title}}
        <br>
        {{movieInfo.tagline}}
        <br>
        {{movieInfo.overview}}
        <br>
        {{movieInfo.release_date}}
        <br>
        {{movieInfo.original_language}}

        
        
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'ViewComp',
        data() {
            return{
               movieInfo: "", 
            }
        },
        mounted () {
            axios
                .get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=12a60b0a52be8853f488359f4a303575&language=it-IT`)
                .then(response => {
                    this.movieInfo = response.data   
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
    }

    
</script>

<style scoped lang="scss">
/*Inserire style componente*/
</style>