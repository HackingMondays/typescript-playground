interface Fruits {
    price():number;
}

class Pommes implements Fruits {
    public price():number {
        return 0
    }
}
class Cerises implements Fruits {
    public price():number {
        return 0
    }
}
class Bananes implements Fruits {
    public price():number {
        return 0
    }
}

class CaisseEnregistreuse {
    public calculTotal(entrees:Array<Fruits>): number {
        return entrees.map(fruit => fruit.price())
            .reduce((acc, price) => acc + price, 0);
    }
}
