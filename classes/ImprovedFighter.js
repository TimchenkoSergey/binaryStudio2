import Fighter from './Fighter';

class ImprovedFighter extends Fighter {
    constructor (options) {
        super(options);
    }

    doubleHit (enemy, point) {
        const doublePoint = point * 2;

        super.hit(enemy, doublePoint);
    }
}

export default ImprovedFighter;