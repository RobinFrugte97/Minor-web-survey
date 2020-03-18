## Browser tech

### Opdracht 2

### Enquete Minor Web

Voor opdracht 2 ga ik een progressive enhanced enquete maken.

#### Use case

Ik wil een enquete kunnen invullen over de minor Web Development, met verschillende antwoord mogelijkheden. Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.

### Wireflow

Ik schets eerst een wireflow en/of breakdown-schets met hoe de demo moet gaan werken en hoe het eruit komt te zien.

Het idee is dat de student voor het invullen van de enquete zijn

#### Start scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow1.png)

#### Gegevens scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow2.png)

#### Radio button scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow3.png)

#### Textbox scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow4.png)

#### Slider scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow5.png)

#### Later verder notificatie scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow6.png)

#### Verder gaan scherm

![](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/wireflow7.png)


### WAFS site
Mijn Web App From Scratch site gaat over Marvel superheroes. Er is een overzicht van characters met elk een detail pagina. Op een detail pagina heb je een grotere afbeelding en kun je zien in welke comic het desbetreffende character in voor komt.

[Link naar prototype](RobinFrugte97.github.io/wafs/app/)

### De 8 test features

1. Afbeeldingen uit
2. Custom fonts uit
3. Geen Javascript
4. Kleur uit
5. Breedband internet
6. Cookies
7. Local Storage
8. Muis/Trackpad

### Getest in Chrome version 80 op Windows 8.1


### Afbeeldingen
De site maakt veel gebruik van afbeeldingen, zowel op de hoofdpagina als op de detailpaginas. Ik krijg alle afbeeldingen in een zelf gekozen grootte terug van de Marvel API. Elke afbeelding die een superhero afbeeldt is een JPG. Het logo is een PNG afbeelding.

Problemen:
1. De images hebben geen `alt`. Als de afbeeldingen om wat voor reden dan ook niet laden, dan weet je niet waar het om gaat.
2. De site bestaat grotendeels uit afbeeldingen. Voor blinden of slechtzienden is de site dus praktisch onbruikbaar.

Oplossingen:
1. Per image wordt nu naast een `<img>` src ook een `<img>` alt gerendert.
  Code voor:
  ```Javascript
  thumbnail: {
    src: function(){
      return this.thumbnail
    }
  }
  ```
  Code na:
  ```Javascript
  thumbnail: {
    src: function(){
      return this.thumbnail
    },
    alt: function(){
      return "Thumbnail afbeelding van ${this.character}"
    }
  }
  ```
2. Per image wordt nu ook een `<img>` title gerendert, met daarin de naam van de desbetreffende superhero.  


### Custom fonts
Ik maak gebruik van een custom font op de website. De kans bestaat dat om wat voor reden dan ook de font niet geladen kan worden.

Problemen:
1. Er is geen geteste fallback font.

Oplossingen:
1. Helvetica toegevoegd als fallback font. Als fallback daarop een sans-serif font.
`font-family: americanCaptain, helvetica, sans-serif;`


### JavaScript
De website werkt niet zonder JavaScript. Zonder JavaScript zul je niet verder komen dan de loading spinner.

Problemen:
1. De website werkt niet zonder JavaScript. De data wordt niet opgehaald en er wordt geen pagina gerendert.

Oplossingen:
1. De site zou aan de server kant gerendert kunnen worden. Bij PWA wordt daar aan gewerkt


### Kleur
De site heeft een aantal verschillende kleuren, dankzij de vele verschillende afbeeldingen en kleurrijke characters.

De site is goed te gebruiken in zwart-wit.

![Zwart-wit](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/blackandwhite2.png)


### Screenreader
Ik heb de site getest met een screenreader. De gebruikte screenreader heet [NVDA](https://www.nvaccess.org/). De reader leest per character de afbeeldingen en de naam van het character.

![reader](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/screenreader.png)

### Breedband internet
De site is bijna geheel gebaseerd rond de Marvel API.
De API call die naar alle characters wordt gemaakt duurt op langzaam 3G netwerk minimaal 10 seconden. Vervolgens moeten alle afbeeldingen geladen worden. Per afbeelding duurt het 2 tot 5 seconden voor het geladen is.

Problemen:
1. Op een langzaam 3G netwerk duurt het erg lang om de site te laden. Dit komt mede door de vele afbeeldingen die geladen moeten worden.
2. Er wordt een groot aantal afbeeldingen binnen gehaald. Dit kan problemen veroorzaken bij iemand met een trage internet snelheid, zoals een langzame 3G verbinding op hun telefoon.

Oplossingen:
1. De Marvel API biedt verschillende afbeelding formaten. Je zou binnen JavaScript kunnen checken of de afbeeldingen er te lang over doen en vervolgens doorgaan met een kleiner formaat afbeeldingen.
2. De API call naar Marvel is eenvoudig te limiten. Zo is het aantal characters dat opgehaald wordt beperkt.

### Cookies
Ik maak op het moment geen gebruik van cookies in de website.


### Local Storage
Ik maak geen gebruik van local storage in de website.

Problemen:
1. Omdat er geen gebruik wordt gemaakt van local storage, moet de gebruiker elke keer de afbeeldingen en andere content opnieuw downloaden. Dit kan met een trage verbinding problemen opleveren.

Oplossingen:
1. De images zouden in de local storage opgeslagen kunnen worden voor mensen die vaker op de site terug komen, in het geval dat de gebruiker langzaam internet heeft.


### Muis / Trackpad
Ik had tijdens het maken van de app bij Web App From Scratch geen aandacht besteed aan hoe de site te bedienen is zonder muis.

Problemen:
1. Geen focus-states om door de website te navigeren met een toetsenbord.

Oplossingen:
1. Duidelijke focus-states toegevoegd aan alle elementen in de site die een functionaliteit hebben.

![Focusstate](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/focus-state.png)


## Devices en browsers voor het testen

### ASUS Windows 8.1 laptop

#### Firefox version 59.0
![firefoxscreenshot](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/BTFF.png)
- In Firefox werkt de site goed, alleen worden missende plaatjes op een andere manier getoond.

#### Internet Explorer version 11
![internetexplorerscreenshot](https://github.com/RobinFrugte97/Browser-Technologies-2020/blob/master/screenshots/BTIE11.png)
- De website komt niet voobij de loading state in Internet Explorer. Dit komt omdat de JavaScript kapot gaat. Internet Explorer ondersteunt geen Fetch. Dit is de manier 
waarmee ik de API calls doe. XMLHttpRequests worden wel ondersteund door Internet Explorer.

### Microsoft Surface (Windows 8.1)
#### Internet Explorer version 11

- JS fetch wordt niet ondersteund. De api call wordt nooit gedaan. Er is dus geen content.
    - De oplossing zou kunnen zijn: Een fallback schrijven in de Javascript naar XMLHttpRequest. Deze manier van api call wordt wel door IE 11 ondersteund.
- De styling gaat kapot, omdat de javascript niet voorbij de loader komt.


## NOTES

support detection & browsers

Als je iets wilt gebruiken, kun je in css en js kijken of het gesupport wordt.

CSS: @supports

```css
@supports (display: grid) {
  ...
}

@supports not (display: grid) {
  ...
}
```

JS: if (*check of er een waarde uit hetgene komt dat je wilt checken*)

In oude browsers:
```js
if (window.localStorage) {
  localStorage.setItem(etc)
}
```

Kan ook:
```js
if (localStorage) {
  localStorage.setItem(etc)
}
```

Render blocking
-link naar css of js, dan stopt html parser.
zet css maar boven in je pagina, accepteer dat het even blockt

defer vs async

do it now:
<script src>

Do it later:
<script defer src>

I dont care when, just not now:
<script async src>


Testen:

blink 
webkit safari
gecko
