<template>
    <body class="login-body">
        <div class="login-cont">
            <div class="left-container">
                <img class="astronaut-star" src="../assets/3700_5_07.jpg" alt="astronaut with star">
            </div>
            <div class="right-container">
                <div class="login-text">
                    <h2 class="login-title">Ciao astronauta!</h2>
                    <p class="login-par">Effettua il login per poter accedere alla tua watchlist.</p>
                    <p class="login-par">Scegli da una lista in costante aggiornamento cosa vorresti vedere e salva le tue serie per non dimenticartene mai!</p>
                </div>
                <div class="cont-form">
                    <form action="">
                        <label class="label-email" for="email">Email</label>
                        <input class="email" type="email">
                        <label class="label-password" for="password">Password</label>
                        <input class="password" type="password">
                        <button class="button-submit" type="submit">Login</button>
                    </form>  
                </div>
            </div>
        </div>
    </body>
</template>

<script>
    export default {
    //Cambiare il nome con quello del componente creato
    name: 'LoginComp',
    }
</script>

<style scoped lang="scss">
/*Inserire style componente*/
</style>