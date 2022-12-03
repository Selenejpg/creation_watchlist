<template>
    <body>
        <nav class="navbar navbar-expand-lg custom-nav">
            <div class="container-fluid p-3">
                <div class="d-flex align-items-center">
                    <img class="ms-2" src="../assets/star-icon.webp" alt="star icon" width="35" height="35">
                    <a class="navbar-brand text-light ms-3 fw-bold fs-4" href="#">Creation Watchlist</a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link text-light fs-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link text-light fs-5" href="#">Watchlist</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </body>
</template>

<script>
    export default {
    //Cambiare il nome con quello del componente creato
    name: 'HeaderComp',
    }
</script>

<style scoped lang="scss">

</style>