function Wardrobe (name, shoes) {
    this.name = name;

    Object.defineProperty(this, 'shoes', {
        enumerable: false,
        value: shoes,
        writable: true,
        configurable: false,
        });
}

const p1 = new Wardrobe('bota');
p1.shoes = 100;
console.log(p1);

