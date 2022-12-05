<template>
    <div>
        <div class="card" v-for="movie in movies"
            :key="movie.id">
            {{movie.title}}
            {{movie.release_date}}



        </div>
        <button onclick="addToWatchList()" id="addWatchlist">
            Aggiungi
        </button>
        <button id="removeWatchlist">
            Rimuovi
        </button>
        <button id="viewWatchlist">
            Visualizza
        </button>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
    //Cambiare il nome con quello del componente creato
        name: 'HomeComp',
        data () {
            return {
                movies: [],
                
            }
        },
        mounted () {
            axios
                .get('https://api.themoviedb.org/3/movie/popular?api_key=12a60b0a52be8853f488359f4a303575&language=it-IT&page=1&include_adult=false&region=IT')
                .then(response => {
                    this.movies = response.data.results
                    console.log(response.data.results)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        computed: {
            sortedItems: function() {
                this.movies.sort( ( a, b) => {
                    return new Date(a.release_date) - new Date(b.release_date);
                });
                return this.movies;
            }
        }, 
    }
</script>

<style scoped lang="scss">
/*Inserire style componente*/
</style>