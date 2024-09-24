// Utilizando a propriedade com nome (pre-ES6)
var obj2 = {
    g: function* () {
      var indice = 0;
      while (true) yield indice++;
    },
  };
  
  // O mesmo objeto utilizando a sintaxe reduzida
  var obj2 = {
    *g() {
      var indice = 0;
      while (true) yield indice++;
    },
  };
  
  var coisa = obj2.g();
  console.log(coisa.next().value); // 0
  console.log(coisa.next().value); // 1