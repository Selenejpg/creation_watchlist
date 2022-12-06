<template>
    <div>
        <div class="card" v-for="movie in movies"
            :key="movie.id">
            {{movie.title}}
            {{movie.release_date}}
            <img width="300" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
            <button v-show="!showButton(movie.id)" type="submit" @click="storeMovie(movie.id)">
                Aggiungi
            </button>
            <button v-show="showButton(movie.id)" type="submit" @click="removeMovie(movie.id)">
                Rimuovi
            </button>
            <router-link :to="`/viewmovie/${movie.id}`">
                Vai al film
            </router-link>
        </div>
        
        <div v-for="(favourite, index) in getItem"
        :key="index"
        class="card">
            {{favourite.title}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'HomeComp',
        data () {
            return {
                movies: [],
                watchlist: [],
                movie: null,
            }
        },
        computed: {
            getItem(){ 
                return JSON.parse(localStorage.getItem("watchlist"));
            }
        },
        mounted () {
            axios
                .get('https://api.themoviedb.org/3/movie/popular?api_key=12a60b0a52be8853f488359f4a303575&language=it-IT&page=1&include_adult=false&region=IT')
                .then(response => {
                    this.movies = response.data.results
                    // console.log(response.data.results)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        methods: {
            storeMovie(id) {
                const favouriteMovie = this.movies.find(movie => movie.id === id )
                
                this.watchlist.push(favouriteMovie);

                localStorage.setItem("watchlist", JSON.stringify(this.watchlist));

            },
            removeMovie(id) {
                const removedMovie = this.watchlist.find(movie => movie.id === id )
                const indexMovie = this.watchlist.indexOf(removedMovie);
                if (indexMovie > -1) { 
                   this.watchlist.splice(indexMovie, 1); 
                }

                localStorage.setItem("watchlist", JSON.stringify(this.watchlist));
            },
            showButton(id) {
                const favouriteMovie = this.watchlist.find(movie => movie.id === id )
                if (favouriteMovie) {
                    return true
                } else{
                    return false
                }
            },
        },
    }
</script>

<style scoped lang="scss">
/*Inserire style componente*/
</style>