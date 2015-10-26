/*
 === Aides ===

 Documentation des tableaux en js :
 => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */


/*
 === Sujet ===

 Toujours la même caisse mais cette fois nous introduisons des réductions.
 Pour 2 lots de cerises achetés on applique une réduction de 20 centimes

 */

describe('Un caisse enregistreuse', function () {
    var caisse = new CaisseEnregistreuse();
    it('devrait retourner 2.30€ pour 1 lot de pommes et 2 lots cerises', function () {
        var total = caisse.calculTotal(["Pommes", "Cerises", "Cerises"]);
        total.should.be.equal(230);
    });
    it('devrait retourner 5.45€ pour 2 lot de bananes, 3 lots cerises et 2 lots de pommes', function () {
        var total = caisse.calculTotal(["Cerises", "Pommes", "Cerises", "Bananes", "Cerises", "Cerises", "Pommes"]);
        total.should.be.equal(610);
    });
});