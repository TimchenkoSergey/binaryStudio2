import isDead from './isDead';

const fight = (fighter, improvedFighter, ...point) => {
    let i         = 0;
    let noOneDied = true;
    
    for (let item of point) {
        if (i % 2 === 0) {
            fighter.hit(improvedFighter, item);
            if (isDead(improvedFighter)) {
                noOneDied = false;
                break;
            }
        }
        else {
            improvedFighter.hit(fighter, item);
            if (isDead(fighter)) {
                noOneDied = false;
                break;
            }
        }
        i++;
    }

    if (noOneDied) {
        console.log(`No one died. Everyone is alive.`);
    }
};

export default fight;