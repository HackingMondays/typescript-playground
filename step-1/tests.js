/*
    === Aides ===

    Documentation des tableaux en js :
    => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/


/*
    === Sujet ===

    Nous souhaitons réaliser un caisse enregistreuse.
    Il y auras trois types de produits ;
    Pommes (1€), Bananes (1.5€), Cerires (0.75€)
    Le cacul du montant sera fait par la méthode calculTotal de la classe CaisseEnregistreuse,
    celle ci vous est-déjà fournis, il ne vous reste plus qu'à implémenter le comportement attendu
    Qui est de faire la somme des prix des aliments et de retourner ce montant.

    /!\ Les prix sont représentées en centimes pour l'exercice

*/

describe('Une caisse enregistreuse', function () {
    var caisse = new CaisseEnregistreuse();
    console.log(caisse, CaisseEnregistreuse);
    it('devrait retourner 2.5€ pour 1 lot de pommes et 2 lots cerises', function () {
        var total = caisse.calculTotal([new Pommes(), new Cerises(), new Cerises()]);
        total.should.be.equal(250);
    });
    it('devrait retourner 5€ pour 1 lot de bananes, 2 lots cerises et 2 lots de pommes', function () {
        var total = caisse.calculTotal([new Cerises(), new Pommes(), new Cerises(), new Bananes(), new Pommes()]);
        total.should.be.equal(500);
    });
});
