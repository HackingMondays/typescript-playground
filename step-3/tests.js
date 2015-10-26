/*
 === Aides ===

 Documentation des tableaux en js :
 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */


/*
 === Sujet ===

 Cette fois l'on change les réductions :
 Pour deux lots de cerises la réductions est maintenant de 30 centimes
 Et un lot de bananes acheté le second offert.

 */

describe('Un caisse enregistreuse', function () {
    var caisse = new CaisseEnregistreuse();
    it('devrait retourner 2.7€ pour 2 lot de bananes et 2 lots cerises', function () {
        var total = caisse.calculTotal(["Bananes", "Bananes", "Cerises", "Cerises"]);
        total.should.be.equal(270);
    });
    it('devrait retourner 5€ pour 1 lot de bananes, 4 lots cerises et 2 lots de pommes', function () {
        var total = caisse.calculTotal(["Cerises", "Pommes", "Cerises", "Bananes", "Pommes", "Bananes", "Cerises"]);
        total.should.be.equal(545);
    });
});