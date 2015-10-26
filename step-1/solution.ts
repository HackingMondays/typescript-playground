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
        return entrees.map(fruit => fruit.price())
            .reduce((acc, price) => acc + price, 0);
    }
}