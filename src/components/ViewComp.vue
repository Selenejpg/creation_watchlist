<template>
    <div>
        <div v-for="info in movieInfo"
            :key="info.id">

            {{info.id}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'ViewComp',
        data() {
            return{
                movieInfo: [],
            }
        },
        mounted () {
            axios
                .get('https://api.themoviedb.org/3/movie/popular?api_key=12a60b0a52be8853f488359f4a303575&language=it-IT&page=1&include_adult=false&region=IT')
                .then(response => {
                    this.movieInfo = response.data.results
                    //console.log(response.data.results)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        methods: {
            confrontID(){
                var pageURL = window.location.href;
                console.log(pageURL);
                var idUrl = pageURL.substring(pageURL.lastIndexOf('/') + 1);
                console.log(idUrl);
                var idMovie = this.info.id;

                if (idUrl === idMovie) {
                    return idUrl;
                }
                
            },
            getObject(){
                const object = this.movieInfo.find(obj => obj.id === this.idUrl);
                console.log(object);
            }
        }
    }

    
</script>

<style scoped lang="scss">
/*Inserire style componente*/
</style>