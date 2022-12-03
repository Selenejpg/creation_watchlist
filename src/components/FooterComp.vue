<template>
    <footer>
        <div>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Non hai un account? Registrati qui.</a>
        </div>
    </footer>
</template>

<script>
    export default {
    //Cambiare il nome con quello del componente creato
    name: 'FooterComp',
    }
</script>

<style scoped lang="scss">
@import '../sass/breakpoint.scss';
@import '../sass/variables.scss';

    footer{
        margin-top: 20px;
        margin-bottom: 50px;
        text-align: center;
        font-size: 14px;
        @include tablet-min{
            margin-top: 40px;
            font-size: 16px;
        }
        a{
            text-decoration: none;
            color: gray;
        }
    }
</style>