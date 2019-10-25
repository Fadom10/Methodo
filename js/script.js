$(document).ready(function () {

   $("#submit").click(function (e) {
      var city = $("#info_ville").val();

      $.ajax({
         url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=b2a50dbb06c2641ab2895e391a4afc9b',
         type: 'GET',
         datatType: 'JSON',
         success: function (resultat, statut) {
          // $(resultat.main.temp).appendTo("#res");
          var res=resultat.main.temp;
          var kToCel = res - 273.15;
          $("#res").html(city); 
          $("#temp").html(Math.round(kToCel)); 
         },

         error: function (resultat, statut, erreur) {


         },


         complete: function (resultat, statut) {



         }

      });

   });

});
