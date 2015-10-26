var prices = {
    "pommes": 100,
    "bananes": 150,
    "cerises": 75
}

var reductions = {
    "cerises": {
        "qty": 2,
        "amount": 30
    },
    "bananes": {
        "qty": 2,
        "amount": prices.bananes
    }
}

class CaisseEnregistreuse {
    public calculTotal(entrees: Array<String>): Number {
        var map = entrees.map(v => v.toLowerCase())
            .reduce((acc, v) => {
                acc[v] = (acc[v] || 0) + 1
                return acc
            }, {})
        console.log('=')
        return Object.keys(prices).map((fruit) => {
            var qty = map[fruit] || 0
            var price = qty * prices[fruit];
            var reduction = reductions[fruit];
            if (reduction) {
                price -= Math.floor(qty / reduction.qty) * reduction.amount
            }
            console.log(price, fruit, qty)
            return price
        }).reduce((acc, value) => acc + value, 0)
    }
}