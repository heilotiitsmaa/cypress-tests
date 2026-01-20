# Cypress UI Testid - Postimees.ee

See projekt sisaldab automaatteste Postimees.ee uudisteportaalile, kasutades Cypressi raamistikku.

## Testitud funktsioonid
* Avalehe laadimine ja pealkirja kontroll.
* Navigeerimine erinevate rubriikide vahel.
* Dünaamilise sisu (ilmateate vidin) kontroll.
* Artikli avamine ja sisu laadimine.
* Küpsiste nõusoleku bänneri automaatne haldus.

## Paigaldamine
1. Klooni repo: `git clone https://github.com/SINU-KASUTAJANIMI/cypress-postimees-test.git`
2. Mine kausta: `cd cypress-postimees-test`
3. Paigalda sõltuvused: `npm install`

## Testide käivitamine
* Visuaalne režiim: `npx cypress open`
* Headless režiim: `npx cypress run`
