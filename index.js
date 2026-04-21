import Kosar from "./Kosar.js";
import Termekek from "./Termekek.js";

document.addEventListener("DOMContentLoaded", () => {
    const termekListaElem = document.getElementById("termekLista");

    const kosar = new Kosar();
    const termekek = new Termekek(termekListaElem, kosar);
});
