import { termeklista } from "./termeklista.js";

export default class Tarolo {
    static #kulcs = "webaruhaz_termekek";

    static getTermekek() {
        const mentett = localStorage.getItem(Tarolo.#kulcs);
        if (mentett === null) {
            Tarolo.mentTermekek(termeklista);
            return [...termeklista];
        }
        return JSON.parse(mentett);
    }

    static mentTermekek(lista) {
        localStorage.setItem(Tarolo.#kulcs, JSON.stringify(lista));
    }

    static addTermek(termek) {
        const lista = Tarolo.getTermekek();
        let maxId = 0;
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id > maxId) maxId = lista[i].id;
        }
        termek.id = maxId + 1;
        lista.push(termek);
        Tarolo.mentTermekek(lista);
        return termek;
    }

    static removeTermek(id) {
        const lista = Tarolo.getTermekek();
        const ujLista = [];
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].id !== id) ujLista.push(lista[i]);
        }
        Tarolo.mentTermekek(ujLista);
    }

    static reset() {
        localStorage.removeItem(Tarolo.#kulcs);
    }
}