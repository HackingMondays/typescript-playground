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

describe('Une caisse enregistreuse', function () {
    var caisse = new CaisseEnregistreuse();
    it('devrait retourner 2.30€ pour 1 lot de pommes et 2 lots cerises', function () {
        var total = caisse.calculTotal([new Pommes(), new Cerises(), new Cerises()]);
        total.should.be.equal(230);
    });
    it('devrait retourner 6.10€ pour 1 lot de bananes, 4 lots cerises et 2 lots de pommes', function () {
        var total = caisse.calculTotal([new Cerises(), new Pommes(), new Cerises(), new Bananes(), new Cerises(), new Cerises(), new Pommes()]);
        total.should.be.equal(610);
    });
});
