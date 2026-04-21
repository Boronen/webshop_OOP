# Webáruház OOP Projekt

## Csapattagok
- Kovács Kevin

## Projektszöveg
Webáruház OOP projekt, amely egy Single Page alkalmazást implementál
terméklistával, kosár funkcióval, szűrési és keresési lehetőségekkel.

## Drótváz

```
+-------------------------------------------------------------+
|                       WEBÁRUHÁZ                             |
+-------------------------------------------------------------+
| [ Keresés terméknév...     ] [Keres]   [ Kategória ▼ ]      |
+-------------------------------------------------------------+
|  Terméklista                              | Kosár           |
|  +----------+ +----------+ +----------+   | +-------------+ |
|  | Termék 1 | | Termék 2 | | Termék 3 |   | | Termék A    | |
|  | leírás   | | leírás   | | leírás   |   | | 200 Ft x 2  | |
|  | 1000 Ft  | | 2000 Ft  | | 3000 Ft  |   | | [-] 2 [+] X | |
|  | [Kosárba]| | [Kosárba]| | [Kosárba]|   | +-------------+ |
|  +----------+ +----------+ +----------+   | | Termék B    | |
|                                           | | 500 Ft x 1  | |
|  +----------+ +----------+ +----------+   | | [-] 1 [+] X | |
|  | Termék 4 | | Termék 5 | | Termék 6 |   | +-------------+ |
|  +----------+ +----------+ +----------+   |                 |
|                                           | Összesen: 900 Ft|
+-------------------------------------------------------------+
```

### Elrendezés
- **Fejléc**: Webáruház cím
- **Keresés és szűrés**: keresőmező + gomb, kategória legördülő
- **Terméklista**: Bootstrap grid (8 kolumnás), kártyák névvel,
  leírással, árral, kategóriával és „Kosárba" gombbal
- **Kosár**: jobb oldalt rögzített doboz, kosárelemek mennyiség-állítóval
  és törlés gombbal, alul a végösszeg

## UML Osztálydiagram

```
+----------------------+        +----------------------+        +-------------------------------+
|       Termek         |        |      KosarItem       |        |            Kosar              |
+----------------------+        +----------------------+        +-------------------------------+
| - #obj: object       |        | - #termek: Termek    |        | - #items: KosarItem[]         |
+----------------------+        | - #darab: number     |        | - #kosarElem: HTMLElement     |
| + get id             |   1    +----------------------+    *   | - #osszegElem: HTMLElement    |
| + get nev            |<-------| + get termek         |<-------+-------------------------------+
| + get ar             |        | + get/set darab      |        | + addItem(t: Termek): void    |
| + get kategoria      |        | + get totalPrice     |        | + removeItem(id: number): void|
| + get leiras         |        +----------------------+        | + updateQuantity(id, db): void|
| + getObj()           |                                        | + get totalPrice              |
| + megjelenit(sz)     |                                        | + megjelenit(): void          |
+----------------------+                                        | + frissit(): void             |
                                                                | + eventhandle(): void         |
                                                                +-------------------------------+

+----------------------+
|      Termekek        |
+----------------------+
| - #lista: Termek[]   |
| - #kosar: Kosar      |
| - #szuloElem         |
+----------------------+
| + getLista()         |
| + megjelenit(l): void|
| + frissit(): void    |
| + eventhandle(): void|
+----------------------+
```

## Fájlszerkezet
- `index.html` – belépési pont, Bootstrap layout
- `index.js` – összerakja az osztályokat
- `termeklista.js` – termékadatok (nyers objektumok)
- `Termek.js` – egy termék osztálya, megjelenít egy kártyát
- `Termekek.js` – terméklista, keresés, szűrés
- `KosarItem.js` – egy kosárelem (termék + darabszám)
- `Kosar.js` – kosár modell + megjelenítés + események

## Funkciók
- Terméklista megjelenítése
- Termékek keresése név alapján (gomb vagy Enter)
- Termékek szűrése kategória alapján
- Keresés és szűrés egyszerre is működik
- Termékek hozzáadása a kosárhoz
- Termékek törlése a kosárból
- Termékek mennyiségének módosítása a kosárban (+ / − gomb)
- Ugyanazt a terméket újra kosárba téve a darabszám nő (nem duplikálódik)
- Kosár összértékének automatikus kiszámítása

## Használat
1. Indíts egy egyszerű webszervert a mappában
   (pl. `npx serve`, `python -m http.server`, vagy a VS Code Live Server),
   mert ES module-ök `file://` protokollon nem futnak.
2. Nyisd meg a `http://localhost:...` címet.
3. Keress / szűrj termékeket.
4. Tedd a kosárba, módosítsd a darabszámot, töröld.

## Technológiák
- HTML5
- Bootstrap 5 (csak ez, saját CSS nincs)
- JavaScript (ES6+ modulok, privát mezők, getterek)
- OOP megközelítés
# webshop_OOP
