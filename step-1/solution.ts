var prices = {
    "pommes": 100,
    "bananes": 150,
    "cerises": 75
}

class CaisseEnregistreuse {
    public calculTotal(entrees: Array<String>): Number {
        return entrees.map( (value) => prices[value.toLowerCase()] || 0 )
            .reduce( (acc, value)=> acc + value , 0)
    }
}