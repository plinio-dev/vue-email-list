// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


var app = new Vue ({

  el: "#app",
  data: {
    emails:[ ],

  },
  mounted: function(){
    var self = this;

    for (i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(risposta){

      self.emails.push(risposta.data.response)

      });
    }
  }

});
