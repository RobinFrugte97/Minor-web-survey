// import routes from 'static/modules/routes.js';

//IIFE immediately invoked function expression
(function(){
  'use strict';
  var app = {
    init: function(){
      console.log("app initialised");
      routes.init();
    }
  }
  var api = {
    data: [],
    retrieve: function (url, type, userInput) {
      helper.loader.show();
        var request = new XMLHttpRequest();
        request.open('GET', `${url}` , true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              var compressedData = data.data.results;
              console.log(type);
              template.render(compressedData, type);
              helper.loader.hide();
              api.data = compressedData;
          } else {
            var errorMessage = document.getElementById("errorMessage");
            errorMessage.classList.remove('hidden');
            errorMessage.classList.add('show');
            setTimeOut(function(){
              errorMessage.classList.remove('show');
              errorMessage.classList.add('hidden')
            }, 3000)
          }
        };
        request.onerror = function() {
          console.log('error');
        };
        request.send();
    },
    characters: function () {
      this.retrieve('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=100', 'list')
    },
    character: function (id) {
      this.retrieve(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05`, 'detail')
    },
    filter: function () {
      this.filterRetrieve('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e2c13dcb787436182cc25b65cbcfde95&hash=f60cbe16481792de29bc9c79da37aa05&limit=100')
    },
    filterRetrieve: function (url) {
      helper.loader.show();
        var request = new XMLHttpRequest();
        request.open('GET', `${url}` , true);
        request.onload = function() {
          if (request.status >= 200 && request.status < 400) {
              var data = JSON.parse(request.responseText);
              var compressedData = data.data.results;
              helper.loader.hide();
          } else {
            console.log(request.status);
          }
        };
        request.onerror = function() {
          console.log('error');
        };
        request.send();
    }
  }
  var events = {
    filter: function() {
      var filterInput = document.getElementById("filterInput");
      var filteredCharacters = []
      filterInput.onkeyup = function(e){
        var value = e.currentTarget.value;
        console.log(value);

        api.data.forEach(function(data){
          data.name.toLowerCase();
          var name = data.name.toLowerCase();
          var newName = name.indexOf(value)
          if (newName > -1) {
            filteredCharacters.push(data);
            var type = "list";
            template.render(filteredCharacters, type);
          }
        });
      }
    }
  }
  var helper = {
    loader: {
      show: function(){
        console.log("show");
        var loader = document.getElementById("wrapper");
        loader.classList.remove("hidden");
        loader.classList.add("flex");
      },
      hide: function(){
        console.log("hide");
        var loader = document.getElementById("wrapper");
        loader.classList.remove("flex");
        loader.classList.add("hidden");
      }
    }
  }
  var routes = {
    init: function(){
      this.handleEvents();
    },
    handleEvents: function(data){
      routie({
        "characters/:id": function(id){
          api.character(id);
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });
        },
        '*': function() {
          api.characters();
          var sections = document.querySelectorAll("section");
          sections.forEach(function(section){
            section.classList.toggle('active');
          });
        }
      });
    }
  }
  var template = {
    render: function(data, type){
      if (type == 'list') {
        var renderData = data.map(function(d, i){
          return {
            character: d.name,
            id: d.id,
            thumbnail: d.thumbnail.path + '/standard_xlarge.jpg'
          }
        });
        var directives = {
          link: {
            href: function() {
              return `#/${this.id}`;
            }
          },
          thumbnail: {
            src: function(){
              return this.thumbnail;
            },
            alt: function(){
              return `Thumbnail afbeelding van ${this.character}`
            },
            title: function(){
              return `Thumbnail afbeelding van ${this.character}`
            }
          }
        }
        Transparency.render(document.getElementById("characters"), renderData, directives);
        events.filter();
      } else if (type == 'detail') {
        var renderData = data.map(function(d, i){
          return {
            character: d.name,
            heroImage: d.thumbnail.path + '/portrait_uncanny.jpg',
            comics: d.comics.items
          }
        });
        var directives = {
          heroImage: {
            src: function(){
              return this.heroImage;
            },
            alt: function(){
              return `Grote afbeelding van ${this.character}`
            },
            title: function(){
              return `Grote afbeelding van ${this.character}`
            }
          }
        }
        Transparency.render(document.getElementById("characterPage"), renderData, directives);
      }
    }
  }
  app.init();
})()
