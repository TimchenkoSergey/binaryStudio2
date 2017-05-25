class Fighter {
    constructor ({ name = 'SuperMan', power = 1, health = 10 }) {
        this.name   = name;
        this.power  = power;
        this.health = health;
    }

    setDamage (damage = 10) {
        this.health = this.health - damage;

        console.log(`Fighter ${this.name} took damage. His HP - ${ (this.health >= 0) ? this.health : 0 }`);
    }

    hit (enemy, point = 2) {
        const damage = this.power * point;

        enemy.setDamage(damage);
    }
    
    isFighterDead () {
        return this.health <= 0;
    }
}

export default Fighter;