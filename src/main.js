import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


const watchlist = [];
const selectedFilm = document.getElementById("cardIndex");

//logica per aggiungere alla watchlist
const element = document.getElementById("addWatchlist");
element.addEventListener("click", addToWatchList);

function addToWatchList() {
  document.getElementById("selectedFilm").watchlist.push("selectedFilm");
  return watchlist;
}

//logica rimozione dalla watchlist
const removeElement = document.getElementById("removeWatchlist");
removeElement.addEventListener("click", removeFromWatchList);

function removeFromWatchList() {
  const index = selectedFilm.indexOf(watchlist);
  if(index >= 0)
    selectedFilm.splice(index,1);
  else
      console.log("Houston, non abbiamo trovato il tuo film!"); // or better error handling ;-)
  return watchlist;
}