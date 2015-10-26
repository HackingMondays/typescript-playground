interface Fruits {
    price():Number;
}

class Pommes implements Fruits {
    public price():Number {
        return 0
    }
}
class Cerises implements Fruits {
    public price():Number {
        return 0
    }
}
class Bananes implements Fruits {
    public price():Number {
        return 0
    }
}

class CaisseEnregistreuse {
    public calculTotal(entrees:Array<Fruits>): Number {
        return entrees.map(fruit => fruit.price())
            .reduce((acc, price) => acc + price, 0);
    }
}