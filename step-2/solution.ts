interface Fruits {
    price():Number;
}

class Pommes implements Fruits {
    public price():Number {
        return 100
    }
}

class Cerises implements Fruits {
    public price():Number {
        return 75
    }
}

class Bananes implements Fruits {
    public price():Number {
        return 150
    }
}

class CaisseEnregistreuse {
    public calculTotal(entrees:Array<Fruits>): Number {
        var total = entrees.map(fruit => fruit.price())
            .reduce((acc, price) => acc + price, 0);
        var reduction = Math.floor(entrees.filter(fruit => fruit instanceof Cerises).length/2) * 20

        return total - reduction;
    }
}