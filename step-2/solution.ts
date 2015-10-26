interface Fruits {
    price():Number;
    is(name: Stirng): Boolean;
}

class Pommes implements Fruits {
    public price():Number {
        return 100
    }
    public is(name: String): Boolean {
        return name == "Pommes"
    }
}

class Cerises implements Fruits {
    public price():Number {
        return 75
    }
    public is(name: String): Boolean {
        return name == "Cerises"
    }
}

class Bananes implements Fruits {
    public price():Number {
        return 150
    }
    public is(name: String): Boolean {
        return name == "Bananes"
    }
}

class CaisseEnregistreuse {
    public calculTotal(entrees:Array<Fruits>): Number {
        var total = entrees.map(fruit => fruit.price())
            .reduce((acc, price) => acc + price, 0);
        var reduction = Math.floor(entrees.filter(fruit => fruit.is("Cerises")).length/2) * 20

        return total - reduction;
    }
}