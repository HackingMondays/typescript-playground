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

describe('Une caisse enregistreuse', function () {
    var caisse = new CaisseEnregistreuse();
    it('devrait retourner 2.7€ pour 2 lot de bananes et 2 lots cerises', function () {
        var total = caisse.calculTotal([new Bananes(), new Bananes(), new Cerises(), new Cerises()]);
        total.should.be.equal(270);
    });
    it('devrait retourner 5.45€ pour 2 lot de bananes, 3 lots cerises et 2 lots de pommes', function () {
        var total = caisse.calculTotal([new Cerises(), new Pommes(), new Cerises(), new Bananes(), new Pommes(), new Bananes(), new Cerises()]);
        total.should.be.equal(545);
    });
});
