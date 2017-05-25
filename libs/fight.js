import isDead from './isDead';

const fight = (fighter, improvedFighter, ...point) => {
    let i = 0;
    for (let item of point) {
        if (i % 2 === 0) {
            fighter.hit(improvedFighter, item);
            if (isDead(improvedFighter)) {
                break;
            }
        }
        else {
            improvedFighter.hit(fighter, item);
            if (isDead(fighter)) {
                break;
            }
        }
        i++;
    }
};

export default fight;